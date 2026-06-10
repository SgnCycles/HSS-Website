"use client";
import { useEffect, useRef, useState } from "react";
import { navItems } from "../../../data/navMenu";
import ArrowAnimation from "@/components/features/ArrowAnimation";
import DropdownNav from "../DropdownNav";
import { useTranslations } from "next-intl";

export type NavDesktopProps = {
  closeMenu: () => void,
}

export default function NavDesktop({ closeMenu }: NavDesktopProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const navRef = useRef<HTMLDivElement | null>(null);

  const t = useTranslations("nav")
  
  const handleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  }

  const closeDropdown = () => {
    setActiveIndex(null);
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setActiveIndex(null);
      }
    }
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <div 
      ref={navRef} 
      className="hidden xl:flex font-body text-background justify-between xl:text-lg w-full"
    >
      {navItems.map((item, index) => {
        return (
          <ul key={index} className="relative">
            <li
              className="group grid grid-cols-[auto_auto] text-bold gap-2 font-medium cursor-pointer"
              onClick={() => handleDropdown(index)}
            >
               {t(item.titleKey)}
              <ArrowAnimation isOpen={activeIndex === index} />
            </li>
            <DropdownNav               
              isOpen={activeIndex === index} 
              content={item.content} 
              closeDropdown={closeDropdown}
              closeMenu={closeMenu} 
            />
          </ul>
        )
      })}
    </div>
  )
}
