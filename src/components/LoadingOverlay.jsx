import React from 'react';

/**
 * Loading overlay with progress bar and cancel button for exports
 */
export function LoadingOverlay({ 
  isLoading, 
  isExporting, 
  progress, 
  exportProgress,
  onCancelExport 
}) {
  if (!isLoading && !isExporting) return null;

  const displayProgress = isExporting ? exportProgress : progress;
  const message = isExporting ? "Rendering MP4..." : "Loading Scene...";

  return (
    <div className="absolute inset-0 z-50 flex flex-col items-center justify-center bg-black/60">
      <div className="text-2xl font-bold mb-4 text-cyan-400 animate-pulse">
        {message}
      </div>
      <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
        <div
          className="h-full bg-cyan-500 transition-all duration-200 ease-out"
          style={{ width: `${displayProgress}%` }}
        />
      </div>
      <div className="mt-2 text-sm text-cyan-200">
        {Math.round(displayProgress)}%
      </div>
      
      {/* Cancel button - only show during export */}
      {isExporting && onCancelExport && (
        <button
          onClick={onCancelExport}
          className="mt-4 px-6 py-2 text-sm font-medium bg-red-600/80 hover:bg-red-500 text-white rounded-lg transition-all hover:shadow-[0_0_15px_rgba(239,68,68,0.4)] active:scale-95"
        >
          Cancel Export
        </button>
      )}
    </div>
  );
}
