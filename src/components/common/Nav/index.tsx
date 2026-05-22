"use client";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

interface MenuItems {
  title: string;
  content: { text: string; href: string; icon: string; mobileIcon: string }[];
}

interface NavProps {
  items: MenuItems[];
}

export default function Nav({ items }: NavProps) {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hamMenu, setHammenu] = useState<boolean | null>(null);

  const handelDropdown = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const toggleHammenu = () => {
    setHammenu((prev) => !prev);
  };

  return (
    <div
      className="fixed flex justify-between items-center bg-cover w-full h-[181px]"
      style={{ backgroundImage: "url('/images/Backgrounds/gradientHero.svg')" }}
    >
      <Link href="/">
        <Image
          src="/images/Logo/logo.png"
          alt="HSS Scout logo"
          width={214}
          height={203}
          className="absolute w-[55px] h-[55px] md:w-[214px] md:h-[203px] top-[20px] left-[18px] md:top-[37px] md:left-[60px]"
        />
      </Link>
      {hamMenu === true ? (
        <div>
          <Image
            src="Icons/Kryss.svg"
            alt="ham-menu"
            width={28}
            height={18}
            className="absolute flex justify-center items-center md:hidden w-[28px] h-[18px] top-[20px] right-[18px]"
            onClick={toggleHammenu}
          />
        </div>
      ) : (
        <div>
          <Image
            src="Icons/Hamburgare-meny.svg"
            alt="ham-menu"
            width={28}
            height={18}
            className="absolute flex justify-center items-center md:hidden w-[28px] h-[18px] top-[20px] right-[18px]"
            onClick={toggleHammenu}
          />
        </div>
      )}
      {hamMenu && (
        <div className="md:hidden flex flex-col absolute w-full h-screen left-0 top-[67px] ">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="relative border-b-[#A0C1DB] border-1 border-t-0 border-r-0 border-l-0"
              >
                <button
                  className="flex justify-between w-full px-6 py-5 hover:bg-[#A0C1DB] items-center font-body font-medium cursor-pointer"
                  onClick={() => handelDropdown(index)}
                >
                  {item.title}
                  <Image
                    src="/Icons/nav-arrow.svg"
                    alt="menu-icon"
                    width={24}
                    height={24}
                    className={`${activeIndex === index ? "rotate-180" : ""}`}
                  />
                </button>

                {activeIndex === index && (
                  <div className="mr-5 mt-2  text-primary flex flex-col rounded-sm z-40 text-background font-body font-bold ">
                    {item.content.map((text, index) => {
                      return (
                        <Link
                          key={index}
                          className="flex justify-start items-center pr-8 pl-8 py-4 underline-offset-7 whitespace-nowrap"
                          href={`${text.href}`}
                        >
                          <span className="mr-2">
                            <Image
                              src={`${text.mobileIcon}`}
                              alt="icon"
                              width={25}
                              height={25}
                              className="md:w-[28px] md:h-[28px] md:px-1"
                            />
                          </span>
                          {text.text}
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
      <div className="hidden absolute top-[37px] left-[648px] font-body text-background md:gap[77px] md:flex md:justify-evenly md:w-[866px] md:h-[52px]">
        {items.map((item, index) => {
          return (
            <div key={index} className="relative">
              <button
                className="flex justify-center items-center font-medium cursor-pointer"
                onClick={() => handelDropdown(index)}
              >
                {item.title}
                <Image
                  src="/Icons/nav-arrow.svg"
                  alt="menu-icon"
                  width={24}
                  height={24}
                  className={`${activeIndex === index ? "translate-y-0.5" : ""}`}
                />
              </button>

              {activeIndex === index && (
                <div className="absolute left-0 mt-2 gap-1  bg-primary flex flex-col rounded-sm z-40 text-background font-body font-bold ">
                  {item.content.map((text, index) => {
                    return (
                      <Link
                        key={index}
                        className="flex justify-start items-center pr-12 pl-8 py-4 underline-offset-7 underline decoration-[#A0C1DB] decoration-1 whitespace-nowrap"
                        href={`${text.href}`}
                      >
                        <Image
                          src={`${text.icon}`}
                          alt="icon"
                          width={30}
                          height={30}
                          className="md:w-[28px] md:h-[28px] md:px-1"
                        ></Image>
                        {text.text}
                      </Link>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
