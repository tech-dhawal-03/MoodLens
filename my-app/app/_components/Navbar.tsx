"use client"
import React from 'react'
import Image from 'next/image'
import { DM_Sans } from 'next/font/google'
import { cn } from "@/lib/utils"
import {
    NavigationMenu,
    NavigationMenuContent,
    NavigationMenuIndicator,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
    NavigationMenuTrigger,
    NavigationMenuViewport,
    navigationMenuTriggerStyle
  } from "@/components/ui/navigation-menu"
import Link from 'next/link'
  


// fonts should be called above main function
const navFonts = DM_Sans({
    subsets : ["latin"]
})


const components: { title: string; href: string; description: string }[] = [
    {
      title: "Alert Dialog",
      href: "/docs/primitives/alert-dialog",
      description:
        "A modal dialog that interrupts the user with important content and expects a response.",
    },
    {
      title: "Hover Card",
      href: "/docs/primitives/hover-card",
      description:
        "For sighted users to preview content available behind a link.",
    },
    {
      title: "Progress",
      href: "/docs/primitives/progress",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar.",
    },
    {
      title: "Scroll-area",
      href: "/docs/primitives/scroll-area",
      description: "Visually or semantically separates content.",
    },
    {
      title: "Tabs",
      href: "/docs/primitives/tabs",
      description:
        "A set of layered sections of content—known as tab panels—that are displayed one at a time.",
    },
    {
      title: "Tooltip",
      href: "/docs/primitives/tooltip",
      description:
        "A popup that displays information related to an element when the element receives keyboard focus or the mouse hovers over it.",
    },
  ]



function Navbar() {
   

  return (
    <div className='sticky ml-4 w-[95%] my-5 md:ml-8 gap-2 p-5 flex justify-between rounded-xl bg-white '>
        <div>
            <Image
             src="/assets/moodLens_logo.png"
             alt="logo.png"
             width={120}
             height={100} 
            />

        </div>

        <div className='flex p-5 gap-10'>

  

        </div>




       

        
        
        




        

    </div>
  )
}



export default Navbar