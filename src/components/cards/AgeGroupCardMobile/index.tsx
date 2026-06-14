"use client";
import { ageGroupCardContent } from "@/data/ageGroupCardContent";
import Image from "next/image";
import { Link } from "@/i18n/routing";
import { useState } from "react";

const AgeGroupPageMobile = () => {

  const [isOpen, setIsOpen] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <>
      {ageGroupCardContent &&
        ageGroupCardContent.map((card, index) => (
          <li
            key={index}
            className="flex flex-col justify-between md:min-h-30 bg-background"
          >
            <div
              className={`flex justify-between ${card.colourSchemePrimary} font-body text-white font-bold cursor-pointer`}
              onClick={() => handleClick(index)}
            >
              <p className="place-content-center text-left pl-4 h-8">
                {card.meetings}
              </p>
              <button
                className="flex justify-between items-center pr-4 cursor-pointer"
              >
                <Image
                  src="/Icons/caret_down_white.svg"
                  height={15}
                  width={15}
                  alt="Expand the age card"
                  className={`h-3 w-auto sm:h-4 transition-transform duration-300 ${isOpen === index ? "rotate-180" : "rotate-0"}`}
                />
              </button>
            </div>
            <div
              className={`flex w-full justify-between items-start p-3 border ${isOpen === index ? card.colourSchemeBorderTertiary : card.colourSchemeBorderSecondary} ${isOpen === index ? card.colourSchemeSecondary : ""}`}
            >
              <div className="flex flex-col gap-2 md:flex-row">
                <h3 className="heading-3">{card.title}</h3>
                <p
                  className={`h-7 ${isOpen === index ? card.colourSchemeTertiary : card.colourSchemeSecondary} font-normal pt-1 md:pt-1 pb-1 pl-4 pr-4 text-sm rounded-md md:ml-2`}
                >
                  {card.ageGroup}
                  <span className="font-bold text-sm pl-2">
                    {card.ageRange}
                  </span>
                </p>
              </div>
              <div className="min-w-20 min-h-20 grid place-items-center bg-white rounded-full">
                <Image
                  src={`/images/Agegroup/${card.icon}`}
                  height={60}
                  width={60}
                  alt={`${card.title} emblem`}
                  className="w-15 h-auto"
                />
              </div>
              <p className="sr-only md:not-sr-only paragraph-light">
                {card.subtitle}
              </p>
            </div>
            {isOpen === index && (
              <div>
                <div
                  className={`${card.colourSchemeSecondary} card rounded-none`}
                >
                  <div className="paragraph-light cards-column">
                    <p>{card.subtitle}</p>
                    <p>{card.info}</p>
                    <p className="font-bold">{card.price}</p>
                  </div>
                </div>
                <div>
                  <Image
                    src={`/images/Body/${card.image}`}
                    height={1200}
                    width={800}
                    alt={card.title}
                    className="w-full h-auto"
                  />
                </div>
                <div className={`p-5 ${card.colourSchemeSecondary}`}>
                  <button
                    className={`font-bold ${card.colourSchemeAccent} text-background text-center px-16 w-full transition-all duration-300 border-2 ${card.colourSchemeAccentSecondary} rounded-sm min-h-15 ${card.colourSchemeActive}`}
                  >
                    <Link
                      href="https://www.scoutnet.se/register/in/group/764"
                      target="_blank"
                    >
                      Ansök om plats
                    </Link>
                  </button>
                </div>
              </div>
            )}
          </li>
        ))}
    </>
  );
};

export default AgeGroupPageMobile;