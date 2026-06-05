"use client";
import Image from "next/image";
import { bliLedareCardContent } from "@/data/bliLedareCardContent";
import Button from "@/components/buttons/Button";
import { useState } from "react";

const BliLedarePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="bg-background font-body text-background grid place-items-center">
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
            <h1 className="heading-1">Bli ledare - vi utbildar dig!</h1>
          </div>
          <p className="paragraph-light text-grey-500">
            Du behöver inga förkunskaper. Vi skickar dig på Scouternas
            ledarutbildning och du får stöd av erfarna ledare från dag ett.
          </p>
          <div className="flex flex-col justify-between lg:flex-row">
            <ul className="cards-column w-full md:pr-6">
              {bliLedareCardContent &&
                bliLedareCardContent.map((card, index) => (
                  <li
                    key={index}
                    className="flex border border-yellow-500 rounded-md pt-2 pb-2 pr-2 md:pt-5 md:pb-5 md:pr-5 bg-yellow-100"
                  >
                    <div className="min-w-20 grid place-items-center">
                      <Image
                        src={`/Icons/${card.icon}`}
                        height={40}
                        width={40}
                        alt=""
                      />
                    </div>
                    <div>
                      <h3 className="heading-3">
                        {card.title}
                      </h3>
                      <p className="text-base text-wrap text-grey-500">
                        {card.subtitle}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="flex flex-col justify-between items-center gap-6 font-bold pb-6 mt-6 lg:mt-0">
              <div className="text-primary flex flex-col lg:hidden">
                <p className="paragraph-light">
                  För att fler barn och unga ska få uppleva scouting behöver vi
                  fler engagerade ledare. Som scoutledare får du utveckla ditt
                  ledarskap, skapa minnen och göra skillnad för barn och
                  ungdomar.
                </p>
                <p className="paragraph-light">
                  Du behöver varken vara erfaren seglare eller tidigare scout.
                  Det viktigaste är att du gillar att arbeta med unga och vill
                  engagera dig ideellt.
                </p>
                <p className="paragraph-light">
                  Vi välkomnar särskilt fler kvinnliga ledare eftersom vi idag
                  har fler manliga ledare i kåren.
                </p>
              </div>
              <div className="w-screen lg:w-auto">
                <Image
                  className="lg:rounded-md w-full lg:w-75 h-auto"
                  src={"/images/Body/bliLedare_body1.png"}
                  height={600}
                  width={600}
                  alt=""
                />
              </div>
              <div>
                <Button
                  ariaLabel=""
                  href="https://www.scoutnet.se/register/in/group/764"
                  variant="primaryBlue"
                  text="Anmäl ditt intresse här &#8594;"
                  target="_blank"
                />
              </div>
              <button
                className="hidden lg:flex justify-center items-center bg-[#397DB3] font-bold text-background text-center px-16 transition-all duration-300 border rounded-sm py-2 cursor-pointer hover:bg-primary-hover hover:text-background text-nowrap min-h-17.5 w-full"
                onClick={handleClick}
              >
                <p>Mer information här</p>
              </button>
            </div>
          </div>
          <p className="text-base font-bold text-center text-primary text-extrabold lg:hidden">
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
            <p className="paragraph-light">
              Du behöver inga förkunskaper. Vi skickar dig på Scouternas
              ledarutbildning och du får stöd av erfarna ledare från dag ett.
            </p>
            <p className="paragraph-light">
              För att fler barn och unga ska få uppleva scouting behöver vi bli
              ännu fler engagerade vuxna. Vill du växa i ditt egna ledarskap och
              hjälpa barn och ungdommar att utväcklas? Bra, då kommer du passa
              perfekt som scoutledare.
            </p>
            <p className="paragraph-light">
              Att vara ledare är kanske det största äventyret. Som ledare gör du
              stor skillnad för många, samtidigt som du får möjlighet att lära
              dig nya saker, skapa upplevelser och utveckla ditt ledarskap.
              Tillsammans med scouterna får du uppleva äventyr, gemenskap och
              skratt.
            </p>
            <p className="paragraph-light">
              Ledarsituationen i kåren är relativt god, men varje år behöver vi
              rekrytera nya. Och vi välkömnar särskilt nya kvinliga ledare
              eftersom vi har en övervikt av manliga ledare idag.
            </p>
            <p className="paragraph-light">
              Du behöver inte att vara en erfaren seglare för att delta i vår
              verksamhet. Du behöver inte heller vara gammal scout att bli
              ledare. Enda kravet är att du har genuint intresse av att jobba
              med ungdommar och att du är sugen på att arbeta ideellt i en
              välfungerande scoutkår.
            </p>
            <p className="paragraph font-extrabold">
              Kåren betalar för den utbildning du behöver för att fungera bra
              som scoutledare.
            </p>
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
    </section>
  );
};

export default BliLedarePage;
