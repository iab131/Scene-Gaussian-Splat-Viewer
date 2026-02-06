import { interpolateCameraPath } from './pathInterpolation';

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
 * @param {number} params.duration - Export duration in milliseconds (default 5000)
 * @param {number} params.fps - Frames per second (default 30)
 * @param {number} params.width - Export width (default 1280)
 * @param {number} params.height - Export height (default 720)
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
  duration = 5000,
  fps = 30,
  width = 1280,
  height = 720
}) {
  if (!rendererRef.current || !viewerRef.current) return;
  if (!keyframes || keyframes.length < 2) {
    alert('Need at least 2 keyframes to export');
    return;
  }
  
  const confirmExport = window.confirm(
    `Export MP4 along camera path?\n\n` +
    `• ${keyframes.length} keyframes\n` +
    `• ${(duration / 1000).toFixed(1)}s duration\n` +
    `• ${width}×${height} @ ${fps}fps`
  );
  if (!confirmExport) return;

  setIsExporting(true);
  setExportProgress(0);

  // Disable controls during export
  const controlsWereEnabled = controlsRef.current?.enabled ?? true;
  if (controlsRef.current) controlsRef.current.enabled = false;

  // Store original renderer size
  const originalWidth = rendererRef.current.domElement.width;
  const originalHeight = rendererRef.current.domElement.height;
  const originalAspect = cameraRef.current.aspect;

  try {
    // Resize renderer for export resolution
    rendererRef.current.setSize(width, height);
    cameraRef.current.aspect = width / height;
    cameraRef.current.updateProjectionMatrix();

    // Start server export session
    const startRes = await fetch('http://localhost:5000/start-export', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ fps, filename: `camera_path_${Date.now()}.mp4` })
    });
    
    if (!startRes.ok) throw new Error('Failed to start export server session');

    // Calculate total frames
    const totalFrames = Math.ceil((duration / 1000) * fps);
    
    // Stop main animation loop during export
    if (requestRef.current) cancelAnimationFrame(requestRef.current);

    console.log(`Exporting ${totalFrames} frames along camera path...`);

    // Render each frame along the path
    for (let i = 0; i < totalFrames; i++) {
      // Calculate normalized time (0 to 1) with smoothstep easing
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
    
    // Finalize video
    console.log('Finalizing video...');
    await fetch('http://localhost:5000/finalize-video', { method: 'POST' });
    
    alert('Export Complete! Video saved to project folder.');

  } catch (err) {
    console.error('Export failed:', err);
    alert('Export failed: ' + err.message);
  } finally {
    // Restore original renderer size
    rendererRef.current.setSize(originalWidth, originalHeight);
    cameraRef.current.aspect = originalAspect;
    cameraRef.current.updateProjectionMatrix();
    
    // Restore controls
    if (controlsRef.current) controlsRef.current.enabled = controlsWereEnabled;
    
    setIsExporting(false);
    
    // Restart animation loop
    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);
      if (controlsRef.current?.enabled) controlsRef.current.update();
      if (viewerRef.current) {
        viewerRef.current.update();
        viewerRef.current.render();
      }
    };
    animate();
  }
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
