import React from 'react';

/**
 * Drag & drop visual overlay
 */
export function DragOverlay({ isDragging }) {
  if (!isDragging) return null;

  return (
    <div className="absolute inset-0 z-50 flex items-center justify-center bg-cyan-500/20 border-4 border-cyan-400 border-dashed m-4 rounded-xl pointer-events-none">
      <div className="text-4xl font-bold text-cyan-200 drop-shadow-lg">
        Drop .PLY File Here
      </div>
    </div>
  );
}
