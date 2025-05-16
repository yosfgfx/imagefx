import React from 'react';
import { Maximize, CircleDot } from 'lucide-react';

interface GradientTypeControlProps {
  type: 'linear' | 'radial';
  onChange: (type: 'linear' | 'radial') => void;
}

export const GradientTypeControl: React.FC<GradientTypeControlProps> = ({ type, onChange }) => {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <Maximize className="h-5 w-5 text-purple-400" />
        <h3 className="font-medium">نوع التدرج</h3>
      </div>
      
      <div className="flex gap-2">
        <button 
          className={`flex items-center gap-1 px-3 py-2 rounded-md ${
            type === 'linear' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => onChange('linear')}
          aria-label="تدرج خطي"
        >
          <Maximize className="h-4 w-4" />
          <span>خطي</span>
        </button>
        <button 
          className={`flex items-center gap-1 px-3 py-2 rounded-md ${
            type === 'radial' ? 'bg-purple-600 text-white' : 'bg-gray-700 text-gray-300'
          }`}
          onClick={() => onChange('radial')}
          aria-label="تدرج دائري"
        >
          <CircleDot className="h-4 w-4" />
          <span>دائري</span>
        </button>
      </div>
    </div>
  );
}; 