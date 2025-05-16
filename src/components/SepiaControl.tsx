import React from 'react';
import { Clock } from 'lucide-react';
import { Slider } from './Slider';

interface SepiaControlProps {
  amount: number;
  onChange: (value: number) => void;
}

export const SepiaControl: React.FC<SepiaControlProps> = ({ amount, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Clock className="h-5 w-5 text-amber-400" />
        <h3 className="font-medium">تأثير السيبيا</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">القوة</span>
          <Slider
            value={amount}
            onChange={onChange}
            min={0}
            max={100}
            aria-label="تحكم في قوة تأثير السيبيا"
          />
        </div>
      </div>
    </div>
  );
}; 