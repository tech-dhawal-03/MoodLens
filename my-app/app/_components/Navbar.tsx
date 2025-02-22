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






function Navbar() {
   

  return (
    <nav className='sticky ml-4 w-[95%] my-5 md:ml-8 gap-2 p-2 md:p-3 flex justify-between rounded-xl bg-white '>
        <div>
            <Image
             src="/assets/moodLens_logo.png"
             alt="logo.png"
             width={90}
             height={90} 
             priority
            
            />

        </div>

        <div className='flex p-5 gap-10'>
          </div>

  

        </nav>




       

        
        
        




        

    
  )
}



export default Navbar