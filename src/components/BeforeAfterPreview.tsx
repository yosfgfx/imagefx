import React, { useState, useRef, useCallback } from 'react';
import { SplitSquareVertical } from 'lucide-react';

interface BeforeAfterPreviewProps {
  originalImageUrl: string;
  processedImageUrl: string;
}

export const BeforeAfterPreview: React.FC<BeforeAfterPreviewProps> = ({
  originalImageUrl,
  processedImageUrl,
}) => {
  const [splitPosition, setSplitPosition] = useState(50);
  const [isActive, setIsActive] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMouseDown = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent) => {
    if (!isActive || !containerRef.current) return;
    
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(e.clientX - rect.left, rect.width));
    const pos = (x / rect.width) * 100;
    setSplitPosition(pos);
  }, [isActive]);

  const handleMouseUp = useCallback(() => {
    setIsActive(false);
  }, []);

  const handleTouchStart = useCallback(() => {
    setIsActive(true);
  }, []);

  const handleTouchMove = useCallback((e: React.TouchEvent) => {
    if (!isActive || !containerRef.current) return;
    
    const touch = e.touches[0];
    const rect = containerRef.current.getBoundingClientRect();
    const x = Math.max(0, Math.min(touch.clientX - rect.left, rect.width));
    const pos = (x / rect.width) * 100;
    setSplitPosition(pos);
  }, [isActive]);

  const handleTouchEnd = useCallback(() => {
    setIsActive(false);
  }, []);

  return (
    <div 
      className="relative w-full h-full rounded-lg overflow-hidden"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      {/* الصورة الأصلية */}
      <div className="absolute inset-0">
        <img
          src={originalImageUrl}
          alt="الصورة الأصلية"
          className="w-full h-full object-contain"
        />
      </div>
      
      {/* الصورة المعدلة */}
      <div 
        className="absolute inset-0 overflow-hidden"
        style={{ width: `${splitPosition}%` }}
      >
        <img
          src={processedImageUrl}
          alt="الصورة المعدلة"
          className="w-full h-full object-contain"
          style={{ width: `${100 / (splitPosition / 100)}%` }}
        />
      </div>
      
      {/* شريط المقارنة */}
      <div 
        className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
        style={{ left: `${splitPosition}%` }}
        onMouseDown={handleMouseDown}
        onTouchStart={handleTouchStart}
      >
        <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 bg-white rounded-full p-1">
          <SplitSquareVertical className="h-5 w-5 text-gray-800" />
        </div>
      </div>
      
      {/* تسميات توضيحية */}
      <div className="absolute bottom-2 left-2 px-2 py-1 bg-gray-800/70 text-white text-sm rounded">
        قبل
      </div>
      <div className="absolute bottom-2 right-2 px-2 py-1 bg-gray-800/70 text-white text-sm rounded">
        بعد
      </div>
    </div>
  );
}; 