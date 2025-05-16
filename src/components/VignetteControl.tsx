import React from 'react';
import { Minimize2 } from 'lucide-react';
import { Slider } from './Slider';

interface VignetteControlProps {
  amount: number;
  onChange: (value: number) => void;
}

export const VignetteControl: React.FC<VignetteControlProps> = ({ amount, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Minimize2 className="h-5 w-5 text-indigo-400" />
        <h3 className="font-medium">تعتيم الحواف</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">القوة</span>
          <Slider
            value={amount}
            onChange={onChange}
            min={0}
            max={100}
            aria-label="تحكم في قوة تأثير تعتيم الحواف"
          />
        </div>
      </div>
    </div>
  );
}; 