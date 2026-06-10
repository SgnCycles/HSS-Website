"use client";
import CloseButton from "@/components/buttons/CloseButton";
import SecurityAndSafetyCard from "../SecurityAndSafetyCard";
import {
  securityAndSafetyCheckContent,
  securityAndSafetyInfoContent,
  securityAndSafetyPopupContent,
} from "@/data/securityAndSafetyContent";
import Image from "next/image";
import { useState } from "react";
import ReadMoreButton from "@/components/buttons/ReadMoreButton";

const SecurityAndSafetyFeature = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <article className="flex flex-col items-center self-center container">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-10 lg:justify-between">
        <section className="flex flex-col items-center lg:mb-6 lg:mt-6 lg:items-start">
          <div className="flex items-center justify-center w-full lg:p-4 lg:pt-0 mb-6 md:text-nowrap">
            <Image
              className="h1-icon"
              src={"/Icons/yellow-shield-cross-icon.svg"}
              alt=""
              height={40}
              width={40}
            />
            <h1 className="heading-1 text-primary">Trygghet & säkerhet</h1>
          </div>
          <p className="pb-4 pt-0 paragraph-light text-center max-w-lg lg:text-left lg:p-0 lg:pl-6">
            På HSS är barnens trygghet, inkludering och glädje alltid vår högsta
            prioritet.
          </p>
        </section>
        <div className="mt-auto">
          <ul className="flex flex-col mb-4 ">
            {securityAndSafetyCheckContent &&
              securityAndSafetyCheckContent.map((box, index) => (
                <li className="flex items-start gap-2 p-1" key={index}>
                  <Image
                    className="h-auto w-5"
                    src={box.icon}
                    alt=""
                    height={40}
                    width={40}
                  />
                  <p className="font-body text-base">{box.info}</p>
                </li>
              ))}
          </ul>
        </div>
      </div>
      <SecurityAndSafetyCard />
      <div className="flex flex-col justify-center items-center">
        {securityAndSafetyInfoContent &&
          securityAndSafetyInfoContent.map((box, index) => (
            <div className="pb-2 pt-2 w-[90%] lg:hidden" key={index}>
              <h2 className="heading-2">{box.title}</h2>
              <p className="paragraph-light">{box.info}</p>
            </div>
          ))}
      </div>
      <div className="hidden w-full justify-end p-4 lg:flex">
        <ReadMoreButton
          ariaLabel="Open to read more"
          variant="primaryBlue"
          text="Läs mer här"
          onClick={handleClick}
        />
      </div>
      {isOpen && (
        <div className="fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center">
          <div
            className="absolute w-full h-full bg-black/40 backdrop-blur-sm"
            onClick={() => handleClick}
          ></div>
          <article className="bg-background p-6 z-10 w-[80%]">
            <div className="text-center">
              <h2 className="heading-2 m-4">Trygghet och inkludering på HSS</h2>
            </div>
            {securityAndSafetyPopupContent &&
              securityAndSafetyPopupContent.map((box, index) => (
                <section className="p-2" key={index}>
                  <h3 className="heading-3 text-primary">{box.title}</h3>
                  <p className="paragraph-light text-[18px]">{box.info}</p>
                </section>
              ))}
            <div className="flex justify-end">
              <CloseButton
                ariaLabel="Close the window"
                text="Stäng"
                onClick={handleClick}
              />
            </div>
          </article>
        </div>
      )}
    </article>
  );
};

export default SecurityAndSafetyFeature;
