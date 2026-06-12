import Button from "@/components/buttons/Button";
import { scoutEquipment, scoutEquipmentStore } from "@/data/braAttVetaContent";
import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "HSS - Bra att veta",
  description:
    "Det behövs inga särskilda kläder eller saker för att börja i Scouterna, men vissa utrustningar kan vara bra att ha eller låna efter en tid.",
};

const BraAttVetaPage = () => {

  const t = useTranslations("bra-att-veta");
  const tScoutsEquipment = t.raw("scoutEquipment") as string[];
  const tscoutClothes = t.raw("scoutStoreClothes") as string[];

  return (
    <main id="main-content">
      <section className="grid place-items-center bg-[url(/images/Backgrounds/blueWavyBoat2.png)] bg-cover sm:bg-top-right font-body pb-6">
        <article className="container">
          <div className="flex justify-center lg:justify-start items-center pb-6">
            <Image
              src="/Icons/yellow-information.svg"
              height={30}
              width={30}
              alt=""
              className="h1-icon"
            />
            <h1 className="heading-1">{t("title")}</h1>
          </div>
          <p className="paragraph-light">
            {t("intro")}
          </p>
          <ul className="list-disc paragraph-light pl-6 sm:pl-8">
            {tScoutsEquipment &&
              tScoutsEquipment.map((equipment, index) => (
                <li key={index}>{equipment}</li>
              ))}
          </ul>
          <Link
            className="paragraph text-primary underline hover:opacity-80 visited:text-purple-600 font-semibold"
            href="https://www.scouterna.se/scout-ledare-kar/jag-ar-scout/scoutklader/"
            target="_blank"
          >
            {t("readMore")}
          </Link>
        </article>
        <article className="container">
          <div className="w-full flex justify-center sm:justify-start items-center pb-2 sm:pb-6">
            <Image
              className="h2-icon hidden sm:flex place-self-start pt-3 lg:pt-1"
              src="/images/Logo/logo.png"
              height={30}
              width={30}
              alt=""
            />
            <h2 className="heading-2 pb-6">
              {t("sectionTwoTitle")}
            </h2>
          </div>
          <div className="flex flex-col lg:flex-row lg:pb-6">
            <div className="w-full flex flex-col justify-between md:pr-4 pb-6 md:pb-0">
              <p className="paragraph-light">
                {t("sectionTwoIntro")}
              </p>
              <ul className="paragraph-light pl-6 sm:pl-6">
                {tscoutClothes &&
                  tscoutClothes.map((equipment, index) => (
                    <li key={index}>{equipment}</li>
                  ))}
              </ul>
              <p className="paragraph-light">
                {t("sectionTwoParagraphOne")}
              </p>
              <h3 className="hidden sm:flex flex-col heading-4">
                {t("sectionThreeTitle")}
                <a href="mailto:hsstrojan@hss-scout.org" className="underline">
                  hsstrojan@hss-scout.org
                </a>
              </h3>
            </div>
            <div className="w-full hidden sm:grid sm:place-items-center">
              <Image
                className="w-full h-auto rounded-md"
                src="/images/Body/braAttVeta_body1.png"
                height={800}
                width={400}
                alt="Scout jacket"
              />
            </div>
          </div>
        </article>
        <div className="w-full sm:hidden md:pt-6 pb-6">
          <Image
            className="w-full h-auto"
            src="/images/Body/braAttVeta_body1.png"
            height={800}
            width={400}
            alt="Scout jacket"
          />
        </div>
        <div className="sm:hidden pb-6">
          <h3 className="heading-3 text-center pb-6 md:pb-0">
            {t("sectionThreeTitle")}
          </h3>
          <Button
            ariaLabel=""
            href="mailto:hsstrojan@hss-scout.org"
            variant="primaryBlue"
            text="hsstrojan@hss-scout.org"
          />
        </div>
        <div className="container card bg-yellow-200 border border-accent rounded-md">
          <p className="paragraph-light mb-0">
            {t("sectionFourParagraph")}
          </p>
        </div>
      </section>
    </main>
  );
};

export default BraAttVetaPage;