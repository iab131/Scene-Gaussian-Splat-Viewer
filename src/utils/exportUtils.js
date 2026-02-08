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
 * Convert pixel data to JPEG data URL
 * @param {Uint8Array} pixels - RGBA pixel data
 * @param {number} width - Image width
 * @param {number} height - Image height
 * @returns {string} JPEG data URL
 */
function pixelsToDataUrl(pixels, width, height) {
  // Create canvas for conversion
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const ctx = canvas.getContext('2d');
  
  // WebGL renders upside down, so we need to flip vertically
  const imageData = ctx.createImageData(width, height);
  
  // Flip Y and copy pixels
  for (let y = 0; y < height; y++) {
    const srcRow = (height - 1 - y) * width * 4;
    const dstRow = y * width * 4;
    for (let x = 0; x < width * 4; x++) {
      imageData.data[dstRow + x] = pixels[srcRow + x];
    }
  }
  
  ctx.putImageData(imageData, 0, 0);
  return canvas.toDataURL('image/jpeg', 0.95);
}

/**
 * Export MP4 along the recorded camera path using OFFSCREEN rendering
 * 
 * Strategy:
 * - Uses WebGLRenderTarget to render at fixed resolution
 * - Temporarily moves main camera to export position for each frame (viewer uses main camera)
 * - Immediately restores camera after render
 * - Main canvas is NOT resized - offscreen target handles resolution
 * - Main canvas continues normal rendering between frames
 * 
 * @param {Object} params - Export parameters
 * @param {React.RefObject} params.cameraRef - Camera reference
 * @param {React.RefObject} params.controlsRef - Controls reference
 * @param {React.RefObject} params.rendererRef - Renderer reference
 * @param {React.RefObject} params.viewerRef - Viewer reference
 * @param {React.RefObject} params.sceneRef - Scene reference
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
  sceneRef,
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

  // Generate filename with timestamp
  const timestamp = new Date().toISOString().replace(/[:.]/g, '-').slice(0, 19);
  const filename = `camera_render_${timestamp}.mp4`;

  const renderer = rendererRef.current;
  const camera = cameraRef.current;
  
  // === SAVE ORIGINAL CAMERA STATE ===
  // This is restored after ALL frames are done
  const savedCameraState = {
    position: camera.position.clone(),
    quaternion: camera.quaternion.clone(),
    fov: camera.fov,
    aspect: camera.aspect
  };
  
  // Save controls target
  const savedControlsTarget = controlsRef.current?.target?.clone();
  
  // === OFFSCREEN RENDERING SETUP ===
  // Create a WebGLRenderTarget for offscreen rendering at export resolution
  const renderTarget = new THREE.WebGLRenderTarget(width, height, {
    minFilter: THREE.LinearFilter,
    magFilter: THREE.LinearFilter,
    format: THREE.RGBAFormat,
    type: THREE.UnsignedByteType,
    depthBuffer: true,
    stencilBuffer: false
  });
  
  // Buffer to read pixels from render target
  const pixelBuffer = new Uint8Array(width * height * 4);
  
  // Set camera aspect for export resolution
  camera.aspect = width / height;
  camera.updateProjectionMatrix();

  let wasCancelled = false;
  let exportSuccess = false;

  try {
    // Start server export session
    const startRes = await fetch('http://localhost:5000/start-export', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fps, filename })
    });
    
    if (!startRes.ok) throw new Error('Failed to start export server session');

    // Calculate total frames based on validated duration
    const totalFrames = Math.ceil((validatedDuration / 1000) * fps);

    console.log(`Exporting ${totalFrames} frames (${(validatedDuration / 1000).toFixed(1)}s) using offscreen rendering at ${width}x${height}...`);

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

      // === APPLY EXPORT CAMERA STATE ===
      // Temporarily move the main camera to the export position
      // (Viewer uses main camera internally)
      camera.position.copy(state.position);
      camera.quaternion.copy(state.quaternion);
      
      if (camera.fov !== state.fov) {
        camera.fov = state.fov;
        camera.updateProjectionMatrix();
      }
      
      camera.updateMatrixWorld(true);
      
      // === OFFSCREEN RENDER ===
      // Set render target to our offscreen buffer
      renderer.setRenderTarget(renderTarget);
      renderer.clear();
      
      // Update and render the splat viewer to the offscreen target
      // The viewer uses the main camera (which we've moved to export position)
      viewerRef.current.update();
      viewerRef.current.render();
      
      // Read pixels from render target
      renderer.readRenderTargetPixels(renderTarget, 0, 0, width, height, pixelBuffer);
      
      // Reset render target to screen immediately
      renderer.setRenderTarget(null);
      
      // Convert pixels to JPEG data URL
      const dataUrl = pixelsToDataUrl(pixelBuffer, width, height);
      
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
      
      // Small delay to prevent blocking and allow UI updates
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
    // === CLEANUP ===
    // Dispose render target
    renderTarget.dispose();
    
    // Reset render target to screen (safety)
    renderer.setRenderTarget(null);
    
    // === RESTORE CAMERA STATE ===
    camera.position.copy(savedCameraState.position);
    camera.quaternion.copy(savedCameraState.quaternion);
    camera.fov = savedCameraState.fov;
    camera.aspect = savedCameraState.aspect;
    camera.updateProjectionMatrix();
    camera.updateMatrixWorld(true);
    
    // Restore controls
    if (controlsRef.current) {
      if (savedControlsTarget) {
        controlsRef.current.target.copy(savedControlsTarget);
      }
      controlsRef.current.enabled = controlsWereEnabled;
    }
    
    setIsExporting(false);
    setExportProgress(0);
    
    console.log('Offscreen export cleanup complete');
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
