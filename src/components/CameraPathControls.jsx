import React from 'react';
import Timeline from './Timeline';
import KeyframeList from './KeyframeList';

/**
 * Camera path recording controls panel
 * Three-section layout: Timeline (top), Keyframes (middle), Actions (bottom)
 */
export function CameraPathControls({
  keyframes = [],
  keyframeCount,
  isPlaying,
  onAddKeyframe,
  onDeleteKeyframe,
  onReorderKeyframes,
  onClearKeyframes,
  onPlayPath,
  onStopPlayback,
  onSeek,
  disabled = false
}) {
  const canPlay = keyframeCount >= 2 && !isPlaying;
  const showStop = isPlaying;

  return (
    <div 
      className="absolute bottom-6 right-6 z-10 p-4 bg-slate-900/90 border border-slate-700/50 rounded-lg shadow-xl min-w-[240px] max-w-[280px]"
      // Prevent file drop zone from triggering when dragging in this panel
      onDragOver={(e) => { e.stopPropagation(); e.preventDefault(); }}
      onDragEnter={(e) => { e.stopPropagation(); e.preventDefault(); }}
      onDragLeave={(e) => { e.stopPropagation(); }}
      onDrop={(e) => { e.stopPropagation(); e.preventDefault(); }}
    >
      <h2 className="text-xs uppercase tracking-wider text-slate-300 mb-3 border-b border-slate-700 pb-1">
        Camera Path
      </h2>

      {/* Section 1: Timeline (top) */}
      <Timeline
        duration={5000}
        keyframeCount={keyframeCount}
        isPlaying={isPlaying}
        onSeek={onSeek}
      />

      {/* Section 2: Keyframe List (middle) */}
      <KeyframeList
        keyframes={keyframes}
        onDelete={onDeleteKeyframe}
        onReorder={onReorderKeyframes}
        isPlaying={isPlaying}
      />

      {/* Section 3: Actions (bottom) */}
      <div className="space-y-2">
        {/* Add Keyframe Button */}
        <button
          onClick={onAddKeyframe}
          disabled={disabled || isPlaying}
          className="w-full px-4 py-2 text-sm font-medium bg-emerald-600 hover:bg-emerald-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all hover:shadow-[0_0_15px_rgba(16,185,129,0.4)] active:scale-95"
        >
          + Add Keyframe
        </button>

        {/* Play / Stop Button */}
        {showStop ? (
          <button
            onClick={onStopPlayback}
            className="w-full px-4 py-2 text-sm font-medium bg-red-600 hover:bg-red-500 text-white rounded-lg transition-all hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] active:scale-95"
          >
            ⏹ Stop
          </button>
        ) : (
          <button
            onClick={() => onPlayPath(5000)}
            disabled={!canPlay || disabled}
            className="w-full px-4 py-2 text-sm font-medium bg-violet-600 hover:bg-violet-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all hover:shadow-[0_0_15px_rgba(139,92,246,0.4)] active:scale-95"
          >
            ▶ Preview Play
          </button>
        )}

        {/* Clear Button */}
        <button
          onClick={onClearKeyframes}
          disabled={keyframeCount === 0 || isPlaying || disabled}
          className="w-full px-4 py-2 text-sm font-medium bg-slate-700 hover:bg-slate-600 disabled:opacity-50 disabled:cursor-not-allowed text-slate-300 rounded-lg transition-all active:scale-95"
        >
          Clear All
        </button>
      </div>

      {/* Playback indicator */}
      {isPlaying && (
        <div className="mt-3 flex items-center gap-2 text-xs text-violet-300">
          <div className="w-2 h-2 bg-violet-400 rounded-full animate-pulse"></div>
          Playing...
        </div>
      )}

      {/* Help text */}
      {keyframeCount < 2 && !isPlaying && (
        <div className="mt-3 text-xs text-slate-400 text-center">
          Add at least 2 keyframes to preview
        </div>
      )}
    </div>
  );
}
