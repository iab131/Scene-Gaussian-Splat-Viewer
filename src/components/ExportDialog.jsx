import React, { useState } from 'react';

/**
 * Export configuration dialog
 * Allows user to set duration before exporting MP4
 */
export function ExportDialog({ 
  isOpen, 
  onClose, 
  onExport, 
  keyframeCount,
  defaultDuration = 5 
}) {
  const [duration, setDuration] = useState(defaultDuration);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleDurationChange = (e) => {
    const value = parseFloat(e.target.value);
    setDuration(value);
    
    // Validate
    if (isNaN(value)) {
      setError('Please enter a valid number');
    } else if (value < 1) {
      setError('Minimum duration is 1 second');
    } else if (value > 30) {
      setError('Maximum duration is 30 seconds');
    } else {
      setError('');
    }
  };

  const handleExport = () => {
    // Clamp to valid range
    const clampedDuration = Math.max(1, Math.min(30, duration));
    onExport(clampedDuration);
  };

  const isValid = !error && duration >= 1 && duration <= 30;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/70 backdrop-blur-sm"
        onClick={onClose}
      />
      
      {/* Dialog */}
      <div className="relative bg-slate-900 border border-slate-700 rounded-xl shadow-2xl p-6 min-w-[360px] max-w-md">
        {/* Header */}
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-semibold text-white flex items-center gap-2">
            <span className="text-fuchsia-400">🎬</span>
            Export MP4
          </h2>
          <button
            onClick={onClose}
            className="text-slate-400 hover:text-white transition-colors"
          >
            ✕
          </button>
        </div>

        {/* Content */}
        <div className="space-y-4">
          {/* Summary */}
          <div className="bg-slate-800/50 rounded-lg p-3 text-sm text-slate-300">
            <div className="flex justify-between">
              <span>Keyframes:</span>
              <span className="text-emerald-400 font-medium">{keyframeCount}</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Resolution:</span>
              <span className="text-cyan-400 font-medium">1280×720</span>
            </div>
            <div className="flex justify-between mt-1">
              <span>Frame Rate:</span>
              <span className="text-violet-400 font-medium">30 fps</span>
            </div>
          </div>

          {/* Duration Input */}
          <div>
            <label className="block text-sm font-medium text-slate-300 mb-2">
              Duration (seconds)
            </label>
            <div className="flex items-center gap-3">
              <input
                type="number"
                min="1"
                max="30"
                step="0.5"
                value={duration}
                onChange={handleDurationChange}
                className={`flex-1 px-4 py-2 bg-slate-800 border rounded-lg text-white focus:outline-none focus:ring-2 transition-all ${
                  error 
                    ? 'border-red-500 focus:ring-red-500/50' 
                    : 'border-slate-600 focus:ring-fuchsia-500/50 focus:border-fuchsia-500'
                }`}
              />
              <span className="text-slate-400 text-sm">sec</span>
            </div>
            
            {/* Duration slider */}
            <input
              type="range"
              min="1"
              max="30"
              step="0.5"
              value={duration}
              onChange={handleDurationChange}
              className="w-full mt-2 accent-fuchsia-500"
            />
            
            {/* Range labels */}
            <div className="flex justify-between text-xs text-slate-500 mt-1">
              <span>1s</span>
              <span>15s</span>
              <span>30s</span>
            </div>

            {/* Error message */}
            {error && (
              <p className="mt-2 text-sm text-red-400">{error}</p>
            )}
          </div>

          {/* Estimated info */}
          <div className="text-xs text-slate-500 text-center">
            Estimated frames: <span className="text-slate-400">{Math.ceil(duration * 30)}</span>
          </div>
        </div>

        {/* Actions */}
        <div className="flex gap-3 mt-6">
          <button
            onClick={onClose}
            className="flex-1 px-4 py-2 text-sm font-medium bg-slate-700 hover:bg-slate-600 text-slate-300 rounded-lg transition-all active:scale-95"
          >
            Cancel
          </button>
          <button
            onClick={handleExport}
            disabled={!isValid}
            className="flex-1 px-4 py-2 text-sm font-medium bg-fuchsia-600 hover:bg-fuchsia-500 disabled:opacity-50 disabled:cursor-not-allowed text-white rounded-lg transition-all hover:shadow-[0_0_15px_rgba(192,38,211,0.4)] active:scale-95"
          >
            Export Video
          </button>
        </div>
      </div>
    </div>
  );
}
