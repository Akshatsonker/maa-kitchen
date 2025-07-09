import React from "react";
import { BackgroundLines } from "./background-lines";
import { Link } from "react-router-dom";

export default function BackgroundLinesDemo() {
  return (
    <BackgroundLines className="w-full h-screen bg-amber-200 flex flex-col items-center justify-center">
      
      {/* Home Link positioned at the top left */}
      <span className="absolute top-4 right-4 text-3xl text-brown">
        <Link to="/welcome">Home</Link>
      </span>
        
      <div className="text-center">
        <h2 className="text-amber-950 text-6xl">
          This is our startup called Maa Kitchen food delivery where you get delicious food in your hostels.
        </h2>
      </div>
    </BackgroundLines>
  );
}