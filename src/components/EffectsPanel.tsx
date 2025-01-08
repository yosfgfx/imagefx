import React from 'react';

export const EffectsPanel: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <div className="space-y-6 rounded-lg bg-gray-800/50 p-4">
      <h2 className="text-lg font-semibold">Effects</h2>
      <div className="space-y-6">
        {children}
      </div>
    </div>
  );
};