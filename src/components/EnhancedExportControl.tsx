import React, { useState, useEffect } from 'react';
import { Download, Copy, Check } from 'lucide-react';
import { Slider } from './Slider';

interface EnhancedExportControlProps {
  processedImageUrl: string;
  originalWidth: number;
  originalHeight: number;
}

export const EnhancedExportControl: React.FC<EnhancedExportControlProps> = ({
  processedImageUrl,
  originalWidth,
  originalHeight
}) => {
  const [format, setFormat] = useState<'png' | 'jpeg' | 'webp'>('png');
  const [quality, setQuality] = useState<number>(90);
  const [width, setWidth] = useState<number>(originalWidth);
  const [height, setHeight] = useState<number>(originalHeight);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState<boolean>(true);
  const [copied, setCopied] = useState(false);
  
  useEffect(() => {
    if (copied) {
      const timer = setTimeout(() => setCopied(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [copied]);
  
  const handleWidthChange = (newWidth: number) => {
    setWidth(newWidth);
    if (maintainAspectRatio) {
      const aspectRatio = originalWidth / originalHeight;
      setHeight(Math.round(newWidth / aspectRatio));
    }
  };
  
  const handleHeightChange = (newHeight: number) => {
    setHeight(newHeight);
    if (maintainAspectRatio) {
      const aspectRatio = originalWidth / originalHeight;
      setWidth(Math.round(newHeight * aspectRatio));
    }
  };
  
  const handleExport = () => {
    const canvas = document.createElement('canvas');
    canvas.width = width;
    canvas.height = height;
    const ctx = canvas.getContext('2d');
    
    if (!ctx) return;
    
    const img = new Image();
    img.onload = () => {
      ctx.drawImage(img, 0, 0, width, height);
      const exportUrl = canvas.toDataURL(`image/${format}`, format === 'png' ? 1 : quality / 100);
      
      const link = document.createElement('a');
      link.href = exportUrl;
      link.download = `edited-image.${format}`;
      link.click();
    };
    img.src = processedImageUrl;
  };
  
  const handleCopyToClipboard = async () => {
    try {
      const canvas = document.createElement('canvas');
      canvas.width = width;
      canvas.height = height;
      const ctx = canvas.getContext('2d');
      
      if (!ctx) return;
      
      const img = new Image();
      img.onload = async () => {
        ctx.drawImage(img, 0, 0, width, height);
        const blob = await new Promise<Blob>((resolve) => {
          canvas.toBlob((b) => resolve(b!), `image/${format}`, format === 'png' ? 1 : quality / 100);
        });
        
        await navigator.clipboard.write([
          new ClipboardItem({ [blob.type]: blob })
        ]);
        
        setCopied(true);
      };
      img.src = processedImageUrl;
    } catch (err) {
      console.error('Failed to copy image:', err);
    }
  };
  
  return (
    <div className="space-y-6 rounded-lg bg-gray-800 p-4">
      <h3 className="text-lg font-medium">خيارات التصدير</h3>
      
      <div className="space-y-4">
        {/* اختيار صيغة الملف */}
        <div className="space-y-2">
          <span className="text-sm text-gray-400">صيغة الملف</span>
          <div className="flex flex-wrap gap-2">
            <button
              className={`px-3 py-1 rounded-md ${format === 'png' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setFormat('png')}
            >
              PNG
            </button>
            <button
              className={`px-3 py-1 rounded-md ${format === 'jpeg' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setFormat('jpeg')}
            >
              JPEG
            </button>
            <button
              className={`px-3 py-1 rounded-md ${format === 'webp' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'}`}
              onClick={() => setFormat('webp')}
            >
              WebP
            </button>
          </div>
        </div>
        
        {/* جودة الصورة */}
        {format !== 'png' && (
          <div className="space-y-2">
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-400">الجودة: {quality}%</span>
            </div>
            <Slider
              value={quality}
              onChange={setQuality}
              min={10}
              max={100}
              aria-label="اختيار جودة الصورة"
            />
          </div>
        )}
        
        {/* أبعاد الصورة */}
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <span className="text-sm text-gray-400">الأبعاد</span>
            <label className="flex items-center">
              <input
                type="checkbox"
                checked={maintainAspectRatio}
                onChange={(e) => setMaintainAspectRatio(e.target.checked)}
                className="mr-2 h-4 w-4 rounded border-gray-700 text-purple-600 focus:ring-purple-500"
              />
              <span className="text-sm text-gray-400">الحفاظ على النسبة</span>
            </label>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1">
              <span className="text-sm text-gray-400">العرض</span>
              <input
                type="number"
                value={width}
                onChange={(e) => handleWidthChange(parseInt(e.target.value) || 0)}
                className="w-full rounded-md border-gray-700 bg-gray-700 px-3 py-2 text-white"
              />
            </div>
            <div className="space-y-1">
              <span className="text-sm text-gray-400">الارتفاع</span>
              <input
                type="number"
                value={height}
                onChange={(e) => handleHeightChange(parseInt(e.target.value) || 0)}
                className="w-full rounded-md border-gray-700 bg-gray-700 px-3 py-2 text-white"
              />
            </div>
          </div>
        </div>
        
        {/* أزرار التصدير */}
        <div className="flex gap-2 flex-wrap pt-2">
          <button
            onClick={handleExport}
            className="flex-1 flex items-center justify-center gap-2 rounded-md bg-purple-600 px-4 py-3 font-medium text-white hover:bg-purple-700"
          >
            <Download className="h-5 w-5" />
            تحميل الصورة
          </button>
          <button
            onClick={handleCopyToClipboard}
            className="flex-1 flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-3 font-medium text-white hover:bg-blue-700"
          >
            {copied ? <Check className="h-5 w-5" /> : <Copy className="h-5 w-5" />}
            {copied ? 'تم النسخ' : 'نسخ للحافظة'}
          </button>
        </div>
      </div>
    </div>
  );
}; 