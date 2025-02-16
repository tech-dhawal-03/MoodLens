"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

export function Typewriter() {
  const words = [
    {
      text: "Build",
      className : "text-4xl text-white md:text-6xl"
    },
    {
      text: "awesome",
       className : "text-4xl text-white md:text-6xl"
    },
    {
      text: "apps",
       className : "text-4xl text-white md:text-6xl"
    },
    {
      text: "with",
       className : "text-4xl text-white md:text-6xl"
    },
    {
      text: "Aceternity.",
      className : "text-4xl text-white md:text-6xl"
    },
  ];
  return (
    <div className="flex items-center justify-center h-[15rem] md:h-[25rem] ">

      <TypewriterEffect words={words} />
      
    </div>
  )
}
