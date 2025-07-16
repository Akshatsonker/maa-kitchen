import React from 'react';
import { Boxes } from './components/background-boxes';
import { cn } from './lib/utils2.jsx';

export function BackgroundBoxesDemo() {
  return (
    <div className="relative min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center rounded-lg overflow-hidden">
      {/* Boxes as background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Boxes />
      </div>
      {/* Mask overlay */}
      <div
        className="absolute inset-0 w-full h-full z-10 pointer-events-none"
        style={{
          maskImage: 'radial-gradient(transparent,white)',
          WebkitMaskImage: 'radial-gradient(transparent,white)',
          background: 'transparent',
        }}
      />
      {/* Foreground content goes here */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Your content */}
      </div>
    </div>
  );
}