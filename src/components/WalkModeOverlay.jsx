import React from 'react';

/**
 * Walk mode instructions overlay
 */
export function WalkModeOverlay({ isVisible }) {
  if (!isVisible) return null;

  return (
    <div className="absolute top-4 right-4 z-10 p-4 bg-orange-900/80 border border-orange-500/50 rounded-lg shadow-xl">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-2 h-2 bg-orange-400 rounded-full animate-pulse"></div>
        <span className="text-sm font-bold text-orange-300">WALK MODE</span>
      </div>
      <div className="text-xs text-orange-200/80 space-y-1">
        <div>
          <kbd className="px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100">W</kbd>
          <kbd className="px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100 ml-1">S</kbd>
          {' '}Forward / Back
        </div>
        <div>
          <kbd className="px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100">A</kbd>
          <kbd className="px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100 ml-1">D</kbd>
          {' '}Strafe L / R
        </div>
        <div>
          <kbd className="px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100">Q</kbd>
          <kbd className="px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100 ml-1">E</kbd>
          {' '}Down / Up
        </div>
        <div>
          <kbd className="px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100">LMB</kbd>
          {' '}Up{' '}
          <kbd className="px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100 ml-1">RMB</kbd>
          {' '}Down
        </div>
        <div className="pt-1 border-t border-orange-600/50 mt-1">
          <kbd className="px-1.5 py-0.5 bg-orange-800/50 rounded text-orange-100">ESC</kbd>
          {' '}Exit Walk Mode
        </div>
      </div>
    </div>
  );
}
