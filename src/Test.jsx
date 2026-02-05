import { useEffect, useRef } from 'react';
import * as THREE from 'three';
import { Viewer } from '@mkkellogg/gaussian-splats-3d';

export default function Test() {
  const containerRef = useRef(null);

  useEffect(() => {
  if (!containerRef.current) return;

  const scene = new THREE.Scene();
  const camera = new THREE.PerspectiveCamera(60, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 2, 5);

  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  containerRef.current.appendChild(renderer.domElement);

  const viewer = new Viewer({
    renderer,
    camera,
    threeScene: scene,
    useBuiltInControls: true,
  });

  let alive = true;

  viewer.addSplatScene('/world01.ply').then(() => {
    if (!alive) return;
    viewer.start();
  });

  const onResize = () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  };
  window.addEventListener('resize', onResize);

  return () => {
    alive = false;
    window.removeEventListener('resize', onResize);
    viewer.dispose();
    renderer.dispose();
    if (containerRef.current) containerRef.current.innerHTML = '';
  };
}, []);


  return (
    <div
      ref={containerRef}
      style={{ width: '100vw', height: '100vh', overflow: 'hidden' }}
    />
  );
}
