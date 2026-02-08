import React from 'react';

/**
 * Bottom control bar with all action buttons
 */
export function ControlsBar({
  hasScene,
  cameraMode,
  onResetView,
  onFrameScene,
  onToggleCameraMode,
  onLoadFile,
  onExport
}) {
  return (
    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex gap-4 p-2 bg-slate-900/80 rounded-full border border-slate-700/50 shadow-2xl pointer-events-auto">
      <button
        onClick={onResetView}
        disabled={!hasScene}
        className="px-6 py-2 text-sm font-medium bg-slate-800 hover:bg-slate-700 disabled:opacity-50 disabled:cursor-not-allowed text-slate-200 rounded-full transition-all hover:shadow-lg border border-slate-600 hover:border-cyan-500/50 active:scale-95"
      >
        Reset View
      </button>
      
      <button
        onClick={onFrameScene}
        disabled={!hasScene}
        className="px-6 py-2 text-sm font-medium bg-cyan-600 hover:bg-cyan-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.5)] active:scale-95"
      >
        Frame Scene
      </button>
      
      {/* Camera Mode Toggle */}
      <button
        onClick={onToggleCameraMode}
        disabled={!hasScene}
        className={`px-6 py-2 text-sm font-medium rounded-full transition-all active:scale-95 flex items-center gap-2 ${
          cameraMode === 'walk'
            ? 'bg-orange-600 hover:bg-orange-500 text-white hover:shadow-[0_0_20px_rgba(249,115,22,0.5)]'
            : 'bg-violet-600 hover:bg-violet-500 text-white hover:shadow-[0_0_20px_rgba(139,92,246,0.5)]'
        } disabled:opacity-50 disabled:cursor-not-allowed`}
      >
        <span>{cameraMode === 'orbit' ? 'Walk Mode' : 'Orbit Mode'}</span>
      </button>
      
      <div className="w-px h-8 bg-slate-700 mx-2 self-center"></div>
      
      <button
        onClick={onLoadFile}
        className="px-6 py-2 text-sm font-medium bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition-all hover:shadow-[0_0_20px_rgba(16,185,129,0.5)] active:scale-95"
      >
        Load .PLY
      </button>
      
      <button
        onClick={onExport}
        disabled={!hasScene}
        className="px-6 py-2 text-sm font-medium bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-full transition-all hover:shadow-[0_0_20px_rgba(192,38,211,0.5)] active:scale-95 flex items-center gap-2"
      >
        <span>Export MP4</span>
      </button>
    </div>
  );
}
