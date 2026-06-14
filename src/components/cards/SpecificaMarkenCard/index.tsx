"use client"
import Image from "next/image";
import useIsMobile from "@/hooks/useGetMobile";
import { Link } from "@/i18n/routing";

const SpecificaMarken = () => {

  const isMobile = useIsMobile();

  return (
    <article className="container pt-0">
      <h2 className="heading-2 text-center xl:text-left">Specifika märken för sjöscouter</h2>
      <div className="sm:w-full sm:grid sm:place-items-center sm:mb-6">
        <Image
          className="w-full h-auto"
          src={
            isMobile
              ? "/images/Scoutmarken/Mobile/sjoscoutmarket_mobile.png"
              : "/images/Scoutmarken/Desktop/sjoscoutmarken_desktop.png"
          }
          height={1200}
          width={800}
          alt="Sjöscoutmärken"
        />
      </div>
      <p className="paragraph-light">
        Bevis - och behörighetsmärkena blir ett tecken på vad scouterna kan och
        bidrar till säkerheten.
      </p>
      <div className="mt-6 mb-6 sm:hidden">
        <Image
          className="w-full h-auto"
          src="/images/Scoutmarken/Mobile/bat_mobile.png"
          height={1200}
          width={800}
          alt="Båttettan, båttvåan, båttrean märken"
        />
      </div>
      <div className="card paragraph flex flex-col border border-accent sm:p-6 bg-yellow-200">
        <Link
          className="underline text-primary font-semibold"
          href="https://media.scoutcontent.se/uploads/2021/03/Affisch-A3-Sjo-och-vatten-vit-bakgrund-2020-klar-1.pdf"
          target="_blank"
        >
          Se flera sjöscoutmärken →
        </Link>
      </div>
      <div className="md:hidden w-full flex justify-center items-center">
        <Image
          src="/images/Body/blue_seperator.png"
          height={100}
          width={1000}
          alt=""
        />
      </div>
    </article>
  );
};

export default SpecificaMarken;
