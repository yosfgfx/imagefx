import React from 'react';

interface SliderProps {
  value: number;
  onChange: (value: number) => void;
  min: number;
  max: number;
  'aria-label'?: string;
}

export const Slider: React.FC<SliderProps> = ({ value, onChange, min, max, 'aria-label': ariaLabel }) => {
  return (
    <input
      type="range"
      min={min}
      max={max}
      value={value}
      onChange={(e) => onChange(Number(e.target.value))}
      className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-700 accent-purple-500"
      aria-label={ariaLabel || "Slider control"}
      title={ariaLabel || "Slider control"}
    />
  );
};