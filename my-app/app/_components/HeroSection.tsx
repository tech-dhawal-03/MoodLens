"use client";
import React from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Spotlight } from "@/components/ui/spotlight";
import { Typewriter } from "./TypeWriter";


function HeroSection() {
  return (
    <div className="mt-20 rounded-md bg-neutral-900 flex flex-col items-center justify-center absolute w-full">
      <ShootingStars />
      <StarsBackground />
      <Spotlight />

      <div className="relative top-0">
      <Typewriter />

      </div>
      
        
       

        {/* <span className="relative top-0">
            <Typewriter/>
        </span>
     */}
      
    
       
       
      
      
    </div>
  );
}

export default HeroSection
