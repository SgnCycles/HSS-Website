"use client";
import { ageGroupCardContent } from "@/data/ageGroupCardContent";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AgeGroupPage = () => {
  const [isOpen, setIsOpen] = useState<number | null>(null);
  const handleClick = (index: number) => {
    setIsOpen(isOpen === index ? null : index);
  };

  return (
    <main
      id="main-content"
      className="md:bg-[url('/images/Backgrounds/blueWavyBoat2.png')] md:bg-no-repeat md:bg-size-[100%_auto]"
    >
      <section className="font-body">
        <article className="md:container md:flex flex-col">
          <div className="container pb-0 pt-0">
            <div className="flex justify-center sm:justify-start pt-6 pb-4 md:pt-0 md:pb-0">
              <Image
                src="/Icons/anchor-icon.svg"
                height={25}
                width={25}
                alt=""
                className="h1-icon"
              />
              <h1 className="heading-1">Åldersgrupper</h1>
            </div>
            <div className="flex sm:justify-between">
              <p className="paragraph-light">
                Oavsett ålder finns det en plats för dig i HSS. Varje avdelning
                har sin egen karaktär och sina egna äventyr.
              </p>
            </div>
          </div>
          {/* Mobile */}
          <ul className="flex flex-col md:hidden">
            {ageGroupCardContent &&
              ageGroupCardContent.map((card, index) => (
                <li
                  key={index}
                  className="flex flex-col justify-between md:min-h-30 bg-background"
                >
                  <div
                    onClick={() => handleClick(index)}
                    className={`flex justify-between ${card.colourSchemePrimary} font-body text-white font-bold`}
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
          </ul>
          {/* Desktop */}
          <ul className="hidden md:flex flex-col h-auto justify-center items-center gap-6 pb-6">
            {ageGroupCardContent &&
              ageGroupCardContent.map((card, index) => (
                <li
                  key={index}
                  className={`flex flex-col justify-between w-full h-full md:min-h-30 border ${card.colourSchemeBorder} pt-2 md:pt-4 rounded-tl-sm rounded-tr-sm rounded-bl-xs rounded-br-xs overflow-hidden bg-background`}
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
                    onClick={() => handleClick(index)}
                    className={`flex justify-center sm:justify-between ${card.colourSchemePrimary} text-white font-bold cursor-pointer`}
                  >
                    <p className="place-content-center text-left pl-4 h-8">
                      {card.meetings}
                    </p>
                    <button
                      className="flex justify-between items-center pr-4 cursor-pointer"
                    >
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
                          {card.info_block_three && (
                            <p>{card.info_block_three}</p>
                          )}
                          {card.info_block_four && (
                            <p>{card.info_block_four}</p>
                          )}
                          {card.info_block_five && (
                            <p>{card.info_block_five}</p>
                          )}
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
          </ul>
        </article>
      </section>
    </main>
  );
};

export default AgeGroupPage;
