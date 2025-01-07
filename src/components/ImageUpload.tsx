import React, { useCallback, useEffect } from 'react';
import { Upload, Clipboard } from 'lucide-react';

interface ImageUploadProps {
  onImageSet: (image: HTMLImageElement) => void;
}

export const ImageUpload: React.FC<ImageUploadProps> = ({ onImageSet }) => {
  const handlePaste = useCallback(
    (e: React.ClipboardEvent | ClipboardEvent) => {
      const items = e.clipboardData?.items;
      if (!items) return;

      for (const item of Array.from(items)) {
        if (item.type.indexOf('image') === 0) {
          const blob = item.getAsFile();
          if (!blob) continue;

          const url = URL.createObjectURL(blob);
          const img = new Image();
          img.onload = () => {
            onImageSet(img);
            URL.revokeObjectURL(url);
          };
          img.src = url;
          break;
        }
      }
    },
    [onImageSet]
  );

  useEffect(() => {
    document.addEventListener('paste', handlePaste);
    return () => document.removeEventListener('paste', handlePaste);
  }, [handlePaste]);

  const handleFileChange = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
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

  return (
    <div
  className="flex flex-col items-center justify-center gap-6 rounded-lg border-2 border-dashed border-gray-700 p-8 text-center max-w-full mx-auto h-[70vh]"
  tabIndex={0}
>
      <Upload className="h-[10vh] w-24 text-gray-500" />
      <div className="space-y-4">
        <p className="text-lg font-medium"> أسقط الصور هنا Drop an image here</p>
        <p className="text-sm text-gray-400">أو قم باللصق من الحافظة or paste from clipboard</p>
        <div className="flex gap-3 flex-wrap justify-center">
          <label className="inline-block cursor-pointer rounded-md bg-purple-600 px-4 py-2 text-sm font-medium text-white hover:bg-purple-700">
            إختر الملف Choose File
            <input
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleFileChange}
            />
          </label>
          <button
            onClick={() => navigator.clipboard.read()}
            className="rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 flex items-center gap-2"
          >
            <Clipboard className="h-4 w-4" />
            لصق Paste from Clipboard
          </button>
        </div>
      </div>
    </div>
  );
};