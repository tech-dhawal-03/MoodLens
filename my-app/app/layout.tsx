
import type { Metadata } from "next";
import { Geist, Geist_Mono} from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// const heading = Merriweather({
//   weight : "300",
//   style : "normal",
//   subsets : ["latin"]

// })

export const metadata: Metadata = {
  title: "MoodLens",
  description: "A lens into people emotions",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

 {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-black overflow-x-hidden`}
      >
        {children}
 
      </body>
    </html>
  );


  
}
