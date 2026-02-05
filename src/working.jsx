import React, { useRef, useState, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Viewer, SceneFormat } from '@mkkellogg/gaussian-splats-3d';

export default function App() {
  // 1. All Refs initialized
  const containerRef = useRef(null);
  const viewerRef = useRef(null);
  const controlsRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const fileInputRef = useRef(null);
  const requestRef = useRef(null);

  // 2. State
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

    // 1. Scene
    const scene = new THREE.Scene();
    scene.background = new THREE.Color('#001524');
    sceneRef.current = scene;

    // 2. Camera
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.01, 1000);
    camera.position.set(0, 5, 15);
    cameraRef.current = camera;

    // 3. Renderer
    const renderer = new THREE.WebGLRenderer({ antialias: true, preserveDrawingBuffer: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(window.devicePixelRatio);
    containerRef.current.appendChild(renderer.domElement);
    rendererRef.current = renderer;

    // 4. Diagnostic Cube (MUST appear if renderer works)
    const cube = new THREE.Mesh(
      new THREE.BoxGeometry(1, 1, 1),
      new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true })
    );
    scene.add(cube);

    // 5. Controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    // 6. Splat Viewer Setup
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

    // 7. Manual Loop
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
      }

      if (controlsRef.current) controlsRef.current.update();
      if (viewerRef.current) {
        viewerRef.current.update();
        viewerRef.current.render();
      }
    };
    animate();

    const handleResize = () => {
      const width = window.innerWidth;
      const height = window.innerHeight;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      viewer.updateView(); 
    };
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (requestRef.current) cancelAnimationFrame(requestRef.current);
      renderer.dispose();
    };
  }, []);

  const performAutoFrame = (object) => {
    if (!object || !cameraRef.current || !controlsRef.current) return;
    const box = new THREE.Box3().setFromObject(object);
    if (box.isEmpty()) return;

    const center = new THREE.Vector3();
    box.getCenter(center);
    const size = new THREE.Vector3();
    box.getSize(size);

    const maxDim = Math.max(size.x, size.y, size.z);
    const fov = cameraRef.current.fov * (Math.PI / 180);
    let cameraZ = Math.abs(maxDim / 2 / Math.tan(fov / 2)) * 1.5;

    cameraRef.current.position.set(center.x, center.y + (maxDim * 0.1), center.z + cameraZ);
    cameraRef.current.lookAt(center);
    controlsRef.current.target.copy(center);
    controlsRef.current.update();
  };

  const loadFile = async (file) => {
    const url = URL.createObjectURL(file);
    setLoading(true);
    try {
      // Clear old scenes
      const count = viewerRef.current.getSceneCount();
      for (let i = count - 1; i >= 0; i--) await viewerRef.current.removeSplatScene(i);

      let format = file.name.toLowerCase().endsWith('.ply') ? SceneFormat.Ply : SceneFormat.KSplat;

      await viewerRef.current.addSplatScene(url, {
        format: format,
        showLoadingUI: false,
        progressiveLoad: false
      });

      const splatMesh = viewerRef.current.getSplatMesh();
      if (splatMesh && sceneRef.current) {
        sceneRef.current.add(splatMesh);
      }

      setHasScene(true);
      setTimeout(() => {
        const mesh = viewerRef.current.getSplatMesh();
        if (mesh) performAutoFrame(mesh);
      }, 200);

    } catch (err) {
      console.error("Loader Error:", err);
    } finally {
      setLoading(false);
    }
  };

  // ... (Keep your handleFileChange, onDragOver, onDrop and UI JSX exactly as they were)
  return (
    <div className="relative w-screen h-screen bg-[#001524] overflow-hidden" 
         onDragOver={(e) => { e.preventDefault(); setIsDragging(true); }}
         onDragLeave={() => setIsDragging(false)}
         onDrop={(e) => {
            e.preventDefault();
            setIsDragging(false);
            const file = e.dataTransfer.files[0];
            if (file) loadFile(file);
         }}>
      <div ref={containerRef} className="absolute inset-0 z-0" />
      <input type="file" ref={fileInputRef} className="hidden" onChange={(e) => loadFile(e.target.files[0])} />

      {/* Simplified Load UI for debugging */}
      {!hasScene && !loading && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/50">
           <button onClick={() => fileInputRef.current.click()} className="p-4 bg-cyan-600 rounded-xl text-white font-bold">
              SELECT .PLY FILE
           </button>
        </div>
      )}

      {/* Stats UI */}
      <div className="absolute top-4 left-4 p-4 bg-black/80 text-white rounded pointer-events-none">
        <div>FPS: {fps}</div>
        <div>Splats: {splatCount.toLocaleString()}</div>
      </div>
    </div>
  );
}