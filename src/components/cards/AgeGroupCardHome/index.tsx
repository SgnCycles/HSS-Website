"use client";
import { ageGroupCardContent } from "@/data/ageGroupCardContent";
import Image from "next/image";
import useIsMobile from "@/hooks/useGetMobile";

const AgeGroupCardHome = () => {
  const isMobile = useIsMobile();

  return (
    <article className="grid place-items-center md:pt-6 pb-6">
      <div className="w-[90%] sm:w-[90%] lg:w-[70%] xl:w-[60%]">
        <div className="flex justify-center sm:justify-start pt-6 pb-4">
          <Image
            src={`/Icons/anchor-icon.svg`}
            height={25}
            width={25}
            alt=""
            className="pb-2"
          />
          <h2 className="text-blue-900 font-heading text-[30px] md:text-[40px] font-extrabold pl-2 md:text-5xl">
            Åldersgrupper
          </h2>
        </div>
        <div className="sm:flex pb-6 sm:justify-between">
          <p className="sm:w-[70%] text-base text-center sm:text-left md:text-xl">
            Oavsett ålder finns det en plats för dig i HSS.
            <br />
            Varje avdelning har sin egen karaktär och sina egna äventyr.
          </p>
        </div>
        <ul className="flex flex-col h-auto justify-center items-center gap-6 pb-6">
          {ageGroupCardContent &&
            ageGroupCardContent.map((card, index) => (
              <li
                key={index}
                className={`flex flex-col justify-between w-full h-full md:min-h-40 border ${card.colourSchemeBorder} pt-2 md:pt-4 rounded-tl-sm rounded-tr-sm rounded-bl-xs rounded-br-xs overflow-hidden`}
              >
                <article className="flex">
                  <div className="flex justify-center items-center w-[30%]">
                    <Image
                      src={`/images/Agegroup/${card.icon}`}
                      height={isMobile ? 50 : 90}
                      width={isMobile ? 50 : 90}
                      alt={`${card.title} emblem`}
                    ></Image>
                  </div>
                  <div className="flex flex-col w-full items-start pb-4 md:pb-0">
                    <div className="flex flex-col md:flex-row">
                      <h3 className="font-semibold font-heading text-lg md:text-2xl text-blue-900 tracking-wide pb-2 pl-4 md:pb-0 md:pl-0">
                        {card.title}
                      </h3>
                      <p
                        className={`h-7 ${card.colourSchemeSecondary} font-normal font-body pt-1 md:pt-1 pb-1 md:pb-1 pl-4 pr-4 text-sm rounded-md ml-2`}
                      >
                        {card.ageGroup}
                        <span className="font-body font-bold text-sm pl-2">
                          {card.ageRange}
                        </span>
                      </p>
                    </div>
                    <p className="sr-only md:not-sr-only font-body pr-4 text-md md:pt-2">
                      {card.subtitle}
                    </p>
                  </div>
                </article>
                <div
                  className={`flex justify-center sm:justify-between ${card.colourSchemePrimary} font-body text-white font-bold`}
                >
                  <p
                    className={`place-content-center text-left pl-4 h-8 text-sm`}
                  >
                    {card.meetings}
                  </p>
                </div>
              </li>
            ))}
        </ul>
      </div>
    </article>
  );
};

export default AgeGroupCardHome;