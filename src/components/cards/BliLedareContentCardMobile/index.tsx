"use client";
import Image from "next/image";
import Button from "@/components/buttons/Button";
import { useTranslations } from "next-intl";

const BliLedareContentCardMobile = () => {
  const t = useTranslations('BliLedarePage');

  return (
    <div className="flex flex-col justify-between items-center gap-6 font-bold pb-6 pt-6 lg:hidden">
      <div className="text-primary flex flex-col lg:hidden">
        <p className="paragraph-light">{t('details.p2')}</p>
        <p className="paragraph-light">{t('details.p3')}</p>
        <p className="paragraph-light">{t('details.p4')}</p>
      </div>
      <div className="w-screen lg:w-auto">
        <Image className="lg:rounded-md w-full lg:w-75 h-auto" src={"/images/Body/bliLedare_body1.png"} height={600} width={600} alt="" />
      </div>
      <div>
        <Button ariaLabel="" href="https://www.scoutnet.se/register/in/group/764" variant="primaryBlue" text={t('cta')} target="_blank" />
      </div>
    </div>
  );
};

export default BliLedareContentCardMobile;