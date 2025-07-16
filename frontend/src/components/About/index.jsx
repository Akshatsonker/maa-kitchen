import React from "react";
import { BackgroundLines } from "./background-lines";
import { Link } from "react-router-dom";

export default function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="w-full h-screen bg-amber-200 flex flex-col items-center justify-center">
      {/* Home Link positioned at the top right */}
      <Link 
        to="/welcome" 
        className="absolute top-4 right-4 text-3xl text-amber-900 hover:text-amber-700 transition-colors font-bold"
      >
        Home
      </Link>
        
      <div className="text-center px-4 max-w-4xl">
        <h2 className="text-amber-950 text-3xl md:text-6xl font-bold leading-tight">
          This is our startup called Maa Kitchen food delivery where you get delicious food in your hostels.
        </h2>
      </div>
    </BackgroundLines>
  );
}