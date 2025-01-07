import React from 'react';
import { Focus } from 'lucide-react';
import { Slider } from './Slider';

interface BlurControlProps {
  amount: number;
  onChange: (value: number) => void;
}

export const BlurControl: React.FC<BlurControlProps> = ({ amount, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Focus className="h-5 w-5 text-blue-400" />
        <h3 className="font-medium">Blur</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">Amount</span>
          <Slider
            value={amount}
            onChange={onChange}
            min={0}
            max={20}
          />
        </div>
      </div>
    </div>
  );
};