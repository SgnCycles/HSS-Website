"use client"
import Image from "next/image";
import useIsMobile from "@/hooks/useGetMobile";
import Link from "next/link";

const SpecificaMarken = () => {

  const isMobile = useIsMobile();

  return (
    <article className="container pt-0">
      <h2 className="heading-2 text-center xl:text-left">Behörighetsmärken</h2>
      <div className="sm:w-full sm:grid sm:place-items-center sm:mb-6">
      <p className="paragraph-light">
      Att lära dig hantera en båt är ett spännande lärande som aldrig tar slut.
Märket kan användas för att visa vilken båt du får ta ut. Förutsättningarna i scoutkårer
ser olika ut. Kriterierna behöver anpassas utifrån vilka båtar kåren har, vilka vatten som finns
i närområdet och hur verksamheten är upplagd. Nedan finns förslag på kriterier
för att underlätta vid gemensamma utfärder mellan kårer.
Behörighetsmärkena är inte specificerade utifrån åldersgrupp eftersom åldersgrupp beror
på förutsättningarna lokalt. Scoutkåren kan vid behov själva skapa ytterligare märken
som Båtfyran, Båtfemman osv med samma utseende. 
      </p>
      <Image src="/badges/batettan.svg" alt="" width={50} height={50} />
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