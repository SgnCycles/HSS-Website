"use client";
import { ageGroupCardContent } from "@/data/ageGroupCardContent";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import { useTranslations } from "next-intl";

const AgeGroupCardHome = () => {

  const t = useTranslations("aldersgrupper");
  const groups = t.raw("groups") as Record<string, any>;
  const newDataCards = ageGroupCardContent.map((card) => ({
    ...card,
    ...groups[card.id],
  }));

  return (
    <section className="bg-yellow-100 grid place-items-center">
      <article className="container">
        <div className="flex justify-center lg:justify-start pb-6">
          <Image
            src={`/Icons/anchor-icon.svg`}
            height={25}
            width={25}
            alt=""
            className="h2-icon"
          />
          <h2 className="heading-2">{t("title")}</h2>
        </div>
        <div className="sm:flex pb-6 sm:justify-between">
          <p className="paragraph-light text-center sm:text-left mb-0 whitespace-pre-line">
            {t("intro")}
          </p>
          <div className="hidden place-content-center md:flex flex-wrap text-xl">
            <Button
              ariaLabel=""
              href="/aldersgrupper"
              variant="primaryBlue"
              text={`${t("readMoreHere")}`}
              target="_self"
            />
          </div>
        </div>
        <ul className="flex flex-col h-auto justify-center items-center gap-6 pb-6">
          {newDataCards &&
            newDataCards.map((card, index) => (
              <li
                key={index}
                className={`bg-background flex flex-col justify-between w-full h-full md:min-h-30 border ${card.colourSchemeBorder} pt-2 md:pt-4 rounded-tl-md rounded-tr-md rounded-bl-xs rounded-br-xs overflow-hidden`}
              >
                <div className="flex md:pt-5 md:pb-5 md:pr-5">
                  <div className="flex justify-center items-center w-[30%]">
                    <Image
                      src={`/images/Agegroup/${card.icon}`}
                      height={60}
                      width={60}
                      alt={`${card.title} emblem`}
                      className="w-15 h-auto md:w-22.5"
                    ></Image>
                  </div>
                  <div className="flex flex-col w-full items-start pb-4 md:pb-0">
                    <div className="flex flex-col md:flex-row">
                      <h3 className="font-semibold font-heading text-[24px] text-blue-900 tracking-wide pb-2 pl-4 md:pb-0 md:pl-0">
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
                    <p className="sr-only md:not-sr-only paragraph-light">
                      {card.subtitle}
                    </p>
                  </div>
                </div>
                <div
                  className={`flex justify-center sm:justify-between ${card.colourSchemePrimary} font-body text-white font-bold`}
                >
                  <p className={`place-content-center text-left pl-4 h-8`}>
                    {card.meetings}
                  </p>
                </div>
              </li>
            ))}
        </ul>
        <div className="flex sm:hidden items-center justify-center text-xl">
          <Button
            ariaLabel=""
            href="/aldersgrupper"
            variant="secondaryBlue"
            text="Läs mer om åldersgrupper"
            target="_self"
          />
        </div>
      </article>
    </section>
  );
};

export default AgeGroupCardHome;