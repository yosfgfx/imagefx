import React from 'react';
import { ZoomIn } from 'lucide-react';
import { Slider } from './Slider';

interface ContrastControlProps {
  amount: number;
  onChange: (value: number) => void;
}

export const ContrastControl: React.FC<ContrastControlProps> = ({ amount, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <ZoomIn className="h-5 w-5 text-green-400" />
        <h3 className="font-medium">التباين</h3>
      </div>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <span className="text-sm text-gray-400">القيمة</span>
          <Slider
            value={amount}
            onChange={onChange}
            min={0}
            max={200}
            aria-label="تحكم في قيمة التباين"
          />
        </div>
      </div>
    </div>
  );
}; 