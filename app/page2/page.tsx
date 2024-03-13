
'use client'
import { MutableRefObject, useEffect, useRef, useState } from "react";
import {useGSAP} from '@gsap/react'
import gsap from "gsap";
import { CustomEase, ScrollTrigger } from "gsap/all";

export default function Home() {
  gsap.registerPlugin(ScrollTrigger);
  gsap.registerPlugin(CustomEase);
  const mainRef = useRef<HTMLDivElement | null>(null);
  const scrollRef = useRef<HTMLDivElement | null>(null);
  const boxRef = useRef<HTMLDivElement | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const redBoxRef = useRef<HTMLDivElement | null>(null);
  const firstParRef = useRef<HTMLDivElement | null>(null);
  const secondParRef = useRef<HTMLDivElement | null>(null);
  const boxRef2 = useRef<HTMLDivElement | null>(null);
  // const observer = new IntersectionObserver((entries)=>{
  //  entries.forEach(entry=>{
  //     if(entry.isIntersecting){
  //      Array.from(entry.target.children).forEach((child:Element)=>{
  //       child.classList.add('animate-sampleAni');
  //       child.classList.remove('opacity-0');
  //      })
  //      return;
  //     }
  //     Array.from(entry.target.children).forEach((child:Element)=>{
  //       // child.classList.remove('animate-sampleAni')
  //       child.classList.add('opacity-0');
  //      })
  //  })
  // },{threshold:0.25})
  useGSAP(
    () => {
      const clientHeight = containerRef.current?.clientHeight;
      const tlsc1 = gsap.timeline({
        scrollTrigger:{
          trigger:containerRef.current,
          toggleActions: 'play play none reverse',
          start: ()=>'top top',
          end: ()=>'+=10% top',
          pin:true,
          pinnedContainer:containerRef.current,
          markers:{
            startColor:'yellow',
            endColor:'yellow'
          },
          onEnter:()=>{
            tlsc1.timeScale(1);
          },
          onLeaveBack:()=>{
            tlsc1.timeScale(3);
            tlsc2.progress(1);
            tlsc1.reverse()
          }
        }
      })
      tlsc1.to(boxRef.current, { scaleX: 0.8 })
      .to(boxRef.current, { scale: 0.85 })
      const tlsc2 = gsap.timeline({
        scrollTrigger:{
          trigger:containerRef.current,
          toggleActions: 'play play none reverse',
          start: ()=>'top top',
          end: ()=>'+=10% top',
          immediateRender:false,
          pin:true,
          pinnedContainer:containerRef.current,
          markers:{
            startColor:'green',
            endColor:'green'
          },
          onEnter:()=>{
            tlsc1.progress(1);
            tlsc2.timeScale(1);
            tlsc2.to(boxRef.current, {
              scale: 1,
              opacity: 0.5,
            })
            .to(boxRef2.current, { opacity: 0.75 },'<')
            .to(".whiteBox", { y: 0 },'<')
            .to(firstParRef.current, { opacity: 1 },'<25%')
            .to(firstParRef.current, { y:-10 },'<75%')
            .to(secondParRef.current, { opacity: 1 },'<25%')
            .to(secondParRef.current, { y:-10 },'<75%')
          },
          onLeaveBack:()=>{
            tlsc2.timeScale(2);
            tlsc2.to(boxRef2.current,{opacity:0},'<')
            tlsc2.to(boxRef.current,{scale:0.85,opacity:1},'<75%')
          }
        },
      })
      gsap.to(boxRef.current,{
        scrollTrigger:{
          trigger:containerRef.current,
          toggleActions: 'play play none reverse',
          immediateRender:false,
          pin:true,
          pinnedContainer:containerRef.current,
          start: ()=>'top top',
          end: ()=>'+=10% top',
          markers:{
            startColor:'red',
            endColor:'red'
          }
        },
        opacity:0,
        backgroundColor:'white',
      })
    },
    { scope: containerRef.current as unknown as HTMLElement }
  );
  return (
    <div>
        <div ref={containerRef as MutableRefObject<HTMLDivElement>} className="h-[100vh] max-h-[100vh] mt-5">
          <div ref={boxRef} className="bg-gray-500 h-full scale-75">
            <div ref={boxRef2} className="h-full opacity-0 bg-green-500  flex flex-col gap-4">
              <div className="bg-white whiteBox h-[40%] -translate-y-[40vh]"/>
              <div className="h-10 overflow-hidden">
                <div className="h-6"/>
                  <div ref={firstParRef} className="opacity-0 text-xl font-bold text-center">
                    Some Random Text Here Appearing first
                  </div>
              </div>
              <div className="h-10 overflow-hidden">
                <div className="h-6"/>
                  <div ref={secondParRef} className="opacity-0 text-center">
                    Some Random Second Here Appearing first
                  </div>
              </div>
            </div>
          </div>
        </div>
    </div>
  );
}

function Card(){
  return(
    <div className="bg-white w-[25%] h-full rounded-md relative opacity-0">

    </div>
  )
}
