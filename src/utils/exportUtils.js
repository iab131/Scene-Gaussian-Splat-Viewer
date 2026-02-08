import { interpolateCameraPath } from './pathInterpolation';
import * as THREE from 'three';

/**
 * Validate and clamp export duration
 * @param {number} durationMs - Duration in milliseconds
 * @returns {number} Clamped duration in milliseconds (1000-30000)
 */
function validateDuration(durationMs) {
  const minMs = 1000;   // 1 second
  const maxMs = 30000;  // 30 seconds
  return Math.max(minMs, Math.min(maxMs, durationMs));
}

/**
 * Prompt user to save file using File System Access API
 * Falls back to regular download if API not available
 * 
 * @param {Blob} blob - The video blob to save
 * @param {string} suggestedName - Suggested filename
 * @returns {Promise<boolean>} Whether save was successful
 */
async function promptSaveFile(blob, suggestedName) {
  // Try File System Access API for native save dialog
  if ('showSaveFilePicker' in window) {
    try {
      const handle = await window.showSaveFilePicker({
        suggestedName,
        types: [{
          description: 'MP4 Video',
          accept: { 'video/mp4': ['.mp4'] }
        }]
      });
      
      const writable = await handle.createWritable();
      await writable.write(blob);
      await writable.close();
      
      return true;
    } catch (err) {
      // User cancelled the save dialog
      if (err.name === 'AbortError') {
        console.log('User cancelled file save');
        return false;
      }
      // API error - fall through to regular download
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
 * Export MP4 along the recorded camera path
 * Uses the same interpolation as Preview Play for deterministic results
 * 
 * @param {Object} params - Export parameters
 * @param {React.RefObject} params.cameraRef - Camera reference
 * @param {React.RefObject} params.controlsRef - Controls reference
 * @param {React.RefObject} params.rendererRef - Renderer reference
 * @param {React.RefObject} params.viewerRef - Viewer reference
 * @param {React.RefObject} params.requestRef - Animation frame request reference
 * @param {Array} params.keyframes - Recorded camera keyframes
 * @param {Function} params.setExportProgress - Progress state setter
 * @param {Function} params.setIsExporting - Exporting state setter
 * @param {React.RefObject} params.cancelRef - Cancel signal ref (set .current = true to cancel)
 * @param {number} params.duration - Export duration in milliseconds (1000-30000, default 5000)
 * @param {number} params.fps - Frames per second (default 30)
 * @param {number} params.width - Export width (default 1280)
 * @param {number} params.height - Export height (default 720)
 * @returns {Promise<{success: boolean, cancelled: boolean}>} Export result
 */
export async function startPathExport({
  cameraRef,
  controlsRef,
  rendererRef,
  viewerRef,
  requestRef,
  keyframes,
  setExportProgress,
  setIsExporting,
  cancelRef,
  duration = 5000,
  fps = 30,
  width = 1280,
  height = 720
}) {
  if (!rendererRef.current || !viewerRef.current) return { success: false, cancelled: false };
  if (!keyframes || keyframes.length < 2) {
    alert('Need at least 2 keyframes to export');
    return { success: false, cancelled: false };
  }
  
  // Reset cancel signal
  if (cancelRef) cancelRef.current = false;
  
  // Validate and clamp duration
  const validatedDuration = validateDuration(duration);
  
  setIsExporting(true);
  setExportProgress(0);

  // Disable controls during export
  const controlsWereEnabled = controlsRef.current?.enabled ?? true;
  if (controlsRef.current) controlsRef.current.enabled = false;

  // Store original renderer size (use window dimensions, not canvas pixel dimensions)
  // Canvas.width includes pixel ratio, but setSize expects CSS dimensions
  const originalWidth = window.innerWidth;
  const originalHeight = window.innerHeight;
  
  
  // Save complete camera state to restore after export
  // This prevents export from mutating the camera's transform
  const savedCameraState = {
    position: cameraRef.current.position.clone(),
    quaternion: cameraRef.current.quaternion.clone(),
    fov: cameraRef.current.fov,
    aspect: cameraRef.current.aspect,
    matrix: cameraRef.current.matrix.clone(),
    matrixWorld: cameraRef.current.matrixWorld.clone()
  };
  
  // Also save orbit controls target - this is critical for proper restoration
  const savedControlsTarget = controlsRef.current?.target?.clone();

  // Generate filename with timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const filename = `camera_path_${timestamp}.mp4`;

  let wasCancelled = false;
  let exportSuccess = false;

  try {
    // Resize renderer for export resolution
    rendererRef.current.setSize(width, height);
    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();

    // Start server export session
    const startRes = await fetch('http://localhost:5000/start-export', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fps, filename })
    });
    
    if (!startRes.ok) throw new Error('Failed to start export server session');

    // Calculate total frames based on validated duration
    const totalFrames = Math.ceil((validatedDuration / 1000) * fps);
    
    // Note: We intentionally do NOT stop the main animation loop during export.
    // The main animation loop in useThreeSetup contains walk mode WASD processing.
    // If we cancel and restart with a simplified loop, walk mode breaks after export.
    // The main loop continues but we manually control rendering for each export frame.

    console.log(`Exporting ${totalFrames} frames (${(validatedDuration / 1000).toFixed(1)}s) along camera path...`);

    // Render each frame along the path
    for (let i = 0; i < totalFrames; i++) {
      // Check for cancellation
      if (cancelRef?.current) {
        console.log('Export cancelled by user at frame', i);
        wasCancelled = true;
        break;
      }
      
      // Calculate normalized time (0 to 1)
      const t = i / (totalFrames - 1);
      
      // Get interpolated camera state (with easing for cinematic motion)
      const state = interpolateCameraPath(keyframes, t, true);

      // Apply state to camera (same as playback)
      cameraRef.current.position.copy(state.position);
      cameraRef.current.quaternion.copy(state.quaternion);
      
      if (cameraRef.current.fov !== state.fov) {
        cameraRef.current.fov = state.fov;
        cameraRef.current.updateProjectionMatrix();
      }
      
      cameraRef.current.updateMatrixWorld(true);
      
      // Render the frame
      viewerRef.current.update();
      viewerRef.current.render();
      
      // Capture frame as JPEG
      const dataUrl = rendererRef.current.domElement.toDataURL('image/jpeg', 0.95);
      
      // Send frame to server
      const frameRes = await fetch('http://localhost:5000/export-frame', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: dataUrl })
      });
      
      if (!frameRes.ok) {
        console.warn(`Frame ${i} failed to send`);
      }
      
      // Update progress
      setExportProgress(((i + 1) / totalFrames) * 100);
      
      // Small delay to prevent blocking
      await new Promise(r => setTimeout(r, 5));
    }
    
    // If cancelled, tell server to abort
    if (wasCancelled) {
      console.log('Sending cancel request to server...');
      try {
        await fetch('http://localhost:5000/cancel-export', { method: 'POST' });
      } catch (e) {
        console.warn('Failed to send cancel to server:', e);
      }
      return { success: false, cancelled: true };
    }
    
    // Finalize video on server
    console.log('Finalizing video...');
    const finalizeRes = await fetch('http://localhost:5000/finalize-video', { method: 'POST' });
    const finalizeData = await finalizeRes.json();
    
    // Give server a moment to finish writing the file
    await new Promise(r => setTimeout(r, 500));
    
    // Download the video file
    console.log('Downloading video for save...');
    const downloadRes = await fetch('http://localhost:5000/download-video');
    
    if (!downloadRes.ok) {
      throw new Error('Failed to download video from server');
    }
    
    const videoBlob = await downloadRes.blob();
    
    // Prompt user to save the file
    const saved = await promptSaveFile(videoBlob, filename);
    
    if (saved) {
      alert(`Export Complete! Video saved (${(videoBlob.size / (1024 * 1024)).toFixed(2)} MB)`);
      exportSuccess = true;
    }

  } catch (err) {
    console.error('Export failed:', err);
    if (!wasCancelled) {
      alert('Export failed: ' + err.message);
    }
  } finally {
    // Restore original renderer size
    rendererRef.current.setSize(originalWidth, originalHeight);
    
    // Restore complete camera state to undo any export mutations
    cameraRef.current.position.copy(savedCameraState.position);
    cameraRef.current.quaternion.copy(savedCameraState.quaternion);
    cameraRef.current.fov = savedCameraState.fov;
    cameraRef.current.aspect = savedCameraState.aspect;
    cameraRef.current.updateProjectionMatrix();
    
    // Decompose the saved matrix to get exact rotation (more reliable than quaternion copy)
    cameraRef.current.matrix.copy(savedCameraState.matrix);
    cameraRef.current.matrix.decompose(
      cameraRef.current.position,
      cameraRef.current.quaternion,
      cameraRef.current.scale
    );
    cameraRef.current.updateMatrixWorld(true);
    
    // Restore controls with saved target position
    if (controlsRef.current) {
      // Restore the saved target position BEFORE enabling controls
      if (savedControlsTarget) {
        controlsRef.current.target.copy(savedControlsTarget);
      }
      
      // DON'T call update() here - it can recompute camera orientation
      // The next animation frame will call update() naturally
      
      controlsRef.current.enabled = controlsWereEnabled;
    }
    
    setIsExporting(false);
    setExportProgress(0);
    
    // Note: We don't restart the animation loop here.
    // The main animation loop from useThreeSetup continues running and will
    // resume normal operation once controls are re-enabled.
    // This fixes the bug where walk mode movement stopped working because
    // a new simplified animation loop was replacing the original.
  }
  
  return { success: exportSuccess, cancelled: wasCancelled };
}

/**
 * Legacy: Start MP4 export - captures a 360 orbit around the scene
 * @deprecated Use startPathExport instead
 */
export async function startExport({
  cameraRef,
  controlsRef,
  rendererRef,
  viewerRef,
  requestRef,
  setExportProgress,
  setIsExporting
}) {
  if (!rendererRef.current || !viewerRef.current) return;
  
  const confirmExport = window.confirm("Start MP4 export? This will capture a 360 orbit.");
  if (!confirmExport) return;

  setIsExporting(true);
  setExportProgress(0);

  try {
    const startRes = await fetch('http://localhost:5000/start-export', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fps: 30, filename: `render_${Date.now()}.mp4` })
    });
    
    if (!startRes.ok) throw new Error("Failed to start export server session");

    const totalFrames = 150;
    const originalPosition = cameraRef.current.position.clone();
    const radius = Math.sqrt(originalPosition.x ** 2 + originalPosition.z ** 2);
    const height = originalPosition.y;
    
    if (requestRef.current) cancelAnimationFrame(requestRef.current);

    for (let i = 0; i < totalFrames; i++) {
      const angle = (i / totalFrames) * Math.PI * 2;
      const x = Math.sin(angle) * radius;
      const z = Math.cos(angle) * radius;
      
      cameraRef.current.position.set(x, height, z);
      cameraRef.current.lookAt(0, 0, 0);
      cameraRef.current.updateMatrixWorld();
      
      viewerRef.current.update();
      viewerRef.current.render();
      
      const dataUrl = rendererRef.current.domElement.toDataURL('image/jpeg', 0.9);
      
      await fetch('http://localhost:5000/export-frame', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ image: dataUrl })
      });
      
      setExportProgress(((i + 1) / totalFrames) * 100);
      await new Promise(r => setTimeout(r, 10));
    }
    
    await fetch('http://localhost:5000/finalize-video', { method: 'POST' });
    alert("Export Complete!");
    
    cameraRef.current.position.copy(originalPosition);
    controlsRef.current.update();

  } catch (err) {
    console.error("Export failed:", err);
    alert("Export failed: " + err.message);
    window.location.reload();
  } finally {
    setIsExporting(false);
    // Restart animation loop
    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);
      if (controlsRef.current) controlsRef.current.update();
      if (viewerRef.current) {
        viewerRef.current.update();
        viewerRef.current.render();
      }
    };
    animate();
  }
}
