import { useState, useCallback, useEffect, useRef } from 'react';

interface Point {
  x: number;
  y: number;
}

export const useImageEffects = () => {
  const [image, setImage] = useState<HTMLImageElement | null>(null);
  const [transparencyAmount, setTransparencyAmount] = useState(50);
  const [gradientStart, setGradientStart] = useState<Point>({ x: 0.5, y: 0.5 });
  const [gradientEnd, setGradientEnd] = useState<Point>({ x: 1, y: 0.5 });
  const [blurAmount, setBlurAmount] = useState(0);
  const [processedImageUrl, setProcessedImageUrl] = useState<string>('');
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  const handleGradientPositionChange = useCallback((start: Point, end: Point) => {
    setGradientStart(start);
    setGradientEnd(end);
  }, []);

  useEffect(() => {
    if (!image) return;

    const canvas = document.createElement('canvas');
    canvasRef.current = canvas;
    canvas.width = image.width;
    canvas.height = image.height;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Draw original image
    ctx.drawImage(image, 0, 0);

    // Apply blur if needed
    if (blurAmount > 0) {
      ctx.filter = `blur(${blurAmount}px)`;
      ctx.drawImage(canvas, 0, 0);
      ctx.filter = 'none';
    }

    // Apply transparency gradient
    const gradient = ctx.createLinearGradient(
      gradientStart.x * canvas.width,
      gradientStart.y * canvas.height,
      gradientEnd.x * canvas.width,
      gradientEnd.y * canvas.height
    );

    gradient.addColorStop(0, `rgba(255, 255, 255, ${1 - transparencyAmount / 100})`);
    gradient.addColorStop(1, 'rgba(255, 255, 255, 1)');

    ctx.globalCompositeOperation = 'destination-in';
    ctx.fillStyle = gradient;
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    setProcessedImageUrl(canvas.toDataURL());

    return () => {
      URL.revokeObjectURL(processedImageUrl);
    };
  }, [image, transparencyAmount, gradientStart, gradientEnd, blurAmount]);

  return {
    image,
    setImage,
    transparencyAmount,
    setTransparencyAmount,
    handleGradientPositionChange,
    blurAmount,
    setBlurAmount,
    processedImageUrl,
  };
};