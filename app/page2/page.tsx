
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
    gsap.set(mainSectionTwo.current,{
      background:`url(${bg3.src})`,
      y:'-150vh',
      opacity:0,
    })
    //first section
    const tl = gsap.timeline();
    tl.fromTo(refArr.current, {
      y:'100vh',
      opacity:0,
    },{
      y:0,
      opacity:1,
      duration:1,
    })
    tl.fromTo(
      boxRef.current,
      {
        immediateRender: true,
        strokeDashoffset: boxRef2.current?.getTotalLength(),
        strokeDasharray: boxRef2.current?.getTotalLength(),
      },
      { strokeDashoffset: 0, duration: 3, ease: "power1.inOut" },
      '>'
    );
    tl.fromTo(boxRef2.current,{
      immediateRender:true,
      strokeDashoffset: boxRef2.current?.getTotalLength(),
      strokeDasharray: boxRef2.current?.getTotalLength(),
    },
    { strokeDashoffset: 0, duration: 3, ease: "none"},'<9%')
    .addLabel('start','<1%')
    tl.fromTo(imageRef1.current,{
      y:-400,
    },{
      y:-350,
      opacity:0.5,
      duration:2,
      ease:'power1.inOut'
    },'start')
    tl.fromTo(imageRef2.current,{
      y:-585,
    },{
      y:-535,
      opacity:0.5,
      duration:2,
      ease:'power1.inOut'
    },'start')
    tl.fromTo(imageRef3.current,{
      y:'-110%',
      opacity:0
    },{
      y:'-100%',
      opacity:0.15,
      duration:2,
      ease:'power1.inOut'
    },'start')
    const tl2 = gsap.timeline({
      scrollTrigger:{
        trigger:mainSectionOne.current,
        start:'top top',
        end:'bottom',
        markers:true,
        scrub:1,
      }
    })
    tl2.addLabel('start')
    tl2.to(imageRef1.current,{
      y:'-200',
      fill:'fowards',
    },'start')
    tl2.to(imageRef2.current,{
      y:'-200',
      fill:'fowards',
    },'start')
    tl2.to(mainSectionTwo.current,{
      y:0,
      opacity:1,
      ease:'power1.inOut'
    },'start')
    //second section

  },
    { scope: boxRef.current as unknown as HTMLElement }
  );

  return (
    <div className="bg-gradient-to-tl from-blue-300 to-rose-300">
      <div ref={mainSectionOne} className={'h-[100vh] overflow-hidden flex justify-center bg-white z-10 relative'}>
          <svg ref={refArr} width='100%' height='100%' viewBox="300 -200 1500 1500" className="bg-gradient-to-tl from-blue-300 to-rose-300">
            <image
            ref={imageRef3}
            href={bg.src}
            x="0"
            y="-50"
            width={bg.width}
            height={bg.height}
            className="scale-[6] -translate-x-[80%] -translate-y-[100%] self-center object-contain opacity-0"
            />
            <defs>
              <pattern id="bg" patternUnits="userSpaceOnUse" width="1920" height="1080">
                <image ref={imageRef1} href={bg.src} x="0" y="0" width={bg.width} height={bg.height}className="object-contain opacity-0 overflow-hidden scale-[1.5]" />
              </pattern>
              <pattern id="bg2" patternUnits="userSpaceOnUse" width="1920" height="1080">
                <image ref={imageRef2} href={bg.src} x="0" y="0" width={bg.width} height={bg.height}className="object-contain opacity-0 overflow-hidden scale-[1.5]" />
              </pattern>
            </defs>
            <path ref={boxRef} fill="url(#bg)" className="stroke-[rgb(246,104,156)] stroke-[10] [stroke-linecap:round] scale-[1.5] translate-x-[15%] translate-y-[10%] path" d="M 0.92 198.84 L 1.44 1.6 L 80.96 119.32 L 160 1.04 L 160 199.88 M 240.56 0 L 240.56 199.88 M 320.08 200.4 L 319.04 0.52 L 442 200.4 L 440.44 0 M 519.96 199.88 L 601.08 1.04 L 681.12 200.4 M 521 119.84 L 680.08 119.84 M 760.76 200.4 L 759.72 0.56 M 676 0.56 L 840.32 0.56 M 840 97.4 A 40 40 90 0 0 1040.84 101.44 A 40 40 90 0 0 840 97.4"/>
            <path ref={boxRef2} fill="url(#bg2)" className="stroke-[rgba(0,185,255,1)] stroke-[10] [stroke-linecap:round] scale-[1.5] translate-x-[18%] translate-y-[35%] path" d="M 1.04 199.48 L 81 0.8 L 159.76 200.32 M -0.16 118.32 L 159.76 119.12 M 240.52 99.56 A 40 40 90 0 0 440.04 100.36 A 40 40 90 0 0 240.52 99.56 M 389.8 161.04 L 422.04 192.88 M 521.16 3.16 L 519.88 124.8 A 40 40 90 0 0 659 124.4 L 660.24 1.2 M 760.32 199.2 L 841.48 -0.76 L 920 200.24 M 760.84 120.16 L 921.04 119.64"/>
          </svg>
      </div>
      <SectionTwo ref={mainSectionTwo}/>
    </div>
  );
}