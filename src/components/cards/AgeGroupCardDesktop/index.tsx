"use client";
import { ageGroupCardContent } from "@/data/ageGroupCardContent";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AgeGroupPageDesktop = () => {

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
            className={`flex flex-col justify-between w-full h-full md:min-h-30 border ${card.colourSchemeBorder} pt-2 md:pt-4 rounded-tl-md rounded-tr-md rounded-bl-xs rounded-br-xs overflow-hidden bg-background`}
          >
            <div className="flex md:pt-5 md:pb-5 md:pr-5">
              <div className="flex justify-center items-center w-[30%]">
                <Image
                  src={`/images/Agegroup/${card.icon}`}
                  height={90}
                  width={90}
                  alt={`${card.title} emblem`}
                  className="w-22.5 h-auto"
                />
              </div>
              <div className="flex flex-col w-full items-start pb-4 md:pb-0">
                <div className="flex flex-col justify-center items-center md:flex-row">
                  <h3 className="heading-3">{card.title}</h3>
                  <p
                    className={`h-7 ${card.colourSchemeSecondary} font-normal text-sm pt-1 md:pt-1 pb-1 md:pb-1 pl-4 pr-4 ml-2 rounded-md`}
                  >
                    {card.ageGroup}
                    <span className="font-bold text-sm pl-2">
                      {card.ageRange}
                    </span>
                  </p>
                </div>
                <p className="sr-only md:not-sr-only paragraph-light">
                  {card.subtitle}
                </p>
              </div>
            </div>
            <div
              className={`flex justify-center sm:justify-between ${card.colourSchemePrimary} text-white font-bold cursor-pointer`}
              onClick={() => handleClick(index)}
            >
              <p className="place-content-center text-left pl-4 h-8">
                {card.meetings}
              </p>
              <button
                className="flex justify-between items-center pr-4 cursor-pointer"              >
                Läs mer
                <Image
                  src="/Icons/caret_down_white.svg"
                  height={15}
                  width={15}
                  alt="Expand the age card"
                  className={`h-3 w-auto ml-2 transition-transform duration-300 ${isOpen === index ? "rotate-180" : "rotate-0"}`}
                />
              </button>
            </div>
            {isOpen === index && (
              <div
                className={`${card.colourSchemeSecondary} card rounded-none`}
              >
                <div className="agegroup-card-expanded">
                  <div className="agegroup-card-image w-64 aspect-square overflow-hidden rounded-md mr-6">
                    <Image
                      src={`/images/Body/${card.image}`}
                      height={800}
                      width={400}
                      alt={card.title}
                      className="w-full h-full object-cover block"
                    />
                  </div>
                  <div className="agegroup-card-block-one flex flex-col justify-between paragraph-light mb-0">
                    <div className="flex flex-col">
                      <h3 className="heading-3"> {card.title}</h3>
                      <p
                        className={`h-7 ${card.colourSchemeTertiary} font-normal pt-1 md:pt-1 pb-1 md:pb-1 pl-4 pr-4 text-sm rounded-md w-fit`}
                      >
                        {card.ageGroup}
                        <span className="font-body font-bold text-sm pl-2">
                          {card.ageRange}
                        </span>
                      </p>
                    </div>
                    <p>{card.info_block_one}</p>
                    <p>{card.info_block_two}</p>
                  </div>
                  <div className="agegroup-card-block-two paragraph-light cards-column mt-6">
                    {card.info_block_three && <p>{card.info_block_three}</p>}
                    {card.info_block_four && <p>{card.info_block_four}</p>}
                    {card.info_block_five && <p>{card.info_block_five}</p>}
                    {card.info_block_six && <p>{card.info_block_six}</p>}
                    <p className="font-bold">{card.price}</p>
                  </div>
                  <div
                    className={`agegroup-card-buttons flex justify-end gap-4 h-fit`}
                  >
                    <button
                      className={`font-bold ${card.colourSchemeAccentSurface} ${card.colourSchemeHover} hover:border-2 hover:border-accent text-background text-center px-16 transition-all duration-300 border-2 ${card.colourSchemeAccentSecondary} rounded-sm min-h-15 cursor-pointer`}
                      onClick={() => handleClick(index)}
                    >
                      Stäng
                    </button>
                    <button
                      className={`font-bold ${card.colourSchemeAccent} text-background text-center px-16 transition-all duration-300 border-2 ${card.colourSchemeAccentSecondary} rounded-sm min-h-15 ${card.colourSchemeHover} hover:border-2 hover:border-accent cursor-pointer`}
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
              </div>
            )}
          </li>
        ))}
    </>
  );
};

export default AgeGroupPageDesktop;