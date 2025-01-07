import React from 'react';
import { Droplets } from 'lucide-react';
import { Slider } from './Slider';

interface TransparencyControlProps {
  amount: number;
  onAmountChange: (value: number) => void;
}

export const TransparencyControl: React.FC<TransparencyControlProps> = ({
  amount,
  onAmountChange,
}) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Droplets className="h-5 w-5 text-purple-400" />
        <h3 className="font-medium">Transparency Gradient</h3>
      </div>
      
      <div className="space-y-2">
        <p className="text-sm text-gray-400">
          Click and drag on the image to set gradient position
        </p>
        <div className="space-y-2">
          <span className="text-sm text-gray-400">Opacity</span>
          <Slider
            value={amount}
            onChange={onAmountChange}
            min={0}
            max={100}
          />
        </div>
      </div>
    </div>
  );
};