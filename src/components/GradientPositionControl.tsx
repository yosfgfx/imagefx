import React, { useState, useCallback } from 'react';

interface Point {
  x: number;
  y: number;
}

interface GradientPositionControlProps {
  onPositionChange: (startPoint: Point, endPoint: Point) => void;
}

export const GradientPositionControl: React.FC<GradientPositionControlProps> = ({
  onPositionChange,
}) => {
  const [isDragging, setIsDragging] = useState(false);
  const [startPoint, setStartPoint] = useState<Point | null>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;
    setStartPoint({ x, y });
    setIsDragging(true);
  }, []);

  const handleMouseMove = useCallback((e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !startPoint) return;

    const rect = e.currentTarget.getBoundingClientRect();
    const endPoint = {
      x: (e.clientX - rect.left) / rect.width,
      y: (e.clientY - rect.top) / rect.height,
    };

    onPositionChange(startPoint, endPoint);
  }, [isDragging, startPoint, onPositionChange]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
    setStartPoint(null);
  }, []);

  return (
    <div 
      className="absolute inset-0 cursor-crosshair"
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
    />
  );
};