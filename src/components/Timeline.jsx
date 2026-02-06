import { useRef, useCallback, useState } from 'react';

/**
 * Timeline component with draggable scrubber
 * Professional video editor style with smooth interactions
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
  const [isHovering, setIsHovering] = useState(false);

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
    <div className="mb-4">
      {/* Header */}
      <div className="flex justify-between text-xs text-slate-300 mb-2">
        <span className="font-medium">Timeline</span>
        <span className="font-mono text-slate-400">
          {currentTime}s <span className="text-slate-500">/</span> {totalTime}s
        </span>
      </div>
      
      {/* Track container with padding for thumb overflow */}
      <div 
        className="relative px-2"
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={() => setIsHovering(false)}
      >
        {/* Track - dark rounded bar with inner shadow for depth */}
        <div
          ref={trackRef}
          className={`relative h-3 rounded-full transition-all duration-200 ${
            isDisabled 
              ? 'bg-slate-800/50 cursor-not-allowed opacity-50' 
              : 'bg-slate-800 cursor-pointer shadow-inner'
          } ${isHovering && !isDisabled ? 'h-4' : ''}`}
          style={{
            boxShadow: isDisabled ? 'none' : 'inset 0 2px 4px rgba(0,0,0,0.3)'
          }}
          onPointerDown={handlePointerDown}
          onPointerMove={handlePointerMove}
          onPointerUp={handlePointerUp}
          onPointerLeave={handlePointerUp}
        >
          {/* Progress fill with gradient */}
          <div 
            className="absolute top-0 left-0 h-full rounded-full transition-all"
            style={{ 
              width: `${scrubberPosition * 100}%`,
              background: 'linear-gradient(90deg, rgba(56,189,248,0.4) 0%, rgba(14,165,233,0.6) 100%)'
            }}
          />
          
          {/* Keyframe tick markers - thin vertical lines */}
          {keyframeCount > 0 && Array.from({ length: keyframeCount }).map((_, i) => {
            const pos = keyframeCount > 1 ? (i / (keyframeCount - 1)) * 100 : 50;
            const isFirst = i === 0;
            const isLast = i === keyframeCount - 1;
            return (
              <div
                key={i}
                className={`absolute top-0 h-full transition-all ${
                  isHovering && !isDisabled ? 'w-1' : 'w-0.5'
                }`}
                style={{ 
                  left: `${pos}%`,
                  transform: 'translateX(-50%)',
                  background: isFirst || isLast 
                    ? 'rgba(56,189,248,0.8)' 
                    : 'rgba(148,163,184,0.5)',
                  borderRadius: '1px'
                }}
                title={`Keyframe ${i + 1}`}
              />
            );
          })}
          
          {/* Scrubber thumb - larger, clearly draggable */}
          {!isDisabled && (
            <div
              className={`absolute top-1/2 -translate-y-1/2 rounded-full transition-all duration-150 ${
                isDragging 
                  ? 'w-5 h-5 bg-white shadow-[0_0_12px_rgba(56,189,248,0.8)]' 
                  : isHovering 
                    ? 'w-4 h-4 bg-white shadow-lg' 
                    : 'w-3 h-3 bg-slate-200 shadow-md'
              }`}
              style={{ 
                left: `${scrubberPosition * 100}%`,
                transform: `translateX(-50%) translateY(-50%)`,
                transition: isDragging ? 'width 0.15s, height 0.15s, box-shadow 0.15s' : 'all 0.15s ease-out',
                cursor: 'grab',
                border: '2px solid rgba(14,165,233,0.8)'
              }}
            />
          )}
        </div>
      </div>
    </div>
  );
}
