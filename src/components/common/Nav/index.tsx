"use client";
import { Link } from "@/i18n/routing";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { navItems } from "@/data/navMenu";
import LanguageSwitcher from "@/components/LanguageButton";

const Nav = () => {
  
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hamMenu, setHamMenu] = useState<boolean>(false);
  const navRef = useRef<HTMLElement | null>(null);

  const handleDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleHamMenu = () => {
    setHamMenu((prev) => !prev);
  };

  const closeMenu = () => {
    setHamMenu(false);
    setActiveIndex(null);
  };

  useEffect(() => {
    let handler = (e: MouseEvent) => {
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
      className="z-50 w-full h-45 flex justify-center items-center"
    >
      <Link href="/">
        <Image
          src="/images/Logo/logo.png"
          alt=""
          width={214}
          height={203}
          className="absolute w-13 h-13 md:w-18 md:h-18 top-4 left-4 md:top-9 md:left-15"
        />
      </Link>
      <LanguageSwitcher />
      {hamMenu === true ? (
        <button
          className="absolute xl:hidden flex justify-center items-center w-7 h-4 top-9 right-4"
          onClick={toggleHamMenu}
        >
          <Image src="Icons/Kryss.svg" alt="" width={28} height={28} />
        </button>
      ) : (
        <button
          className="absolute flex justify-center items-center xl:hidden w-7 h-4 top-9 right-4"
          onClick={toggleHamMenu}
        >
          <Image
            src="Icons/Hamburgare-meny.svg"
            alt=""
            width={28}
            height={28}
          />
        </button>
      )}

      {hamMenu && (
        <div className="xl:hidden flex flex-col absolute w-full h-screen bg-background left-0 top-20 sm:top-30 overscroll-contain overflow-y-auto">
          {navItems.map((item, index) => {
            return (
              <ul
                key={index}
                className="relative border-b-[#A0C1DB] border border-t-0 border-r-0 border-l-0"
              >
                <li
                  className={`w-full flex items-center justify-between sm:text-2xl px-6 py-5 hover:bg-[#A0C1DB] font-body font-medium cursor-pointer ${activeIndex === index ? "bg-blue-100" : ""}`} 
                  onClick={() => handleDropdown(index)}
                >
                  {item.title}
                  <Image
                    src="/Icons/nav-arrow.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={`${activeIndex === index ? "rotate-180" : ""}`}
                  />
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
                      );
                    })}
                  </ul>
                )}
              </ul>
            );
            
          })}
        </div>
      )}
      <div className="hidden xl:flex top-9 font-body text-background md:gap[77px] md:justify-evenly md:w-216 md:h-13 xl:text-lg">
        {navItems.map((item, index) => {
          return (
            <ul key={index} className="relative">
              <li
                className="flex justify-center items-center font-medium cursor-pointer"
                onClick={() => handleDropdown(index)}
              >
                {item.title}
                <Image
                  src="/Icons/nav-arrow.svg"
                  alt=""
                  width={24}
                  height={24}
                  className={`${activeIndex === index ? "translate-y-0.5" : ""}`}
                />
              </li>
              {activeIndex === index && (
                <ul className="absolute flex flex-col left-0 mt-2 gap-1 bg-primary rounded-sm z-40 text-background font-body font-bold">
                  {item.content.map((text, index) => {
                    return (
                      <li
                        key={index}
                        className="flex justify-start items-center px-5 py-5 pr-10 underline-offset-7 underline decoration-[#A0C1DB] decoration-1 whitespace-nowrap mr-3"
                        onClick={closeMenu}
                      >
                        <Image
                          src={`${text.icon}`}
                          alt="icon"
                          width={30}
                          height={30}
                          className="md:h-7 md:mr-4"
                        ></Image>
                        <Link href={`${text.href}`}>{text.text}</Link>

                      </li>
                    );
                  })}

                </ul>
              )}
            </ul>
          );
        })}
      </div>
    </nav>
  );
};

export default Nav;