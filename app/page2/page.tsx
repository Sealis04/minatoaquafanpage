'use client'
import { MutableRefObject, useEffect, useRef, useState } from "react";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { CustomEase, ScrollTrigger } from "gsap/all";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CustomEase);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const labelRef = useRef<HTMLDivElement | null>(null);
  const reanimateBtn = useRef<HTMLButtonElement | null>(null);
  const bgRef = useRef<HTMLDivElement | null>(null);
  const labelItselfRef = useRef<HTMLDivElement | null>(null);
  const firstCirc = useRef<HTMLDivElement | null>(null); // Added firstCirc ref
  useGSAP((context, contextSafe) => {
    const tl = gsap.timeline();
    tl.to(labelItselfRef.current, {
      opacity: 1,
    })
      .to(labelItselfRef.current, {
        y: -10
      }, '<75%')

    gsap.to(firstCirc.current, {
      width:'100vw',
      rotate:45,
    })
  },
    { scope: boxRef.current as unknown as HTMLElement }
  );

  return (
    <div className={'h-[100vh] flex flex-col justify-center bg-white'}>
      <div ref={boxRef} className={"h-[50vh] w-[100vw] bg-gray-500 overflow-hidden"}>
          <div ref={firstCirc} className="w-[10px] h-[10px] bg-red-500"/> {/* Added firstCirc ref */}
        <button ref={reanimateBtn} className="bottom-0 absolute">
        </button>
       </div>
    </div>
  );
}