import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js';
import { Viewer } from '@mkkellogg/gaussian-splats-3d';

/**
 * Hook to set up Three.js scene, camera, renderer, orbit controls, and Gaussian viewer
 * @param {React.RefObject} containerRef - Reference to the container element
 * @param {Object} callbacks - Callback functions for stats updates
 * @param {Function} callbacks.setFps - FPS state setter
 * @param {Function} callbacks.setSplatCount - Splat count state setter
 * @returns {Object} References to scene components
 */
export function useThreeSetup(containerRef, { setFps, setSplatCount }) {
  const requestRef = useRef(null);
  const viewerRef = useRef(null);
  const controlsRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const sceneRef = useRef(null);
  const walkSpeedRef = useRef(3.0);
  const keysPressed = useRef({
    forward: false,
    backward: false,
    left: false,
    right: false,
    up: false,
    down: false
  });

  useEffect(() => {
    if (!containerRef.current) return;

    // Cleanup previous instances for Vite HMR
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

    // 4. OrbitControls Setup
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controlsRef.current = controls;

    // 5. Gaussian Splat Viewer Setup
    const viewer = new Viewer({
      selfDrivenMode: false,
      useBuiltInControls: false,
      renderer: renderer,
      camera: camera,
      threeScene: scene,
      showControlPlane: false,
      gpuAcceleratedSort: false
    });
    viewerRef.current = viewer;
    window.viewer = viewer;

    // 6. Animation Loop
    let lastTime = performance.now();
    let frames = 0;
    let walkLastTime = performance.now();

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

      // Walk mode movement processing
      const deltaTime = (now - walkLastTime) / 1000;
      walkLastTime = now;

      if (document.pointerLockElement === renderer.domElement && cameraRef.current) {
        const cam = cameraRef.current;
        const speed = walkSpeedRef.current * deltaTime;
        const keys = keysPressed.current;

        const forward = new THREE.Vector3();
        cam.getWorldDirection(forward);
        forward.y = 0;
        forward.normalize();

        const right = new THREE.Vector3();
        right.crossVectors(forward, new THREE.Vector3(0, 1, 0)).normalize();

        const moveVector = new THREE.Vector3();
        if (keys.forward) moveVector.add(forward.clone().multiplyScalar(speed));
        if (keys.backward) moveVector.add(forward.clone().multiplyScalar(-speed));
        if (keys.right) moveVector.add(right.clone().multiplyScalar(speed));
        if (keys.left) moveVector.add(right.clone().multiplyScalar(-speed));
        if (keys.up) moveVector.y += speed;
        if (keys.down) moveVector.y -= speed;

        cam.position.add(moveVector);
      }

      // Only update OrbitControls when not in walk mode
      if (controlsRef.current && document.pointerLockElement !== renderer.domElement) {
        controlsRef.current.update();
      }

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
  }, [containerRef, setFps, setSplatCount]);

  return {
    requestRef,
    viewerRef,
    controlsRef,
    cameraRef,
    rendererRef,
    sceneRef,
    walkSpeedRef,
    keysPressed
  };
}
