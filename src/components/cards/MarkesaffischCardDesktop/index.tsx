"use client";
import { markesaffischCardContent } from "@/data/scoutmarkenCardContent";
import Image from "next/image";
import { useTranslations } from "next-intl";

const MarkesaffischCardDesktop = () => {
  const t = useTranslations('markesaffisch');

  return (
    <ul className="hidden sm:flex sm:flex-col sm:text-center sm:w-full sm:items-center">
      {markesaffischCardContent && markesaffischCardContent.map((badge, index) => (
        <li key={index} className={`border-[5px] ${badge.colourSchemeBorder} mb-6 rounded-sm p-6 w-full`}>
          <div className="flex flex-row justify-between">
            <div className="flex flex-col justify-center sm:w-50 mr-6">
              <div className="grid place-items-center w-full">
                <Image src={`/images/Agegroup/${badge.icon}`} height={70} width={70} alt={`${t(badge.titleKey)} märken`} />
              </div>
              <div className={`font-heading font-bold ${badge.colourSchemeHeading} ${badge.colourSchemeSecondary} text-md rounded-sm pt-1 pb-2 pr-2 pl-2`}>
                <h3>{t(badge.titleKey)}</h3>
                <span>{t(badge.ageKey)}</span>
              </div>
            </div>
            <div className="flex flex-col justify-between">
              <div className="w-full">
                <Image className="w-[90%] h-auto" src={badge.desktopImage} height={100} width={800} alt={`${t(badge.titleKey)} märken`} />
              </div>
              <p className="paragraph-light text-wrap mb-0">{t(badge.subtitleKey)}</p>
            </div>
          </div>
        </li>
      ))}
    </ul>
  );
};

export default MarkesaffischCardDesktop;