"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import { ColorType } from "@/types/common.types";
import BorderDown from "../borderComponents/BorderDown";
import BorderDownBeneath from "../borderComponents/BorderDownBeneath";

gsap.registerPlugin(ScrollTrigger);

export default function BorderTwoDown({
  foreground = "text-primary",
  background = "text-blue-200",
}: ColorType) {
  
  const containerRef = useRef<HTMLDivElement>(null);
  const backgroundRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    const target = backgroundRef.current?.querySelector("svg");

    if (!target) return;

    gsap.to(target, {
      x: 0, 
      y: -45,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current, 
        start: "top bottom",           
        end: "bottom top",             
        scrub: 2,                      
      },
    });
  }, { scope: containerRef })

  return (
    <div ref={containerRef} aria-hidden className="relative z-2 h-auto overflow-hidden">
      <BorderDown variant={foreground} />
      <div ref={backgroundRef} className="z-1 pb-10 xl:pb-10">
        <BorderDownBeneath variantBackground={background} />
      </div>
    </div>
  );
}
