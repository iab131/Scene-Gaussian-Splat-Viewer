/**
 * Start MP4 export - captures a 360 orbit around the scene
 * @param {Object} params - Export parameters
 * @param {React.RefObject} params.cameraRef - Camera reference
 * @param {React.RefObject} params.controlsRef - Controls reference
 * @param {React.RefObject} params.rendererRef - Renderer reference
 * @param {React.RefObject} params.viewerRef - Viewer reference
 * @param {React.RefObject} params.requestRef - Animation frame request reference
 * @param {Function} params.setExportProgress - Progress state setter
 * @param {Function} params.setIsExporting - Exporting state setter
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
