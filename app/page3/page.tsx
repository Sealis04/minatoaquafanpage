
/**
 * @file This file contains the code for the page component in the aniweb app.
 * @module page2/page.tsx
 */

'use client'

import { use, useRef } from "react";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { CustomEase, MotionPathPlugin, ScrollTrigger } from "gsap/all";
import bg from "../../public/bgimages/Twitter.jpg"
import bg2 from "../../public/bgimages/Aqua_Logo.webp"
import bg3 from "../../public/bgimages/de8r6o4-1285a524-7605-459c-aa11-d5a3bf96862d.png"
import Image from "next/image";
import { url } from "inspector";
import SectionTwo from "../_components/sectionTwo";

/**
 * The Home component.
 * Renders the page content and animations.
 */
export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CustomEase);
  gsap.registerPlugin(MotionPathPlugin);

  const refArr = useRef<SVGSVGElement | null>(null);
  const boxRef = useRef<SVGPathElement | null>(null);
  const boxRef2 = useRef<SVGPathElement | null>(null);
  const imageRef1 = useRef<SVGImageElement | null>(null);
  const imageRef2 = useRef<SVGImageElement | null>(null);
  const imageRef3 = useRef<SVGImageElement | null>(null);
  const sectionTwo = useRef<HTMLDivElement | null>(null);
  const mainSectionOne = useRef<HTMLDivElement | null>(null);
  const mainSectionTwo = useRef<HTMLDivElement | null>(null);
  useGSAP((context, contextSafe) => {
  },
    { scope: boxRef.current as unknown as HTMLElement }
  );

  return (
    <div className="bg-gradient-to-tl from-blue-300 to-rose-300">
      <div ref={mainSectionOne} className={'h-[100vh] overflow-hidden flex justify-center bg-white z-10 relative'}>
          <svg ref={refArr} width='100%' height='100%' viewBox="300 -200 1500 1500" className="bg-white">
            <defs>
              <pattern id="bg" patternUnits="userSpaceOnUse" width="1920" height="1080">
                <image ref={imageRef1} href={bg.src} x="0" y="0" width={bg.width} height={bg.height}className="object-contain opacity-0 overflow-hidden scale-[1.5]" />
              </pattern>
            </defs>
            {/* prolly better to self draw this. */}
            {/* iris */}
            {/* <path ref={boxRef} fill="rgb(46, 2, 19)" className="stroke-[rgb(46, 2, 19)] scale-[2] translate-x-[15%] translate-y-[10%] path" d="M 123.2 71.8 Z M 141.9 75.4 C 104.9 100.1 105.7 236 130.2 302.2 C 137.2 311.4 288.9 304.9 294.9 300.5 C 327.9 238.6 323.3 89.4 295.3 77.5M 140 78.5 C 109.9 108.2 104.9 235.4 130 302.3 C 137.2 311.4 288.9 304.9 294.9 300.5 C 329.8 241.5 333.8 132.9 297.2 82.5 C 274.4 63.3 162.4 62.4 139.8 78.8"/> */}
             {/* eye lower highlight */}
            {/* <path ref={boxRef} fill="rgb(128, 47, 77)" className="stroke-[rgb(46, 2, 19)] scale-[2] translate-x-[15%] translate-y-[10%] path" d="M 116.7 242.5 C 165.2 190.8 257.9 187.9 316.4 243.6 C 311.2 264.2 305.6 282.6 294.8 300.7 C 268.1 306.3 163.9 309.9 130 302.5 C 123.8 285 119.6 266.3 116.6 242.7 Z"/> */}
            {/* inner... irsi? */}
            {/* <path ref={boxRef} fill="rgb(212, 112, 149)" className="stroke-[rgb(46, 2, 19)] scale-[2] translate-x-[15%] translate-y-[10%] path" d="M 185.9 124.6 C 204.5 112.4 230.4 113.4 249.1 123.6 C 268.9 142.5 269.5 210.3 249.1 241 C 226.4 255.8 202.9 258.9 181 243.9 C 161.2 208.2 167.5 140.6 185.8 124.5 Z"/> */}
            {/* Eye lashes */}
            {/* <path ref={boxRef} fill="rgb(20, 1, 8)" className="stroke-black scale-[2] translate-x-[15%] translate-y-[10%] path z-[10]" d="M 11 133.8 L 14.5 123.4 C 29.7 88.3 82.9 58.1 128.8 52.5 C 200.9 45.6 294.6 53.7 367.1 68.7 C 409.3 89.9 425.5 107.1 442.4 147.7 C 432.3 182.2 419.6 197.2 395.6 214.5 C 413.4 185.6 418.4 167.8 421.2 145.5 C 413.8 115.2 392.2 98.3 367.9 90.9 C 294.6 79.6 194.9 74.4 128.5 79.6 C 90.8 85.7 52.2 96.1 25.4 119.5 Z"/> */}

          </svg>
      </div>
    </div>
  );
}