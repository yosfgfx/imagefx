import React from 'react';
import { CircleOff } from 'lucide-react';
import { Slider } from './Slider';

interface GrayscaleControlProps {
  amount: number;
  onChange: (value: number) => void;
}

export const GrayscaleControl: React.FC<GrayscaleControlProps> = ({ amount, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <CircleOff className="h-5 w-5 text-gray-400" />
        <h3 className="font-medium">تحويل للرمادي</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">القوة</span>
          <Slider
            value={amount}
            onChange={onChange}
            min={0}
            max={100}
            aria-label="تحكم في قوة تأثير الرمادي"
          />
        </div>
      </div>
    </div>
  );
}; 