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
      className="fixed flex justify-between items-center bg-cover w-full h-45.25"
      style={{ backgroundImage: "url('/images/Backgrounds/gradientHero.svg')" }}
    >
      <Link href="/">
        <Image
          src="/images/Logo/logo.png"
          alt=""
          width={214}
          height={203}
          className="absolute w-13.75 h-13.75 md:w-53.5 md:h-50.75 top-5 left-4.5 md:top-9.25 md:left-15"
        />
      </Link>
      {hamMenu === true ? (
        <div>
          <Image
            src="Icons/Kryss.svg"
            alt=""
            width={28}
            height={18}
            className="absolute flex justify-center items-center md:hidden w-7 h-4.5 top-5 right-4.5"
            onClick={toggleHammenu}
          />
        </div>
      ) : (
        <div>
          <Image
            src="Icons/Hamburgare-meny.svg"
            alt=""
            width={28}
            height={18}
            className="absolute flex justify-center items-center md:hidden w-7 h-4.5 top-5 right-4.5"
            onClick={toggleHammenu}
          />
        </div>
      )}
      {hamMenu && (
        <div className="md:hidden flex flex-col absolute w-full h-screen left-0 top-16.75 ">
          {items.map((item, index) => {
            return (
              <div
                key={index}
                className="relative border-b-[#A0C1DB] border border-t-0 border-r-0 border-l-0"
              >
                <button
                  className="flex justify-between w-full px-6 py-5 hover:bg-[#A0C1DB] items-center font-body font-medium cursor-pointer"
                  onClick={() => handelDropdown(index)}
                >
                  {item.title}
                  <Image
                    src="/Icons/nav-arrow.svg"
                    alt=""
                    width={24}
                    height={24}
                    className={`${activeIndex === index ? "rotate-180" : ""}`}
                  />
                </button>

                {activeIndex === index && (
                  <div className="mr-5 mt-2 flex flex-col rounded-sm z-40 text-background font-body font-bold ">
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
                              alt=""
                              width={25}
                              height={25}
                              className="md:w-7 md:h-7 md:px-1"
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
      <div className="hidden absolute top-9.25 left-162 font-body text-background md:gap[77px] md:flex md:justify-evenly md:w-216.5 md:h-13">
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
                  alt=""
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
                          className="md:w-7 md:h-7 md:px-1"
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
