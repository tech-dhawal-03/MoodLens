"use client";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";
import ColourfulText from "@/components/ui/colourful-text";

export function Typewriter() {
  const words = [
    {
      text: "Transforming",
      className : "text-4xl text-white md:text-6xl"
    },
    {
      text: "texts",
       className : "text-4xl text-white md:text-6xl"
    },
    {
      text: "into",
       className : "text-4xl text-white md:text-6xl"
    },
    {
      text: "actionable",
       className : "text-4xl text-white md:text-6xl"
    },
    {
      text: "Insights",
      className : "text-4xl text-white md:text-6xl",
     
    },
  ];
  return (
    <div className="flex items-center justify-center h-[10rem] md:h-[15rem] ">

      <TypewriterEffect words={words} />
      
    </div>
  )
}
