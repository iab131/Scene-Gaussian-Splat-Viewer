import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Viewer, SceneFormat } from '@mkkellogg/gaussian-splats-3d';


export default function app() {
  const containerRef = useRef(null);
  const requestRef = useRef(null);
  const viewerRef = useRef(null);
  const controlsRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const fileInputRef = useRef(null);
  const sceneRef = useRef(null);

  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [splatCount, setSplatCount] = useState(0);
  const [fps, setFps] = useState(0);
  const [hasScene, setHasScene] = useState(false);
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [isDragging, setIsDragging] = useState(false);


  useEffect(() => {
    if (!containerRef.current) return;

    // --- Cleanup previous instances for Vite HMR ---
    if (rendererRef.current) {
        rendererRef.current.dispose();
        containerRef.current.innerHTML = '';
    }


    // 1. Scene Setup
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#001524');
    sceneRef.current = scene;


    // 2. Camera Setup
    const camera = new THREE.PerspectiveCamera(
      65,
      window.innerWidth / window.innerHeight,
      0.01,
      10000
    );
    camera.position.set(0, 1, 1);  
    cameraRef.current = camera;


    // 3. Renderer Setup
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;


    // 4. OrbitControls Controls Setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    // controls.dampingFactor = 0.05;
    // controls.screenSpacePanning = false;
    // controls.minDistance = 0.1;
    // controls.maxDistance = 500;
    controlsRef.current = controls;


    // 5. Viewer Setup
    const viewer = new Viewer({
      selfDrivenMode: false, 
      useBuiltInControls: false,
      renderer: renderer,
      camera: camera,
      threeScene: scene,
      showControlPlane: false,
      gpuAcceleratedSort: false // Set to false to ensure compatibility
    });
    viewerRef.current = viewer;
    
    window.viewer = viewer; 


    // 6. Loop
    let lastTime = performance.now();
    let frames = 0;


    const animate = () => {
      requestRef.current = requestAnimationFrame(animate);


      const now = performance.now();
      frames++;
      if (now - lastTime >= 1000) {
        setFps(frames);
        frames = 0;
        lastTime = now;
        if (viewerRef.current && viewerRef.current.getSplatMesh()) {
            setSplatCount(viewerRef.current.getSplatMesh().getSplatCount());
        }
      }


      if (controlsRef.current) controlsRef.current.update();
      if (viewerRef.current) {
          viewerRef.current.update();
          viewerRef.current.render();
      }
    };
    animate();


    // Resize Handler
    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      cameraRef.current.aspect = width / height;
      cameraRef.current.updateProjectionMatrix();
      rendererRef.current.setSize(width, height);
      viewerRef.current.updateView(); 
    };
    window.addEventListener('resize', handleResize);


    return () => {
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      renderer.dispose();
    };
  }, []);


  // Frame Logic
const performAutoFrame = (splat) => {
  const camera = cameraRef.current;
  const controls = controlsRef.current;
  if (!splat || !camera || !controls) return;

  // Get scene bounds
  const center = splat.center?.clone() ?? new THREE.Vector3();
  const radius = splat.radius ?? 5;

  // Calculate required distance to fit scene in view
  const fov = THREE.MathUtils.degToRad(camera.fov);
  const distance = (radius / Math.tan(fov / 2)) * 1.8;

  // Get current camera direction (preserve rotation)
  const currentDirection = new THREE.Vector3();
  camera.getWorldDirection(currentDirection);
  
  // Position camera at the calculated distance from center, along current view direction
  // Camera looks in -Z direction, so we need to move opposite to the direction
  camera.position.copy(center).sub(currentDirection.multiplyScalar(distance));

  // Update near/far planes based on scene size
  camera.near = Math.max(0.01, distance / 100);
  camera.far = distance * 100;
  camera.updateProjectionMatrix();

  // Update controls target to center (camera rotation stays the same)
  controls.target.copy(center);
  controls.update();
};

const loadFile = async (file) => {
    const url = URL.createObjectURL(file);
    setLoading(true);
    try {
        // 1. Clear scene first
        const count = viewerRef.current.getSceneCount();
        for(let i = count-1; i >=0; i--) await viewerRef.current.removeSplatScene(i);

        let format = file.name.toLowerCase().endsWith('.ply') ? SceneFormat.Ply : SceneFormat.KSplat;

        await viewerRef.current.addSplatScene(url, {
            format: format,
            showLoadingUI: false,
            progressiveLoad: false,
            onProgress: (percent, percentLabel, chunk, fileSize) => {
                setProgress(percent);
            }
        });

        const splatMesh = viewerRef.current.getSplatMesh();
        if (splatMesh && sceneRef.current) {
            sceneRef.current.add(splatMesh);
        }

        setHasScene(true);
        setTimeout(() => {
            resetView();
        }, 200);

    } catch (err) {
        console.error("Loader Error:", err);
    } finally {
        setLoading(false);
    }
};


  const handleFileChange = (event) => {
      const file = event.target.files[0];
      if (file) loadFile(file);
  };


  // Drag & Drop Handlers
  const onDragOver = (e) => {
      e.preventDefault();
      setIsDragging(true);
  };


  const onDragLeave = (e) => {
      e.preventDefault();
      setIsDragging(false);
  };


  const onDrop = (e) => {
      e.preventDefault();
      setIsDragging(false);
      const file = e.dataTransfer.files[0];
      if (file && file.name.toLowerCase().endsWith('.ply')) {
          loadFile(file);
      } else {
          alert("Please drop a valid .ply file.");
      }
  };


  const resetView = () => {
    if (!cameraRef.current || !controlsRef.current) return;
    
    // Reset camera to default position
    cameraRef.current.position.set(0, 1, 1);
    cameraRef.current.lookAt(0, 0, 0);
    cameraRef.current.updateProjectionMatrix();
    
    // Reset controls target to origin
    controlsRef.current.target.set(0, 1, 0);
    controlsRef.current.update();
  };

const frameScene = () => {
    performAutoFrame(viewerRef.current.getSplatMesh());
};


  const startExport = async () => {
     if (isExporting || !rendererRef.current || !viewerRef.current || !hasScene) return;
     
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
         const radius = Math.sqrt(originalPosition.x**2 + originalPosition.z**2);
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
             await new Promise(r => setTimeout(r, 10)); // 10ms
         }
         
         await fetch('http://localhost:5000/finalize-video', { method: 'POST' });
         alert("Export Complete!");
         
         cameraRef.current.position.copy(originalPosition);
         controlsRef.current.update();


     } catch (err) {
         console.error("Export failed:", err);
         alert("Export failed: " + err.message);
         // Restore loop
         window.location.reload();
     } finally {
         setIsExporting(false);
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
  };


  return (
    <div
        className="relative w-screen h-screen bg-[#001524] overflow-hidden font-mono text-white"
        onDragOver={onDragOver}
        onDragLeave={onDragLeave}
        onDrop={onDrop}
    >
      {/* 3D Container */}
      <div ref={containerRef} className="absolute inset-0 z-0" />


      {/* Hidden File Input */}
      <input
        type="file"
        ref={fileInputRef}
        onChange={handleFileChange}
        accept=".ply"
        className="hidden"
      />


      {/* Drag & Drop Visual Overlay */}
      {isDragging && (
         <div className="absolute inset-0 z-50 flex items-center justify-center bg-cyan-500/20 border-4 border-cyan-400 border-dashed m-4 rounded-xl pointer-events-none">
             <div className="text-4xl font-bold text-cyan-200 drop-shadow-lg">
                 Drop .PLY File Here
             </div>
         </div>
      )}


      {/* Center Load Button (Empty State) */}
      {!hasScene && !loading && !isDragging && (
        <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#001524]/80">
            <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/5 shadow-2xl max-w-md">
                <h1 className="text-3xl font-bold mb-2 text-cyan-400">Gaussian Viewer</h1>
                <p className="text-slate-400 mb-8">
                    Drag & Drop a <strong>.ply</strong> file here<br/>or click below to browse.
                </p>
                <button
                  onClick={() => fileInputRef.current.click()}
                  className="px-8 py-3 text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] active:scale-95"
                >
                  Select .PLY File
                </button>
            </div>
        </div>
      )}


      {/* Loading Overlay */}
      {(loading || isExporting) && (
        <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60">
          <div className="text-2xl font-bold mb-4 text-cyan-400 animate-pulse">
            {isExporting ? "Rendering MP4..." : "Loading Scene..."}
          </div>
          <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
             <div
               className="h-full bg-cyan-500 transition-all duration-200 ease-out"
               style={{ width: `${isExporting ? exportProgress : progress}%` }}
             />
          </div>
          <div className="mt-2 text-sm text-cyan-200">
             {Math.round(isExporting ? exportProgress : progress)}%
          </div>
        </div>
      )}


      {/* Stats Panel */}
      <div className="absolute top-4 left-4 z-10 p-4 bg-slate-900/80 border border-slate-700/50 rounded-lg shadow-xl min-w-[200px]">
        <h2 className="text-xs uppercase tracking-wider text-slate-400 mb-2 border-b border-slate-700 pb-1">Renderer Stats</h2>
        <div className="flex justify-between items-center mb-1">
            <span className="text-sm text-slate-300">FPS</span>
            <span className="text-sm font-bold text-emerald-400">{fps}</span>
        </div>
        <div className="flex justify-between items-center">
            <span className="text-sm text-slate-300">Splats</span>
            <span className="text-sm font-bold text-cyan-400">{splatCount.toLocaleString()}</span>
        </div>
      </div>


      {/* Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-4 p-2 bg-slate-900/80 rounded-full border border-slate-700/50 shadow-2xl pointer-events-auto">
        <button
          onClick={resetView}
          disabled={!hasScene}
          className="px-6 py-2 text-sm font-medium bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-200 rounded-full transition-all hover:shadow-lg border border-slate-600 hover:border-cyan-500/50 active:scale-95"
        >
          Reset View
        </button>
        <button
          onClick={frameScene}
          disabled={!hasScene}
          className="px-6 py-2 text-sm font-medium bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95"
        >
          Frame Scene
        </button>
        <div className="w-px h-8 bg-slate-700 mx-2 self-center"></div>
        <button
          onClick={() => fileInputRef.current.click()}
          className="px-6 py-2 text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] active:scale-95"
        >
          Load .PLY
        </button>
        <button
          onClick={startExport}
          disabled={!hasScene}
          className="px-6 py-2 text-sm font-medium bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] active:scale-95 flex items-center gap-2"
        >
          <span>Export MP4</span>
        </button>
      </div>


         {/* Decoration / Title */}
        {/* <div className="absolute top-4 right-4 z-10 text-right pointer-events-none">
            <h1 className="text-xl font-bold text-white/90">Gaussian Splat Viewer</h1>
            <p className="text-xs text-white/40">v1.2.0 • Drag & Drop Support</p>
        </div> */}
    </div>
  );
}



