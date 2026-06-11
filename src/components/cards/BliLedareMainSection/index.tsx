"use client";
import Image from "next/image";
import { useState } from "react";
import BliLedareBenefitCard from "../BliLedareBenefitCard";
import BliLedareContentCardMobile from "../BliLedareContentCardMobile";
import BliLedareContentCardDesktop from "../BliLedareContentCardDesktop";
import ReadMoreButton from "@/components/buttons/ReadMoreButton";
import Button from "@/components/buttons/Button";

const BliLedareMainSection = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      {!isOpen && (
        <article className="container">
          <div className="flex w-full justify-center md:justify-start items-center pb-6">
            <Image
              src={`/Icons/bliledare_blue.svg`}
              height={30}
              width={30}
              alt=""
              className="h1-icon"
            />
            <h1 className="heading-1">
              Bli ledare
              <span className="hidden sm:inline-block">- vi utbildar dig!</span>
            </h1>
          </div>
          <p className="paragraph-light text-grey-500">
            Du behöver inga förkunskaper. Vi skickar dig på Scouternas
            ledarutbildning och du får stöd av erfarna ledare från dag ett.
          </p>
          <div className="flex flex-col justify-between lg:flex-row">
            <BliLedareBenefitCard />
            <BliLedareContentCardMobile />
            <div className="hidden lg:flex flex-col justify-between items-center lg:w-auto">
              <Image
                className="lg:rounded-md w-full lg:w-75 h-auto"
                src={"/images/Body/bliLedare_body1.png"}
                height={600}
                width={600}
                alt=""
              />
              <Button
                ariaLabel=""
                href="https://www.scoutnet.se/register/in/group/764"
                variant="primaryBlue"
                text="Anmäl ditt intresse här &#8594;"
                target="_blank"
              />
              <ReadMoreButton
                ariaLabel="Open to read more"
                variant="secondaryBlue"
                text="Mer information här"
                onClick={handleClick}
              />
            </div>
          </div>
          <p className="text-base font-bold text-center text-primary text-extrabold md:hidden">
            Kåren betalar för den utbildning du behöver för att fungera bra som
            scoutledare.
          </p>
        </article>
      )}
      {isOpen && (
        <article className="container text-primary">
          <div className="flex w-full justify-center md:justify-start items-center pb-6">
            <Image
              src={`/Icons/bliledare_blue.svg`}
              height={30}
              width={30}
              alt=""
              className="h1-icon"
            />
            <h1 className="heading-1">Bli ledare - vi utbildar dig!</h1>
          </div>
          <div className="flex flex-col  paragraph-light mb-6">
            <BliLedareContentCardDesktop />
            <div className="flex justify-end">
              <button
                className="flex bg-primary font-semibold text-accent text-center px-16 transition-all duration-300 border rounded-sm py-2 cursor-pointer hover:bg-primary-hover hover:text-background"
                onClick={handleClick}
              >
                <p>Stäng</p>
              </button>
            </div>
          </div>
        </article>
      )}
    </>
  );
};

export default BliLedareMainSection;