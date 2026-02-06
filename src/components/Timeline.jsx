import { useRef, useCallback, useState } from 'react';

/**
 * Timeline component with draggable scrubber
 * Allows preview of camera path without modifying keyframes
 */
export default function Timeline({ 
  duration = 5000, 
  keyframeCount = 0,
  isPlaying = false,
  onSeek 
}) {
  const trackRef = useRef(null);
  const [scrubberPosition, setScrubberPosition] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  // Calculate t from mouse position
  const getTimeFromEvent = useCallback((e) => {
    if (!trackRef.current) return 0;
    const rect = trackRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const t = Math.max(0, Math.min(1, x / rect.width));
    return t;
  }, []);

  // Handle pointer events for scrubbing
  const handlePointerDown = useCallback((e) => {
    if (keyframeCount < 2 || isPlaying) return;
    
    setIsDragging(true);
    e.target.setPointerCapture(e.pointerId);
    
    const t = getTimeFromEvent(e);
    setScrubberPosition(t);
    onSeek?.(t);
  }, [keyframeCount, isPlaying, getTimeFromEvent, onSeek]);

  const handlePointerMove = useCallback((e) => {
    if (!isDragging) return;
    
    const t = getTimeFromEvent(e);
    setScrubberPosition(t);
    onSeek?.(t);
  }, [isDragging, getTimeFromEvent, onSeek]);

  const handlePointerUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const isDisabled = keyframeCount < 2 || isPlaying;
  const currentTime = ((scrubberPosition * duration) / 1000).toFixed(1);
  const totalTime = (duration / 1000).toFixed(1);

  return (
    <div className="mb-3">
      <div className="flex justify-between text-xs text-slate-400 mb-1">
        <span>Timeline</span>
        <span>{currentTime}s / {totalTime}s</span>
      </div>
      
      {/* Track */}
      <div
        ref={trackRef}
        className={`relative h-6 rounded bg-slate-800 border border-slate-600 ${
          isDisabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerLeave={handlePointerUp}
      >
        {/* Progress fill */}
        <div 
          className="absolute top-0 left-0 h-full bg-sky-600/30 rounded-l"
          style={{ width: `${scrubberPosition * 100}%` }}
        />
        
        {/* Keyframe markers */}
        {keyframeCount > 0 && Array.from({ length: keyframeCount }).map((_, i) => {
          const pos = keyframeCount > 1 ? (i / (keyframeCount - 1)) * 100 : 50;
          return (
            <div
              key={i}
              className="absolute top-1 w-1 h-4 bg-sky-400 rounded-sm"
              style={{ left: `calc(${pos}% - 2px)` }}
              title={`Keyframe ${i + 1}`}
            />
          );
        })}
        
        {/* Scrubber handle */}
        {!isDisabled && (
          <div
            className={`absolute top-0 w-3 h-6 bg-white rounded shadow-lg border border-slate-400 ${
              isDragging ? 'scale-110' : ''
            }`}
            style={{ 
              left: `calc(${scrubberPosition * 100}% - 6px)`,
              transition: isDragging ? 'none' : 'left 0.1s ease-out'
            }}
          />
        )}
      </div>
    </div>
  );
}
