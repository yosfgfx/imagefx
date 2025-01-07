import React from 'react';
import { Download, Clipboard } from 'lucide-react';

interface ExportButtonProps {
  processedImageUrl: string;
}

export const ExportButton: React.FC<ExportButtonProps> = ({ processedImageUrl }) => {
  const handleExport = () => {
    const link = document.createElement('a');
    link.href = processedImageUrl;
    link.download = 'edited-image.png';
    link.click();
  };

  const handleCopyToClipboard = async () => {
    try {
      const response = await fetch(processedImageUrl);
      const blob = await response.blob();
      await navigator.clipboard.write([
        new ClipboardItem({
          [blob.type]: blob
        })
      ]);
    } catch (err) {
      console.error('Failed to copy image:', err);
    }
  };

  return (
    <div className="flex gap-3 justify-center flex-wrap">
      <button
        onClick={handleExport}
        className="flex items-center gap-2 rounded-md bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700"
      >
        <Download className="h-4 w-4" />
        Export Image
      </button>
      <button
        onClick={handleCopyToClipboard}
        className="flex items-center gap-2 rounded-md bg-blue-600 px-4 py-2 font-medium text-white hover:bg-blue-700"
      >
        <Clipboard className="h-4 w-4" />
        Copy to Clipboard
      </button>
    </div>
  );
};