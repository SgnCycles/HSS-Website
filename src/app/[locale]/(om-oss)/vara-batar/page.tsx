import { varaBatarContent } from "@/data/varaBatarContent";
import { varaBatarCardContent } from "@/data/varaBatarCardContent";
import Image from "next/image";
import VaraBatarCard from "@/components/cards/VaraBatarCard";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "HSS - Våra båtar",
  description:
    "HSS är en av Sveriges mest ambitiösa sjöscoutkårer med en varierad flotta för utbildning, segling och säkerhet som utvecklar scouter på alla nivåer.",
};

const VaraBatarPage = () => {
  const t = useTranslations('VaraBatarPage')
  return (
    <main
      id="main-content"
      className="lg:bg-[url(/images/Backgrounds/blueWavyBoat2.png)] lg:bg-contain md:bg-hidden lg:bg-no-repeat lg:bg-top"
    >
      <section className="container flex flex-col items-center">
        <div className="flex lg:justify-center">
          <Image
            className="h1-icon"
            src={`/Icons/sail-boat-icon.svg`}
            height={30}
            width={30}
            alt=""
          />
          <h1 className="heading-1">{t('title')}</h1>
        </div>
        <p className="paragraph-light">{t('info')}</p>
        <div className="w-screen lg:w-full ml-0 lg:flex lg:justify-center lg:gap-5 lg:flex-row lg:flex-wrap flex flex-col gap-1">
          {varaBatarContent &&
            varaBatarContent.map((image, index) => (
              <Image
                key={index}
                src={`/images/Body/${image.image}`}
                height={424}
                width={452}
                alt="våra båtar"
                className="h-auto w-auto object-cover lg:rounded-md lg:w-[30%]"
              />
            ))}
        </div>
        <div className="lg:flex lg:justify-center md:flex md:justify-center">
          <Image
            src={`/images/Backgrounds/wavyLineTransparent.png`}
            height={64}
            width={777}
            alt=""
            className="self-center lg:w-auto"
          />
        </div>
      </section>
      <ul className="container flex flex-col gap-10">
        {varaBatarCardContent &&
          varaBatarCardContent.map((content, index) => {
            return <VaraBatarCard key={index} {...content} />;
          })}
      </ul>
    </main>
  );
};

export default VaraBatarPage;