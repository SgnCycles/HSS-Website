"use client";
import { markesaffischCardContent } from "@/data/scoutmarkenCardContent";
import Image from "next/image";
import { useTranslations } from "next-intl";

const MarkesaffischCardMobile = () => {
  const t = useTranslations('markesaffisch');

  return (
    <ul className="text-center sm:hidden">
      {markesaffischCardContent && markesaffischCardContent.map((badge, index) => (
        <li key={index} className={`${badge.colourSchemeSecondary} mb-6`}>
          <h3 className={`font-heading text-[18px] md:text-[20px] font-bold pt-4 ${badge.colourSchemeHeading}`}>
            {`${t(badge.titleKey)} ${t(badge.ageKey)}`}
          </h3>
          <div className="grid place-items-center">
            <p className="paragraph-light text-center w-[90%]">{t(badge.subtitleKey)}</p>
          </div>
          {badge.mobileImage && badge.mobileImage.map((image, index) => (
            <div className="w-full" key={index}>
              <Image className="w-full h-auto" src={image} height={1200} width={800} alt={`${t(badge.titleKey)} märken`} />
            </div>
          ))}
        </li>
      ))}
    </ul>
  );
};

export default MarkesaffischCardMobile;