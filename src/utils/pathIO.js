/**
 * Camera Path I/O Utilities
 * Save and load camera paths with export settings for deterministic export
 */

// Current schema version for forward compatibility
const SCHEMA_VERSION = 1;

/**
 * Serialize a camera path and export settings to a JSON-compatible object
 * 
 * @param {Object} params - Path data
 * @param {Array} params.keyframes - Camera keyframes array
 * @param {Object} params.exportSettings - Export settings (duration, fps, resolution)
 * @param {Object} params.metadata - Optional metadata (name, description)
 * @returns {Object} Serialized path data
 */
export function serializeCameraPath({ keyframes, exportSettings, metadata = {} }) {
  // Convert keyframes to plain objects (THREE.js objects aren't JSON-serializable)
  const serializedKeyframes = keyframes.map((kf, index) => ({
    index,
    position: {
      x: kf.position.x,
      y: kf.position.y,
      z: kf.position.z
    },
    quaternion: {
      x: kf.quaternion.x,
      y: kf.quaternion.y,
      z: kf.quaternion.z,
      w: kf.quaternion.w
    },
    fov: kf.fov,
    // Include timing info if available
    timestamp: kf.timestamp || index
  }));

  return {
    schemaVersion: SCHEMA_VERSION,
    createdAt: new Date().toISOString(),
    metadata: {
      name: metadata.name || 'Untitled Camera Path',
      description: metadata.description || '',
      keyframeCount: keyframes.length
    },
    keyframes: serializedKeyframes,
    exportSettings: {
      duration: exportSettings.duration || 5,        // Duration in seconds
      fps: exportSettings.fps || 30,
      width: exportSettings.width || 1280,
      height: exportSettings.height || 720
    }
  };
}

/**
 * Deserialize a camera path from saved JSON data
 * Returns THREE.js compatible objects
 * 
 * @param {Object} data - Saved path data
 * @param {Object} THREE - THREE.js module reference
 * @returns {Object} Deserialized path with keyframes and settings
 */
export function deserializeCameraPath(data, THREE) {
  // Validate schema version
  if (!data.schemaVersion) {
    throw new Error('Invalid path file: missing schema version');
  }
  
  if (data.schemaVersion > SCHEMA_VERSION) {
    console.warn(`Path file version ${data.schemaVersion} is newer than current ${SCHEMA_VERSION}. Some features may not work.`);
  }

  // Validate keyframes
  if (!data.keyframes || !Array.isArray(data.keyframes)) {
    throw new Error('Invalid path file: missing or invalid keyframes');
  }

  if (data.keyframes.length < 2) {
    throw new Error('Invalid path file: need at least 2 keyframes');
  }

  // Deserialize keyframes to THREE.js objects
  const keyframes = data.keyframes.map((kf, index) => {
    // Validate required fields
    if (!kf.position || !kf.quaternion || kf.fov === undefined) {
      throw new Error(`Invalid keyframe at index ${index}: missing required fields`);
    }

    return {
      position: new THREE.Vector3(kf.position.x, kf.position.y, kf.position.z),
      quaternion: new THREE.Quaternion(kf.quaternion.x, kf.quaternion.y, kf.quaternion.z, kf.quaternion.w),
      fov: kf.fov,
      timestamp: kf.timestamp ?? index
    };
  });

  // Extract export settings with defaults
  const exportSettings = {
    duration: data.exportSettings?.duration ?? 5,
    fps: data.exportSettings?.fps ?? 30,
    width: data.exportSettings?.width ?? 1280,
    height: data.exportSettings?.height ?? 720
  };

  return {
    keyframes,
    exportSettings,
    metadata: data.metadata || {},
    schemaVersion: data.schemaVersion,
    createdAt: data.createdAt
  };
}

/**
 * Save camera path to a file using File System Access API or fallback download
 * 
 * @param {Object} pathData - Camera path data to save
 * @param {string} suggestedName - Suggested filename
 * @returns {Promise<boolean>} Whether save was successful
 */
export async function saveCameraPath(pathData, suggestedName = 'camera-path.json') {
  const jsonString = JSON.stringify(pathData, null, 2);
  const blob = new Blob([jsonString], { type: 'application/json' });

  // Try File System Access API for native save dialog
  if ('showSaveFilePicker' in window) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName,
        types: [{
          description: 'Camera Path JSON',
          accept: { 'application/json': ['.json'] }
        }]
      });
      
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      
      return true;
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('User cancelled path save');
        return false;
      }
      console.warn('File System Access API error, falling back to download:', err);
    }
  }
  
  // Fallback: Create download link
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = suggestedName;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  
  return true;
}

/**
 * Load camera path from a file selected by user
 * 
 * @returns {Promise<Object|null>} Parsed path data or null if cancelled/failed
 */
export async function loadCameraPath() {
  // Try File System Access API for native file picker
  if ('showOpenFilePicker' in window) {
    try {
      const [handle] = await window.showOpenFilePicker({
        types: [{
          description: 'Camera Path JSON',
          accept: { 'application/json': ['.json'] }
        }],
        multiple: false
      });
      
      const file = await handle.getFile();
      const text = await file.text();
      return JSON.parse(text);
    } catch (err) {
      if (err.name === 'AbortError') {
        console.log('User cancelled path load');
        return null;
      }
      throw err;
    }
  }
  
  // Fallback: Use hidden file input
  return new Promise((resolve, reject) => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = '.json,application/json';
    
    input.onchange = async (e) => {
      const file = e.target.files?.[0];
      if (!file) {
        resolve(null);
        return;
      }
      
      try {
        const text = await file.text();
        resolve(JSON.parse(text));
      } catch (err) {
        reject(err);
      }
    };
    
    input.oncancel = () => resolve(null);
    input.click();
  });
}
