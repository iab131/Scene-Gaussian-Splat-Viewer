import { useState, useCallback } from 'react';
import { SceneFormat } from '@mkkellogg/gaussian-splats-3d';

/**
 * Hook to manage file loading and drag-drop functionality
 * @param {Object} params - Parameters
 * @param {React.RefObject} params.viewerRef - Gaussian viewer reference
 * @param {React.RefObject} params.sceneRef - Three.js scene reference
 * @param {Function} params.onLoadStart - Callback when load starts (e.g., clear keyframes)
 * @param {Function} params.onLoadComplete - Callback when load completes
 * @returns {Object} Loading state and handlers
 */
export function useFileLoader({ viewerRef, sceneRef, onLoadStart, onLoadComplete }) {
  const [loading, setLoading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [hasScene, setHasScene] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  const loadFile = useCallback(async (file) => {
    const url = URL.createObjectURL(file);
    setLoading(true);
    
    // Call onLoadStart callback (e.g., to clear keyframes)
    if (onLoadStart) onLoadStart();
    
    try {
      // Clear scene first
      const count = viewerRef.current.getSceneCount();
      for (let i = count - 1; i >= 0; i--) {
        await viewerRef.current.removeSplatScene(i);
      }

      const format = file.name.toLowerCase().endsWith('.ply') 
        ? SceneFormat.Ply 
        : SceneFormat.KSplat;

      await viewerRef.current.addSplatScene(url, {
        format: format,
        showLoadingUI: false,
        progressiveLoad: false,
        onProgress: (percent) => setProgress(percent)
      });

      const splatMesh = viewerRef.current.getSplatMesh();
      if (splatMesh && sceneRef.current) {
        sceneRef.current.add(splatMesh);
      }

      setHasScene(true);
      
      // Give scene time to settle then callback
      setTimeout(() => {
        if (onLoadComplete) onLoadComplete();
      }, 200);

    } catch (err) {
      console.error("Loader Error:", err);
    } finally {
      setLoading(false);
    }
  }, [viewerRef, sceneRef, onLoadStart, onLoadComplete]);

  const loadFromUrl = useCallback(async (url) => {
    setLoading(true);
    if (onLoadStart) onLoadStart();

    try {
      // Clear scene first
      const count = viewerRef.current.getSceneCount();
      for (let i = count - 1; i >= 0; i--) {
        await viewerRef.current.removeSplatScene(i);
      }

      const filename = url.split('/').pop().toLowerCase();
      const format = filename.endsWith('.ply') ? SceneFormat.Ply : SceneFormat.KSplat;

      await viewerRef.current.addSplatScene(url, {
        format: format,
        showLoadingUI: false,
        progressiveLoad: false,
        onProgress: (percent) => setProgress(percent)
      });

      const splatMesh = viewerRef.current.getSplatMesh();
      if (splatMesh && sceneRef.current) {
        sceneRef.current.add(splatMesh);
      }

      setHasScene(true);

      setTimeout(() => {
        if (onLoadComplete) onLoadComplete();
      }, 200);

    } catch (err) {
      console.error("Loader Error (URL):", err);
    } finally {
      setLoading(false);
    }
  }, [viewerRef, sceneRef, onLoadStart, onLoadComplete]);

  const handleFileChange = useCallback((event) => {
    const file = event.target.files[0];
    if (file) loadFile(file);
  }, [loadFile]);

  const onDragOver = useCallback((e) => {
    e.preventDefault();
    setIsDragging(true);
  }, []);

  const onDragLeave = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
  }, []);

  const onDrop = useCallback((e) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files[0];
    if (file && file.name.toLowerCase().endsWith('.ply')) {
      loadFile(file);
    } else {
      alert("Please drop a valid .ply file.");
    }
  }, [loadFile]);

  return {
    loading,
    progress,
    hasScene,
    isDragging,
    loadFile,
    loadFromUrl,
    handleFileChange,
    onDragOver,
    onDragLeave,
    onDrop
  };
}
