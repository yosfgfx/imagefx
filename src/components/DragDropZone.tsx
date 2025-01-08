import React, { useCallback } from 'react';
import { Upload } from 'lucide-react';

interface DragDropZoneProps {
  onImageSet: (image: HTMLImageElement) => void;
  children: React.ReactNode;
}

export const DragDropZone: React.FC<DragDropZoneProps> = ({ onImageSet, children }) => {
  const handleDrop = useCallback((e: React.DragEvent) => {
    e.preventDefault();
    const file = e.dataTransfer.files[0];
    if (file && file.type.startsWith('image/')) {
      const url = URL.createObjectURL(file);
      const img = new Image();
      img.onload = () => {
        onImageSet(img);
        URL.revokeObjectURL(url);
      };
      img.src = url;
    }
  }, [onImageSet]);

  const handleDragOver = useCallback((e: React.DragEvent) => {
    e.preventDefault();
  }, []);

  return (
    <div
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      className="relative h-full"
    >
      {children}
    </div>
  );
};