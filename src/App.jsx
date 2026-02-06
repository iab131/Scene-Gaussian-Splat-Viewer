import React, { useRef, useState, useCallback } from 'react';

// Hooks
import { useThreeSetup } from './hooks/useThreeSetup';
import { useWalkControls } from './hooks/useWalkControls';
import { useFileLoader } from './hooks/useFileLoader';

// Components
import { StatsPanel } from './components/StatsPanel';
import { LoadingOverlay } from './components/LoadingOverlay';
import { EmptyState } from './components/EmptyState';
import { WalkModeOverlay } from './components/WalkModeOverlay';
import { DragOverlay } from './components/DragOverlay';
import { ControlsBar } from './components/ControlsBar';

// Utils
import { performAutoFrame, resetCameraView } from './utils/cameraUtils';
import { startExport } from './utils/exportUtils';


export default function App() {
  const containerRef = useRef(null);
  const fileInputRef = useRef(null);

  // Stats state
  const [fps, setFps] = useState(0);
  const [splatCount, setSplatCount] = useState(0);

  // Export state
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);

  // Three.js setup
  const {
    requestRef,
    viewerRef,
    controlsRef,
    cameraRef,
    rendererRef,
    sceneRef,
    keysPressed
  } = useThreeSetup(containerRef, { setFps, setSplatCount });

  // File loading
  const {
    loading,
    progress,
    hasScene,
    isDragging,
    handleFileChange,
    onDragOver,
    onDragLeave,
    onDrop
  } = useFileLoader({
    viewerRef,
    sceneRef,
    onLoadComplete: () => resetCameraView(cameraRef.current, controlsRef.current)
  });

  // Walk controls
  const {
    cameraMode,
    isPointerLocked,
    toggleCameraMode
  } = useWalkControls({
    cameraRef,
    controlsRef,
    rendererRef,
    keysPressed
  });

  // Camera actions
  const handleResetView = useCallback(() => {
    resetCameraView(cameraRef.current, controlsRef.current);
  }, [cameraRef, controlsRef]);

  const handleFrameScene = useCallback(() => {
    if (viewerRef.current?.getSplatMesh()) {
      performAutoFrame(
        viewerRef.current.getSplatMesh(),
        cameraRef.current,
        controlsRef.current
      );
    }
  }, [viewerRef, cameraRef, controlsRef]);

  // Export action
  const handleExport = useCallback(async () => {
    if (isExporting || !hasScene) return;
    
    await startExport({
      cameraRef,
      controlsRef,
      rendererRef,
      viewerRef,
      requestRef,
      setExportProgress,
      setIsExporting
    });
  }, [isExporting, hasScene, cameraRef, controlsRef, rendererRef, viewerRef, requestRef]);

  // File selection
  const handleSelectFile = useCallback(() => {
    fileInputRef.current?.click();
  }, []);

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

      {/* Overlays */}
      <DragOverlay isDragging={isDragging} />
      
      {!hasScene && !loading && !isDragging && (
        <EmptyState onSelectFile={handleSelectFile} />
      )}

      <LoadingOverlay
        isLoading={loading}
        isExporting={isExporting}
        progress={progress}
        exportProgress={exportProgress}
      />

      {/* UI Panels */}
      <StatsPanel fps={fps} splatCount={splatCount} />
      
      <WalkModeOverlay isVisible={isPointerLocked} />

      <ControlsBar
        hasScene={hasScene}
        cameraMode={cameraMode}
        onResetView={handleResetView}
        onFrameScene={handleFrameScene}
        onToggleCameraMode={toggleCameraMode}
        onLoadFile={handleSelectFile}
        onExport={handleExport}
      />
    </div>
  );
}
