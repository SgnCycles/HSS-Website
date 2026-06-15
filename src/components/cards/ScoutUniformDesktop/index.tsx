"use client";
import { scoutUniformCardContent } from "@/data/scoutmarkenCardContent";
import Image from "next/image";
import { useTranslations } from "next-intl";

const ScoutUniformDesktop = () => {
  const t = useTranslations('uniform');

  return (
    <>
      {scoutUniformCardContent && (
        <div className="hidden sm:flex sm:flex-col">
          <h2 className="heading-2 text-center xl:text-left pb-6">{t('heading')}</h2>
          <p className="paragraph-light">
            {t('subtitle1')}
            {t('subtitle2')}
            {t('subtitle3')}
          </p>
          <div className="w-full grid place-items-center">
            <Image src={scoutUniformCardContent[0].desktopImage} height={1000} width={1000} alt="Scoutkläder" />
          </div>
        </div>
      )}
    </>
  );
};

export default ScoutUniformDesktop;