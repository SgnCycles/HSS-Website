"use client";

import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import Border from "../borderComponents/Border";
import BorderBeneath from "../borderComponents/BorderBeneath";
import { ColorType } from "@/types/common.types";

gsap.registerPlugin(ScrollTrigger);

export default function BorderTwoUp({
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
      y: 25,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current, 
        start: "top bottom",           
        end: "bottom top",             
        scrub: 1,                      
      },
    });
  }, { scope: containerRef })

  return (
    <div ref={containerRef} className="relative h-auto pt-20 overflow-hidden">
      <Border variant={foreground} />
      <div ref={backgroundRef} className="pt-20 overflow-hidden">
        <BorderBeneath variantBackground={background} />
      </div>
    </div>
  );
}
