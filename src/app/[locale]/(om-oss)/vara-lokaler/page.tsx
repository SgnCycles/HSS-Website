import VaraLokalerDesktop from "@/components/cards/VaraLokalerDesktop";
import VaraLokalerMobile from "@/components/cards/VaraLokalerMobile";
import Image from "next/image";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "HSS - Våra lokaler",
  description:
    "Myset och Ruffen är HSS:s scoutlokaler för möten, läger och sjöscouting – välutrustade samlingsplatser för äventyr, gemenskap och lärande.",
};

const VaraLokalerPage = () => {
  const t = useTranslations('VaraLokalerPage')
  return (
    <main id="main-content">
      <section className="container flex flex-col justify-center items-center pb-0 lg:items-start">
        <div className="flex justify-center">
          <Image
            className="h2-icon"
            src="/Icons/house-heart-icon.svg"
            height={30}
            width={30}
            alt=""
          />
          <h1 className="heading-2">{t('title')}</h1>
        </div>
        <p className="paragraph-light text-center">{t('info')}</p>
      </section>
      <section>
        <VaraLokalerMobile />
        <VaraLokalerDesktop />
      </section>
    </main>
  );
};

export default VaraLokalerPage;