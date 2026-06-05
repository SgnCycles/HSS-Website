"use client";
import { faqData } from "@/data/faq";
import Image from "next/image";
import { useState, useRef, useEffect } from "react";

export default function FaqCard() {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const dropDown = useRef<HTMLDivElement | null>(null);

  const handelDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  useEffect(() => {
    let handlar = (e: MouseEvent) => {
      if (dropDown.current && !dropDown.current.contains(e.target as Node)) {
        setActiveIndex(null);
       
      }
    };
    document.addEventListener("mousedown", handlar);
    return () => document.removeEventListener("mousedown", handlar);
  }, []);

  return (
    <section className="flex flex-col gap-6" ref={dropDown}>
      {faqData.map((item, index) => {
        return (
          <div
            className="bg-[#FFFAEC] cursor-pointer card shadow-xl shadow-blue-100/50 "
            key={index}
            onClick={() => handelDropdown(index)}
          >
            <button className="flex justify-between w-full items-center">
              <h3 className="heading-3 text-left">{item.title}</h3>
              <Image src="/Icons/nav-arrow.svg" alt="" width={24} height={24} />
            </button>
             {activeIndex === index && (
              <div>
                <p className="paragraph">{item.content}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
