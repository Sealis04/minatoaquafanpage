'use client'
import { use, useRef, forwardRef, ReactNode, ForwardedRef } from "react";
import { useGSAP } from '@gsap/react'
import gsap from "gsap";
import { CustomEase, MotionPathPlugin, ScrollTrigger } from "gsap/all";
import bg from "../../public/bgimages/Twitter.jpg"
import newbg from "../../public/bgimages/Manga Girl.jpg"
import Image from "next/image";

interface Props {
  children?: ReactNode;
}

export default forwardRef<HTMLDivElement,Props>(function SectionTwo(props,ref) {
const circle1 = useRef<SVGCircleElement | null>(null);
const circle2 = useRef<SVGCircleElement | null>(null);
const circle3 = useRef<SVGCircleElement | null>(null);
const mainDiv = useRef<HTMLDivElement | null>(null);
useGSAP(()=>{
  const tl = gsap.timeline({
    scrollTrigger:{
      trigger:mainDiv.current,
      start:'top top',
      end:'bottom',
      pin:true,
      markers:{
        endColor:'black',
        startColor:'black',
      },
      scrub:true,
    }
  })
  tl.to({},{duration:5})
  tl.addLabel('start');
  tl.fromTo(circle1.current,{
    transformOrigin:'50% 50%',
    rotate:-160,
    immediateRender:true,
  },{
    duration:20,
    rotate:0,
  },'start')
  tl.fromTo(circle2.current,{
    transformOrigin:'50% 50%',
    rotate:80,
    immediateRender:true,
  },{
    duration:20,
    rotate:0,
  },'start')
  tl.fromTo(circle3.current,{
    transformOrigin:'50% 50%',
    rotate:-135,
    immediateRender:true,
  },{
    duration:15,
    rotate:0,
  },'start')
  tl.to({},{duration:5});
},{})
  return (
    <div
      ref={(node) => {
        mainDiv.current = node;
        if (ref) {
          if (typeof ref === "function") {
            ref(node);
          } else {
            ref.current = node;
          }
        }
      }}
      className="h-[100vh] flex overflow-hidden object-contain z-0 relative"
    >
      <svg
        width="50%"
        height="100%"
        viewBox="50 -400 1 1750"
        className="p-10"
      >
        <defs>
          <pattern
            id="twobg"
            patternUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <image
              href={newbg.src}
              x="0"
              y="-100"
              width={newbg.width}
              height={newbg.height}
              className="object-contain scale-[2.5]"
            />
          </pattern>
          <pattern
            id="twobg2"
            patternUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <image
              href={newbg.src}
              x="-160"
              y="-260"
              width={newbg.width}
              height={newbg.height}
              className="object-contain scale-[2.5]"
            />
          </pattern>
          <pattern
            id="twobg3"
            patternUnits="objectBoundingBox"
            width="1"
            height="1"
          >
            <image
              href={newbg.src}
              x="-240"
              y="-340"
              width={newbg.width}
              height={newbg.height}
              className="object-contain scale-[2.5]"
            />
          </pattern>
        </defs>
        <circle ref={circle1} fill="url(#twobg)" r="800" cx="30" cy="500" />
        <circle ref={circle2} fill="url(#twobg2)" r="400" cx="30" cy="500" />
        <circle ref={circle3} fill="url(#twobg3)" r="200" cx="30" cy="500" />
      </svg>
      <div className="w-[50%] flex justify-center">
        Some content here idk I haven{`'`}t thought about it yet
      </div>
    </div>
  );
})