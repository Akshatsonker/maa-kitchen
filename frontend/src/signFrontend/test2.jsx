/*
"use client";

import React from "react";
import { Boxes } from "../src/components/ui/background-boxes";
import { cn } from "../src/lib/utils2.jsx";

export function BackgroundBoxesDemo() {
  return (
    <div className="absolute inset-0 h-full w-full overflow-hidden bg-slate-900">
      {/* Background boxes with animation */
      
      /*
      <Boxes />
      
      {/* Overlay mask */

      /*
      <div className="absolute inset-0 w-full h-full bg-slate-900 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] pointer-events-none" />
    </div>
  );
}


import React from "react";
import { Boxes } from "../src/components/ui/background-boxes.jsx";
import { cn } from "../src/lib/utils2.jsx";

export function BackgroundBoxesDemo() {
  return (
    <div
      className=" absolute h-full inset-0 w-full overflow-hidden bg-slate-900 flex flex-col items-center justify-center rounded-lg">
      <div
        className="absolute inset-0 w-full h-full bg-slate-900 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />
      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        
      </p>
    </div>
  );
}
*/

import React from 'react';
import { Boxes } from '../signFrontend/components/background-boxes';


export function BackgroundBoxesDemo() {
  return (
    <div className="relative min-h-screen w-full bg-slate-900 flex flex-col items-center justify-center rounded-lg overflow-hidden">
      {/* Boxes as background */}
      <div className="absolute inset-0 w-full h-full z-0">
        <Boxes />
      </div>
      {/* Mask overlay */}
      <div
        className="absolute inset-0 w-full h-full z-10 pointer-events-auto"
        style={{
          maskImage: 'radial-gradient(transparent,white)',
          WebkitMaskImage: 'radial-gradient(transparent,white)',
        background: 'transparent', // Ensure overlay is transparent
        }}
      />
      {/* Foreground content goes here */}
      <div className="relative z-20 flex flex-col items-center">
        {/* Your content */}
      </div>
    </div>
  );
}

