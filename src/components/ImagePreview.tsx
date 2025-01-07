import React from 'react';
import { ImageUpload } from './ImageUpload';
import { GradientPositionControl } from './GradientPositionControl';
import { DragDropZone } from './DragDropZone';
import { ExportButton } from './ExportButton';

interface Point {
  x: number;
  y: number;
}

interface ImagePreviewProps {
  image: HTMLImageElement | null;
  processedImageUrl: string;
  onImageSet: (image: HTMLImageElement) => void;
  onGradientPositionChange: (start: Point, end: Point) => void;
}

export const ImagePreview: React.FC<ImagePreviewProps> = ({ 
  image, 
  processedImageUrl, 
  onImageSet,
  onGradientPositionChange,
}) => {
  return (
    <div className="relative h-full w-full space-y-4 flex flex-col justify-center min-h-screen">
      <DragDropZone onImageSet={onImageSet}>
        <div className="relative min-h-[500px] rounded-lg bg-gray-800 p-4 justify-center">
          {!image && <ImageUpload onImageSet={onImageSet} />}
          {image && (
            <div className="relative h-full w-full">
              <img
                src={processedImageUrl}
                alt="Edited"
                className="mx-auto max-h-[70vh] object-contain"
              />
              <GradientPositionControl onPositionChange={onGradientPositionChange} />
            </div>
          )}
        </div>
      </DragDropZone>
      {image && <ExportButton processedImageUrl={processedImageUrl} />}
    </div>
  );
};