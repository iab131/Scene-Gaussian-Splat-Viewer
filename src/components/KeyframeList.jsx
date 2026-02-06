import { useState, useCallback, useRef } from 'react';

/**
 * KeyframeList component with delete and drag-to-reorder
 */
export default function KeyframeList({ 
  keyframes = [], 
  onDelete, 
  onReorder,
  isPlaying = false
}) {
  const [dragIndex, setDragIndex] = useState(null);
  const [dropIndex, setDropIndex] = useState(null);

  // Handle drag start
  const handleDragStart = useCallback((index) => {
    if (isPlaying) return;
    setDragIndex(index);
  }, [isPlaying]);

  // Handle drag over another item
  const handleDragOver = useCallback((e, index) => {
    e.preventDefault();
    if (dragIndex !== null && dragIndex !== index) {
      setDropIndex(index);
    }
  }, [dragIndex]);

  // Handle drop
  const handleDrop = useCallback((index) => {
    if (dragIndex !== null && dragIndex !== index) {
      onReorder?.(dragIndex, index);
    }
    setDragIndex(null);
    setDropIndex(null);
  }, [dragIndex, onReorder]);

  // Handle drag end (cleanup)
  const handleDragEnd = useCallback(() => {
    setDragIndex(null);
    setDropIndex(null);
  }, []);

  if (keyframes.length === 0) {
    return (
      <div className="text-xs text-slate-400 text-center py-3 border border-dashed border-slate-700 rounded mb-3">
        No keyframes recorded
      </div>
    );
  }

  return (
    <div className="mb-3">
      <div className="text-xs text-slate-300 mb-1">
        Keyframes ({keyframes.length})
      </div>
      
      <div 
        className="max-h-32 overflow-y-auto space-y-1 pr-1"
        style={{
          scrollbarWidth: 'thin',
          scrollbarColor: '#475569 transparent'
        }}
      >
        {keyframes.map((kf, index) => {
          const isDragging = dragIndex === index;
          const isDropTarget = dropIndex === index;
          
          return (
            <div
              key={kf.timestamp}
              draggable={!isPlaying}
              onDragStart={(e) => {
                e.stopPropagation();
                handleDragStart(index);
              }}
              onDragOver={(e) => {
                e.stopPropagation();
                handleDragOver(e, index);
              }}
              onDrop={(e) => {
                e.stopPropagation();
                e.preventDefault();
                handleDrop(index);
              }}
              onDragEnd={(e) => {
                e.stopPropagation();
                handleDragEnd();
              }}
              onDragEnter={(e) => {
                e.stopPropagation();
                e.preventDefault();
              }}
              onDragLeave={(e) => {
                e.stopPropagation();
              }}
              className={`flex items-center gap-2 px-2 py-1 rounded-lg text-xs transition-all ${
                isDragging 
                  ? 'opacity-50 bg-slate-700' 
                  : isDropTarget 
                    ? 'bg-sky-800/50 border border-sky-500' 
                    : 'bg-slate-800 hover:bg-slate-700'
              } ${isPlaying ? 'opacity-50' : 'cursor-grab active:cursor-grabbing'}`}
            >
              {/* Drag handle */}
              <span className="text-slate-400 select-none text-[16px]">≡</span>
              
              {/* Index */}
              <span className="text-slate-300 font-mono w-4">{index + 1}</span>
              
              {/* Position preview */}
              <span className="text-slate-300 flex-1 truncate text-[12px]">
                ({kf.position.x.toFixed(1)}, {kf.position.y.toFixed(1)}, {kf.position.z.toFixed(1)})
              </span>
              
              {/* Delete button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  if (!isPlaying) onDelete?.(index);
                }}
                disabled={isPlaying}
                className="text-red-400 text-[16px] hover:text-red-300 hover:bg-red-900/30 px-1 rounded disabled:opacity-50 disabled:cursor-not-allowed"
                title="Delete keyframe"
              >
                🗑
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}
