import React, { useState, useEffect } from 'react';
import { ImageEditor } from './components/ImageEditor';
import { Layout } from './components/Layout';

function App() {
const [opacity, setOpacity] = useState<number>(0.5);
  const [colorStops, setColorStops] = useState([
    { position: 0, opacity: 0 },
    { position: 1, opacity: 1 }
  ]);

  return (
    <Layout>
      <ImageEditor />
    </Layout>
  );
}

export default App;

// مكون تحكم محسن في التدرج
interface EnhancedGradientControlProps {
  onGradientChange: (gradient: { type: 'linear' | 'radial', colorStops: { position: number, opacity: number }[] }) => void;
}

export const EnhancedGradientControl: React.FC<EnhancedGradientControlProps> = () => {
  const [gradientType, setGradientType] = useState<'linear' | 'radial'>('linear');
  const [colorStops, setColorStops] = useState([
    { position: 0, opacity: 0 },
    { position: 1, opacity: 1 }
  ]);
  
  // ... تنفيذ التدرج المحسن
  
  return (
    <div className="space-y-4">
      <div className="flex gap-4">
        <button 
          className={`px-3 py-1 rounded ${gradientType === 'linear' ? 'bg-purple-600 text-white' : 'bg-gray-700'}`}
          onClick={() => setGradientType('linear')}
        >
          خطي
        </button>
        <button 
          className={`px-3 py-1 rounded ${gradientType === 'radial' ? 'bg-purple-600 text-white' : 'bg-gray-700'}`}
          onClick={() => setGradientType('radial')}
        >
          دائري
        </button>
      </div>
      {/* واجهة إضافة نقاط توقف وتعديلها */}
    </div>
  );
};

// Hook محسن للتأثيرات
export const useEnhancedImageEffects = () => {
  // ... الكود الحالي
  
  const [grayscaleAmount, setGrayscaleAmount] = useState(0);
  const [sepiaAmount, setSepiaAmount] = useState(0);
  const [contrastAmount, setContrastAmount] = useState(100);
  const [saturationAmount, setSaturationAmount] = useState(100);
  
  useEffect(() => {
    // ... الكود الحالي
    
// تطبيق الفلاتر الإضافية
    const canvas = document.getElementById('canvas') as HTMLCanvasElement;
    const ctx = canvas?.getContext('2d');
    
    if (grayscaleAmount > 0 && ctx) {
      applyGrayscale(ctx, grayscaleAmount / 100);
    }
    
    if (sepiaAmount > 0 && ctx) {
      // تطبيق تأثير السيبيا
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        const r = data[i];
        const g = data[i + 1];
        const b = data[i + 2];
        
        data[i] = Math.min(255, (r * 0.393 + g * 0.769 + b * 0.189) * sepiaAmount / 100 + r * (1 - sepiaAmount / 100));
        data[i + 1] = Math.min(255, (r * 0.349 + g * 0.686 + b * 0.168) * sepiaAmount / 100 + g * (1 - sepiaAmount / 100));
        data[i + 2] = Math.min(255, (r * 0.272 + g * 0.534 + b * 0.131) * sepiaAmount / 100 + b * (1 - sepiaAmount / 100));
      }
      
      ctx.putImageData(imageData, 0, 0);
    }
    
    if (contrastAmount !== 100 && ctx) {
      // تطبيق تأثير التباين
      const factor = (259 * (contrastAmount - 100)) / (100 * (259 - contrastAmount));
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      
      for (let i = 0; i < data.length; i += 4) {
        data[i] = Math.max(0, Math.min(255, factor * (data[i] - 128) + 128));
        data[i + 1] = Math.max(0, Math.min(255, factor * (data[i + 1] - 128) + 128));
        data[i + 2] = Math.max(0, Math.min(255, factor * (data[i + 2] - 128) + 128));
      }
      
      ctx.putImageData(imageData, 0, 0);
    }
    
    if (saturationAmount !== 100 && ctx) {
      // تطبيق تأثير التشبع
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      const amount = saturationAmount / 100;
      
      for (let i = 0; i < data.length; i += 4) {
        const gray = 0.2989 * data[i] + 0.5870 * data[i + 1] + 0.1140 * data[i + 2];
        data[i] = gray * (1 - amount) + data[i] * amount;
        data[i + 1] = gray * (1 - amount) + data[i + 1] * amount;
        data[i + 2] = gray * (1 - amount) + data[i + 2] * amount;
      }
      
      ctx.putImageData(imageData, 0, 0);
    }
    
    // ... الكود الحالي
  }, [/* المتغيرات المضافة */]);
  
  // دوال مساعدة لتطبيق الفلاتر
  const applyGrayscale = (ctx: CanvasRenderingContext2D, amount: number) => {
    const canvasElement = ctx.canvas;
    const imageData = ctx.getImageData(0, 0, canvasElement.width, canvasElement.height);
    const data = imageData.data;
    
    for (let i = 0; i < data.length; i += 4) {
      const avg = (data[i] + data[i + 1] + data[i + 2]) / 3;
      data[i]     = data[i] * (1 - amount) + avg * amount;
      data[i + 1] = data[i + 1] * (1 - amount) + avg * amount;
      data[i + 2] = data[i + 2] * (1 - amount) + avg * amount;
    }
    
    ctx.putImageData(imageData, 0, 0);
  };
  
  // ... المزيد من دوال الفلاتر
  
  return {
    // ... الحالة الأصلية
    grayscaleAmount,
    setGrayscaleAmount,
    sepiaAmount,
    setSepiaAmount,
    contrastAmount,
    setContrastAmount,
    saturationAmount,
    setSaturationAmount,
  };
};

interface PreviewCompareProps {
  originalImage: string;
  processedImage: string;
}

export const PreviewCompare: React.FC<PreviewCompareProps> = ({
  originalImage,
  processedImage,
}) => {
  const [showComparison, setShowComparison] = useState(false);
  const [splitPosition, setSplitPosition] = useState(50);
  
  return (
    <div className="relative">
      <button
        className="absolute top-2 right-2 bg-gray-800 px-3 py-1 rounded text-white z-10"
        onClick={() => setShowComparison(!showComparison)}
      >
        {showComparison ? 'إلغاء المقارنة' : 'مقارنة قبل/بعد'}
      </button>
      
      {showComparison ? (
        <div className="relative">
          <div className="absolute inset-0 overflow-hidden" style={{ width: `${splitPosition}%` }}>
            <img src={originalImage} className="w-full h-full object-contain" alt="Original" />
          </div>
          <img src={processedImage} className="w-full object-contain" alt="Processed" />
          <div 
            className="absolute top-0 bottom-0 w-1 bg-white cursor-col-resize"
            style={{ left: `${splitPosition}%` }}
            onMouseDown={() => {
              const handleMouseMove = (moveEvent: MouseEvent) => {
                const containerRect = (moveEvent.currentTarget as HTMLElement).parentElement!.getBoundingClientRect();
                const newPosition = ((moveEvent.clientX - containerRect.left) / containerRect.width) * 100;
                setSplitPosition(Math.max(0, Math.min(100, newPosition)));
              };
              
              const handleMouseUp = () => {
                document.removeEventListener('mousemove', handleMouseMove);
                document.removeEventListener('mouseup', handleMouseUp);
              };
              
              document.addEventListener('mousemove', handleMouseMove);
              document.addEventListener('mouseup', handleMouseUp);
            }}
          ></div>
        </div>
      ) : (
        <img src={processedImage} className="w-full object-contain" alt="Processed" />
      )}
    </div>
  );
};

// تعريف نوع Layer
interface Layer {
  id: string;
  image: HTMLImageElement;
  opacity: number;
  blendMode: string;
  visible: boolean;
  name: string;
}

// Hook لإدارة الطبقات
export const useLayers = () => {
  const [layers, setLayers] = useState<Layer[]>([]);
  const [activeLayerIndex, setActiveLayerIndex] = useState<number>(0);
  
  const addLayer = (image: HTMLImageElement) => {
    const newLayer: Layer = {
      id: Date.now().toString(),
      image,
      opacity: 1,
      blendMode: 'normal',
      visible: true,
      name: `Layer ${layers.length + 1}`
    };
    
    setLayers([...layers, newLayer]);
    setActiveLayerIndex(layers.length);
  };
  
  const updateLayer = (index: number, updates: Partial<Layer>) => {
    const updatedLayers = [...layers];
    updatedLayers[index] = { ...updatedLayers[index], ...updates };
    setLayers(updatedLayers);
  };
  
  // المزيد من دوال إدارة الطبقات
  
  return {
    layers,
    activeLayerIndex,
    activeLayer: layers[activeLayerIndex],
    addLayer,
    updateLayer,
    setActiveLayerIndex,
    // المزيد من الدوال
  };
};

// تعريف واجهة خصائص خيارات التصدير المحسنة
interface EnhancedExportOptionsProps {
  processedImageUrl: string;
  originalWidth: number;
  originalHeight: number;
}

export const EnhancedExportOptions: React.FC<EnhancedExportOptionsProps> = ({
  processedImageUrl,
  originalWidth,
  originalHeight
}) => {
  const [format, setFormat] = useState<'png' | 'jpeg' | 'webp'>('png');
  const [quality, setQuality] = useState<number>(90);
  const [width, setWidth] = useState<number>(originalWidth);
  const [height, setHeight] = useState<number>(originalHeight);
  const [maintainAspectRatio, setMaintainAspectRatio] = useState<boolean>(true);
  
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
  
  return (
    <div className="space-y-4 p-4 bg-gray-800 rounded-lg">
      <h3 className="text-lg font-medium">خيارات التصدير</h3>
      
      <div className="space-y-2">
        <label className="block text-sm text-gray-400">تنسيق</label>
        <div className="flex gap-2">
          <button
            className={`px-3 py-1 rounded ${format === 'png' ? 'bg-purple-600 text-white' : 'bg-gray-700'}`}
            onClick={() => setFormat('png')}
          >
            PNG
          </button>
          <button
            className={`px-3 py-1 rounded ${format === 'jpeg' ? 'bg-purple-600 text-white' : 'bg-gray-700'}`}
            onClick={() => setFormat('jpeg')}
          >
            JPEG
          </button>
          <button
            className={`px-3 py-1 rounded ${format === 'webp' ? 'bg-purple-600 text-white' : 'bg-gray-700'}`}
            onClick={() => setFormat('webp')}
          >
            WebP
          </button>
        </div>
      </div>
      
      {/* المزيد من عناصر التحكم */}
      
      <button
        onClick={handleExport}
        className="w-full flex items-center justify-center gap-2 rounded-md bg-purple-600 px-4 py-2 font-medium text-white hover:bg-purple-700"
      >
        تصدير الصورة
      </button>
    </div>
  );
};