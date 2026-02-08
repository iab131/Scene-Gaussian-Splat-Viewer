import React, { useRef, useState, useCallback } from 'react';

// Hooks
import { useThreeSetup } from './hooks/useThreeSetup';
import { useWalkControls } from './hooks/useWalkControls';
import { useFileLoader } from './hooks/useFileLoader';
import { useCameraPath } from './hooks/useCameraPath';
import { useFrustumGizmos } from './hooks/useFrustumGizmos';

// Components
import { StatsPanel } from './components/StatsPanel';
import { LoadingOverlay } from './components/LoadingOverlay';
import { EmptyState } from './components/EmptyState';
import { WalkModeOverlay } from './components/WalkModeOverlay';
import { DragOverlay } from './components/DragOverlay';
import { ControlsBar } from './components/ControlsBar';
import { CameraPathControls } from './components/CameraPathControls';
import { ExportDialog } from './components/ExportDialog';

// Utils
import { performAutoFrame, resetCameraView } from './utils/cameraUtils';
import { startPathExport } from './utils/exportUtils';


export default function App() {
  const containerRef = useRef(null);
  const fileInputRef = useRef(null);
  const clearKeyframesRef = useRef(() => {});
  const cancelExportRef = useRef(false); // Signal to cancel export

  // Stats state
  const [fps, setFps] = useState(0);
  const [splatCount, setSplatCount] = useState(0);

  // Export state
  const [isExporting, setIsExporting] = useState(false);
  const [exportProgress, setExportProgress] = useState(0);
  const [showExportDialog, setShowExportDialog] = useState(false);

  // Active keyframe for frustum gizmo highlighting (during scrubbing)
  const [activeKeyframeIndex, setActiveKeyframeIndex] = useState(-1);

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
    onLoadStart: () => clearKeyframesRef.current(),
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

  // Camera path recording
  const {
    keyframes,
    keyframeCount,
    isPlaying,
    addKeyframe,
    removeKeyframe,
    reorderKeyframes,
    clearKeyframes,
    playPath,
    stopPlayback,
    seekTo
  } = useCameraPath({
    cameraRef,
    controlsRef,
    rendererRef
  });

  // Keep clearKeyframesRef in sync
  clearKeyframesRef.current = clearKeyframes;

  // Frustum gizmos for visualizing keyframe camera poses
  // Hide during playback only, stay visible during scrubbing
  const { getClosestKeyframeIndex } = useFrustumGizmos({
    sceneRef,
    keyframes,
    activeKeyframeIndex: -1,
    enabled: hasScene && keyframeCount > 0 && !isExporting && !isPlaying
  });

  // Wrapped seek handler that also updates the active keyframe highlight
  const handleSeek = useCallback((t) => {
    seekTo(t);
    // Highlight the closest keyframe during scrubbing
    const closestIndex = getClosestKeyframeIndex(t);
    setActiveKeyframeIndex(closestIndex);
  }, [seekTo, getClosestKeyframeIndex]);

  // Reset active keyframe when playback starts or stops
  const handlePlayPath = useCallback((duration) => {
    setActiveKeyframeIndex(-1);
    playPath(duration);
  }, [playPath]);

  const handleStopPlayback = useCallback(() => {
    setActiveKeyframeIndex(-1);
    stopPlayback();
  }, [stopPlayback]);

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

  // Open export dialog
  const handleOpenExportDialog = useCallback(() => {
    if (isExporting || !hasScene) return;
    if (keyframes.length < 2) {
      alert('Add at least 2 keyframes to export a camera path video');
      return;
    }
    setShowExportDialog(true);
  }, [isExporting, hasScene, keyframes.length]);

  // Export action - called from dialog with duration in seconds
  const handleExport = useCallback(async (durationSeconds) => {
    setShowExportDialog(false);
    cancelExportRef.current = false; // Reset cancel signal
    
    const result = await startPathExport({
      cameraRef,
      controlsRef,
      rendererRef,
      viewerRef,
      sceneRef,
      requestRef,
      keyframes,
      setExportProgress,
      setIsExporting,
      cancelRef: cancelExportRef,
      duration: durationSeconds * 1000,  // Convert to milliseconds
      fps: 30,
      width: 1280,
      height: 720
    });
    
    // Handle cancellation feedback
    if (result?.cancelled) {
      console.log('Export was cancelled by user');
    }
  }, [keyframes, cameraRef, controlsRef, rendererRef, viewerRef, sceneRef, requestRef]);

  // Cancel export handler
  const handleCancelExport = useCallback(() => {
    if (isExporting) {
      console.log('User requested export cancellation');
      cancelExportRef.current = true;
    }
  }, [isExporting]);

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
        onCancelExport={handleCancelExport}
      />

      {/* UI Panels */}
      <StatsPanel fps={fps} splatCount={splatCount} />
      
      {/* Camera Path Controls - show when scene is loaded */}
      {hasScene && (
        <CameraPathControls
          keyframes={keyframes}
          keyframeCount={keyframeCount}
          isPlaying={isPlaying}
          onAddKeyframe={addKeyframe}
          onDeleteKeyframe={removeKeyframe}
          onReorderKeyframes={reorderKeyframes}
          onClearKeyframes={clearKeyframes}
          onPlayPath={handlePlayPath}
          onStopPlayback={handleStopPlayback}
          onSeek={handleSeek}
          disabled={isExporting}
        />
      )}
      
      <WalkModeOverlay isVisible={isPointerLocked} />

      <ControlsBar
        hasScene={hasScene}
        cameraMode={cameraMode}
        onResetView={handleResetView}
        onFrameScene={handleFrameScene}
        onToggleCameraMode={toggleCameraMode}
        onLoadFile={handleSelectFile}
        onExport={handleOpenExportDialog}
      />

      {/* Export Dialog */}
      <ExportDialog
        isOpen={showExportDialog}
        onClose={() => setShowExportDialog(false)}
        onExport={handleExport}
        keyframeCount={keyframeCount}
        defaultDuration={5}
      />
    </div>
  );
}

