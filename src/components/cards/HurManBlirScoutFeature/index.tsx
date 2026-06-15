"use client"
import { Link } from "@/i18n/routing";
import HurManBlirScoutSteps from "../HurManBlirScoutSteps";
import Button from "@/components/buttons/Button";
import Image from "next/image";
import { useTranslations } from "next-intl";

const HurManBlirScoutFeature = () => {
  const t = useTranslations('hurManBlirScout');

  return (
    <div className="bg-primary">
      <div className="container">
        <div className="flex justify-center lg:justify-start pb-6">
          <Image className="h2-icon" src="/Icons/yellow-two-people-icon.svg" height={50} width={50} alt="" />
          <h2 className="heading-2 text-white">{t('heading')} <span className="text-background hidden">{t('headingAccent')}</span>
          </h2>
        </div>
        <p className="paragraph-light text-white">{t('intro')}</p>
        <div className="md:flex justify-between">
          <div className="section">
            <HurManBlirScoutSteps />
          </div>
          <div className="section gap-4 flex flex-col items-center">
            <div className="card border border-accent flex flex-col justify-center bg-[#00000033] items-center text-white mt-4 md:mt-0">
              <ul className="border-b">
                <div className="flex">
                  <h3 className="heading-3 text-white mb-4 m-auto">{t('termTitle')}</h3>
                </div>
                <div className="flex items-center">
                  <Image className="h-auto w-auto mb-4 mr-1.5 md:h-5" src="/Icons/yellow-check-icon.svg" height={50} width={50} alt="" />
                  <li className="paragraph-light">{t('term1')}</li>
                </div>
                <div className="flex items-center">
                  <Image className="h-auto w-auto mb-4 mr-1.5 md:h-5" src="/Icons/yellow-check-icon.svg" height={50} width={50} alt="" />
                  <li className="paragraph-light">{t('term2')}</li>
                </div>
                <div className="flex items-center">
                  <Image className="h-auto w-auto mb-4 mr-1.5 md:h-5" src="/Icons/yellow-check-icon.svg" height={50} width={50} alt="" />
                  <li className="paragraph-light">{t('term3')}</li>
                </div>
              </ul>
              <div className="flex gap-2 mt-4">
                <p>{t('faqQuestion')}</p>
                <Link className="underline" href="/vanliga-fragor">{t('faqLink')}</Link>
              </div>
            </div>
            <Button ariaLabel="link" variant="primaryBrown" href="/aldersgrupper" text={t('ageGroupBtn')} target="_self" />
            <Link
              href="https://www.scoutnet.se/register/in/group/764"
              target="_blank"
              className="font-bold bg-primary hover:bg-primary-hover text-accent hover:text-accent-hover border-accent hover:border-accent/50 text-center px-10.5 w-[80%] sm:w-max transition-all duration-300 border inline-flex items-center justify-center rounded-sm py-2 min-h-17.5"
            >
              {t('applyBtn')}<span className="hidden md:block">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HurManBlirScoutFeature;