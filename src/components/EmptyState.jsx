import React from 'react';

/**
 * Empty state overlay with file selection prompt and sample file buttons
 */
export function EmptyState({ onSelectFile, onLoadSample }) {
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

        {/* Divider */}
        <div className="flex items-center gap-3 my-6">
          <div className="flex-1 h-px bg-white/10" />
          <span className="text-xs text-slate-500 uppercase tracking-wider">or try a sample</span>
          <div className="flex-1 h-px bg-white/10" />
        </div>

        {/* Sample file buttons */}
        {/* <div className="flex gap-3 justify-center">
          <button
            onClick={() => onLoadSample('/world00.ply')}
            className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-violet-600 to-purple-700 hover:from-violet-500 hover:to-purple-600 text-white rounded-lg transition-all shadow-[0_0_20px_rgba(139,92,246,0.3)] hover:shadow-[0_0_30px_rgba(139,92,246,0.5)] active:scale-95"
          >
            🏛️ Statue Hall
          </button>
          <button
            onClick={() => onLoadSample('/world01.ply')}
            className="px-5 py-2.5 text-sm font-semibold bg-gradient-to-r from-emerald-600 to-teal-700 hover:from-emerald-500 hover:to-teal-600 text-white rounded-lg transition-all shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)] active:scale-95"
          >
            🏢 Concrete Atrium
          </button>
        </div> */}
                {/* Sample file buttons */}
        <div className="flex gap-4 justify-center">
          {/* Statue Hall */}
          <button
            onClick={() => onLoadSample('/world00.ply')}
            className="group relative px-6 py-4 rounded-xl bg-gradient-to-br from-violet-600/80 to-purple-700/80
            hover:from-violet-500 hover:to-purple-600
            border border-white/10 backdrop-blur-md
            shadow-[0_8px_30px_rgba(139,92,246,0.25)]
            hover:shadow-[0_12px_40px_rgba(139,92,246,0.45)]
            transition-all duration-300 ease-out
            active:scale-95 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl">🏛️</span>
              <span className="text-sm font-semibold text-white tracking-wide">
                Statue Hall
              </span>
            </div>
          </button>

          {/* Concrete Atrium */}
          <button
            onClick={() => onLoadSample('/world01.ply')}
            className="group relative px-6 py-4 rounded-xl bg-gradient-to-br from-emerald-600/80 to-teal-700/80
            hover:from-emerald-500 hover:to-teal-600
            border border-white/10 backdrop-blur-md
            shadow-[0_8px_30px_rgba(16,185,129,0.25)]
            hover:shadow-[0_12px_40px_rgba(16,185,129,0.45)]
            transition-all duration-300 ease-out
            active:scale-95 hover:-translate-y-1"
          >
            <div className="flex flex-col items-center gap-1">
              <span className="text-xl">🏢</span>
              <span className="text-sm font-semibold text-white tracking-wide">
                Concrete Atrium
              </span>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
