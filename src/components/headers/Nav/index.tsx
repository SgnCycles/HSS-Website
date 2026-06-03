"use client";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navItems } from "../../../data/navMenu";
import NavDesktop from "../NavDesktop";
import ArrowAnimation from "@/components/features/ArrowAnimation";
import Icons from "@/components/features/Icons";

const Nav = () => {
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hamMenu, setHamMenu] = useState<boolean>(false);
  const navRef = useRef<HTMLElement | null>(null);

  const handleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  const toggleHamMenu = () => {
    setHamMenu((prev) => !prev);
  }

  const closeMenu = () => {
    setHamMenu(false)
    setActiveIndex(null)
  }

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (navRef.current && !navRef.current.contains(e.target as Node)) {
        setHamMenu(false);
        setActiveIndex(null);
      }
    };
    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  useEffect(() => {
    if (hamMenu) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "initial"
    }
  }, [hamMenu])

  return (
    <nav
      ref={navRef}
      className="grid grid-cols-[4fr_auto_auto] grid-rows-[auto_auto] auto-rows-max xl:grid-cols-[1fr_3fr_1fr] gap-y-4 gap-5 w-full items-center py-4"
    >
      <Link 
        aria-label="till förstasidan" 
        href="/"
        className="w-14 ml-4 h-auto md:w-17 md:h-auto"
      >
        <Image
          src="/images/Logo/logo.png"
          alt=""
          width={50}
          height={50}
          className="w-auto h-auto transition-all duration-400 hover:rotate-6"
        />
      </Link>
      {/* TODO: placeholder for language switch button */}
      <div className="text-background w-fit bg-accent justify-self-end rounded-lg xl:mr-6 xl:order-3">language switch</div>
      {hamMenu === true ? (
        <button
          aria-label="stäng menyn"
          className="xl:hidden mr-4"
          onClick={toggleHamMenu}
        >
          <Icons name="closeMenu" variant="text-background size-14" />
        </button>
      ) : (
        <button
          aria-label="öppna menyn"
          className="xl:hidden mr-4"
          onClick={toggleHamMenu}
        >
          <Icons name="hamburgerMenu" variant="text-background size-14" />
        </button>
      )}

      {hamMenu && (
        <ul className="xl:hidden z-5 col-span-full h-screen bg-background overscroll-contain overflow-y-auto">
          {navItems.map((item, index) => {
            return (
              <li
                key={index}
                className="relative border-b-[#A0C1DB] border border-t-0 border-r-0 border-l-0"
              >
                <li
                  className={`w-full flex items-center justify-between sm:text-2xl px-6 py-5 hover:bg-[#A0C1DB] font-body font-medium cursor-pointer ${activeIndex === index ? "bg-blue-100" : ""}`} 
                  onClick={() => handleDropdown(index)}
                >
                  {item.title}
                  <ArrowAnimation isOpen={activeIndex === index} />
                </li>
                {activeIndex === index && (
                  <ul className="z-40 flex flex-col mr-5 mt-2 rounded-sm text-primary font-body font-bold">
                    {item.content.map((text, index) => {
                      return (
                        <li
                          key={index}
                          className="flex justify-start items-center pr-8 pl-8 py-4 underline-offset-7 whitespace-nowrap"
                        >
                          <Image
                            src={`${text.mobileIcon}`}
                            alt=""
                            width={25}
                            height={25}
                            className="md:w-7 md:h-7 md:px-1 mr-4"
                          />
                          <Link
                            className="sm:text-xl"
                            href={`${text.href}`}
                            onClick={closeMenu}
                          >
                            {text.text}
                          </Link>
                        </li>
                      )
                    })}
                  </ul>
                )}
              </li>
            );
          })}
        </ul>
      )}
      <NavDesktop closeMenu={closeMenu} />
    </nav>
  );
};

export default Nav;