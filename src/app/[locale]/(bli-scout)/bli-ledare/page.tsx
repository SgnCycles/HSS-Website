"use client";
import Image from "next/image";
import { bliLedareCardContent } from "@/data/bliLedareCardContent";
import Button from "@/components/buttons/Button";
import { useState } from "react";
import { useTranslations } from "next-intl";


const BliLedarePage = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const tCards = useTranslations('BliLedareCard')
  const t = useTranslations('BliLedarePage')

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
            <h1 className="heading-1">{t('heading')}</h1>
          </div>
          <p className="paragraph-light text-grey-500">
            {t('intro')}
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
                        {tCards(card.titleKey as any)}
                      </h3>
                      <p className="text-base text-wrap text-grey-500">
                        {tCards(card.subtitleKey)}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
            <div className="flex flex-col justify-between items-center gap-6 font-bold pb-6 mt-6 lg:mt-0">
              <div className="text-primary flex flex-col lg:hidden">
                <p className="paragraph-light">
                  {t('details.p2')}
                </p>
                <p className="paragraph-light">
                  {t('details.p3')}
                </p>
                <p className="paragraph-light">
                  {t('details.p4')}
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
                  text={t('cta')} 
                  target="_blank"
                />
              </div>
              <button
                className="hidden lg:flex justify-center items-center bg-[#397DB3] font-bold text-background text-center px-16 transition-all duration-300 border rounded-sm py-2 cursor-pointer hover:bg-primary-hover hover:text-background text-nowrap min-h-17.5 w-full"
                onClick={handleClick}
              >
                <p>{t('readMore')}</p>
              </button>
            </div>
          </div>
          <p className="text-base font-bold text-center text-primary text-extrabold lg:hidden">
            {t('details.p6')}
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
            <h1 className="heading-1">{t('heading')}</h1>
          </div>
          <div className="flex flex-col  paragraph-light mb-6">
            <p className="paragraph-light">
              {t('details.p1')}
            </p>
            <p className="paragraph-light">
              {t('details.p2')}
            </p>
            <p className="paragraph-light">
              {t('details.p3')}
            </p>
            <p className="paragraph-light">
              {t('details.p4')}
            </p>
            <p className="paragraph-light">
              {t('details.p5')}
            </p>
            <p className="paragraph font-extrabold">
              {t('details.p6')}
            </p>
            <div className="flex justify-end">
              <button
                className="flex bg-primary font-semibold text-accent text-center px-16 transition-all duration-300 border rounded-sm py-2 cursor-pointer hover:bg-primary-hover hover:text-background"
                onClick={handleClick}
              >
                <p>{t('closeCta')}</p>
              </button>
            </div>
          </div>
        </article>
      )}
    </section>
  );
};

export default BliLedarePage;
