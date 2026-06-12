"use client";
import { faqData } from "@/data/faq";
import { useTranslations } from "next-intl";
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

  const t = useTranslations('vanliga-fragor')

  return (
    <section className="flex flex-col gap-6" ref={dropDown}>
      {faqData.map((item, index) => {
        return (
          <div
            className="bg-secondary border border-accent  cursor-pointer card shadow-xl shadow-blue-100/50 "
            key={index}
            onClick={() => handelDropdown(index)}
          >
            <button className="flex justify-between w-full items-center">
              <h3 className="heading-3 text-left">{t(item.titleKey)}</h3>
              <Image src="/Icons/nav-arrow.svg" alt="" width={24} height={24} className={`cursor-pointer transition-transform duration-300 ${activeIndex === index ? "rotate-180" : "rotate-0"}`} />
            </button>
             {activeIndex === index && (
              <div>
                <p className="paragraph">{t(item.contentKey)}</p>
              </div>
            )}
          </div>
        );
      })}
    </section>
  );
}
