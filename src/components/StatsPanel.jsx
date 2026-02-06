import React from 'react';

/**
 * Stats panel showing FPS and splat count
 */
export function StatsPanel({ fps, splatCount }) {
  return (
    <div className="absolute top-4 left-4 z-10 p-4 bg-slate-900/80 border border-slate-700/50 rounded-lg shadow-xl min-w-[200px]">
      <h2 className="text-xs uppercase tracking-wider text-slate-400 mb-2 border-b border-slate-700 pb-1">
        Renderer Stats
      </h2>
      <div className="flex justify-between items-center mb-1">
        <span className="text-sm text-slate-300">FPS</span>
        <span className="text-sm font-bold text-emerald-400">{fps}</span>
      </div>
      <div className="flex justify-between items-center">
        <span className="text-sm text-slate-300">Splats</span>
        <span className="text-sm font-bold text-cyan-400">{splatCount.toLocaleString()}</span>
      </div>
    </div>
  );
}
