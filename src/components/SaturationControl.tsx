import React from 'react';
import { Palette } from 'lucide-react';
import { Slider } from './Slider';

interface SaturationControlProps {
  amount: number;
  onChange: (value: number) => void;
}

export const SaturationControl: React.FC<SaturationControlProps> = ({ amount, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Palette className="h-5 w-5 text-red-400" />
        <h3 className="font-medium">تشبع الألوان</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">القيمة</span>
          <Slider
            value={amount}
            onChange={onChange}
            min={0}
            max={200}
            aria-label="تحكم في قيمة تشبع الألوان"
          />
        </div>
      </div>
    </div>
  );
}; 