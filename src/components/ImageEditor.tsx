import React from 'react';
import { ImageUpload } from './ImageUpload';
import { TransparencyControl } from './TransparencyControl';
import { BlurControl } from './BlurControl';
import { EffectsPanel } from './EffectsPanel';
import { useImageEffects } from '../hooks/useImageEffects';
import { ImagePreview } from './ImagePreview';

export const ImageEditor: React.FC = () => {
  const {
    image,
    setImage,
    transparencyAmount,
    setTransparencyAmount,
    handleGradientPositionChange,
    blurAmount,
    setBlurAmount,
    processedImageUrl,
  } = useImageEffects();

  return (
<div
  className={`flex ${
    image ? 'lg:grid lg:grid-cols-[1fr,300px]' : 'flex-col items-center justify-center'
  } w-full max-w-5xl min-h-[80vh] gap-6 mt-4`}
>
  {/* جزء الصورة */}
  <div className={`w-full ${image ? 'max-w-7xl mx-auto' : ''}`}>
    <ImagePreview 
      image={image} 
      processedImageUrl={processedImageUrl} 
      onImageSet={setImage}
      onGradientPositionChange={handleGradientPositionChange}
    />
  </div>

  {/* جزء التأثيرات */}
  {image && (
    <div className="space-y-6 rounded-lg bg-gray-800 p-4 sticky top-4 h-fit">
      <EffectsPanel>
        <TransparencyControl
          amount={transparencyAmount}
          onAmountChange={setTransparencyAmount}
        />
        <BlurControl
          amount={blurAmount}
          onChange={setBlurAmount}
        />
      </EffectsPanel>
    </div>
  )}
</div>
  );
};