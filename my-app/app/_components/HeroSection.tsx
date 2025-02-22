"use client";
import React, { useEffect, useState } from "react";
import { ShootingStars } from "@/components/ui/shooting-stars";
import { StarsBackground } from "@/components/ui/stars-background";
import { Spotlight } from "@/components/ui/spotlight";
import { Typewriter } from "./TypeWriter";
import { Vortex } from "@/components/ui/vortex";
import ColourfulText from "@/components/ui/colourful-text";
import { WobbleCard } from "@/components/ui/wobble-card";


function HeroSection() {

  const [particleCount, setParticleCount] = useState(100);

  useEffect(()=>{

    const updateParticleCount = () =>
    {
      if(window.innerWidth <640) setParticleCount(50);
      else if (window.innerWidth < 1024) setParticleCount(100); // Medium screens (md)
      else setParticleCount(200); // Large screens (lg+)
    

    }

    updateParticleCount(); // Initial value
    window.addEventListener("resize", updateParticleCount);
  
    return () => {
      window.removeEventListener("resize", updateParticleCount);
    };


   

  
 
  },[])




  return (
    <div className="mt-20 rounded-md bg-black flex flex-col items-center justify-center absolute w-full">
      

      <div className="w-[calc(100%-4rem)] mx-auto rounded-md  h-[40%] overflow-hidden">
        <Vortex
          backgroundColor="black"
          rangeY={500}
          particleCount={particleCount}
          baseHue={120}
          className="flex items-center flex-col justify-center px-2 md:px-10  py-4 w-full h-full"

        />

        <div className="relative flex justify-center">
          <Typewriter />
        </div>


        



      </div>
        <ShootingStars />
        <StarsBackground />
        <Spotlight />


        {/* <WobbleCard children = {React.ReactNode} /> */}

      
        
      
      
    </div>
  );
}

export default HeroSection
