import React from 'react';

/**
 * Empty state overlay with file selection prompt
 */
export function EmptyState({ onSelectFile }) {
  return (
    <div className="absolute inset-0 z-40 flex items-center justify-center bg-[#001524]/80">
      <div className="text-center p-8 border border-white/10 rounded-2xl bg-white/5 shadow-2xl max-w-md">
        <h1 className="text-3xl font-bold mb-2 text-cyan-400">Gaussian Viewer</h1>
        <p className="text-slate-400 mb-8">
          Drag & Drop a <strong>.ply</strong> file here<br />or click below to browse.
        </p>
        <button
          onClick={onSelectFile}
          className="px-8 py-3 text-lg font-bold bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white rounded-full transition-all shadow-[0_0_30px_rgba(6,182,212,0.4)] hover:shadow-[0_0_50px_rgba(6,182,212,0.6)] active:scale-95"
        >
          Select .PLY File
        </button>
      </div>
    </div>
  );
}
