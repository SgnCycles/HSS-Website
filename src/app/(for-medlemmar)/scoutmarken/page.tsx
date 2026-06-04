"use client";
import {
  markesaffischCardContent,
  scoutUniformCardContent,
} from "@/data/scoutmarkenCardContent";
import Image from "next/image";
import Link from "next/link";
import useIsMobile from "@/hooks/useGetMobile";
import Button from "@/components/buttons/Button";

const ScoutmarkenPage = () => {
  const isMobile = useIsMobile();

  return (
    <section className="grid place-items-center font-body">
      <article className="container pb-0">
        <div className="flex justify-center sm:justify-start items-center sm:pb-6 flex-wrap md:flex-nowrap pb-6">
          <Image
            src="/Icons/yellow-anchor-icon.svg"
            height={30}
            width={30}
            alt=""
            className="h1-icon"
          />
          <h1 className="heading-1">Scoutmärken</h1>
          <div className="grid place-items-center ml-4">
            <p
              className={`border border-accent bg-yellow-200 font-body font-normal text-center pr-4 pl-4 pt-1 pb-1 text-base rounded-md`}
            >
              Varje märken berättar en historia
            </p>
          </div>
        </div>
        <p className="paragraph-light">
          Ett märke är så mycket mer än en tygbit. Det visar att du lärt dig
          något, att du varit med om något speciellt eller att du tillhör en
          viss patrull eller scoutkår.
        </p>
        <div className="pb-6 md:hidden">
          <Button
            ariaLabel=""
            href="https://media.scoutcontent.se/uploads/2025/08/Markbart-2025.pdf"
            variant="primaryBlue"
            text="Läs mer"
          />
        </div>
        <p className="paragraph-light mb-6 sm:hidden">
          Att klä din scoutskjorta med märken är ett roligt sätt att alltid
          minnas dina äventyr och se allt du lärt dig på vägen. En
          skjortberättelse om allt du varit med om!
        </p>
        {/* Desktop version */}
        <div className="hidden sm:flex justify-around mb-6 flex-row section">
          <div className="pb-6 hidden md:flex">
            <Button
              ariaLabel=""
              href="https://media.scoutcontent.se/uploads/2025/08/Markbart-2025.pdf"
              variant="primaryBlue"
              text="Läs mer"
            />
          </div>
          <div className="grid place-items-center">
            <p className="paragraph-light">
              Att klä din scoutskjorta med märken är ett roligt sätt att alltid
              minnas dina äventyr och se allt du lärt dig på vägen. En
              skjortberättelse om allt du varit med om!
            </p>
          </div>
        </div>
      </article>
      <article className="container pt-0">
        <h2 className="font-heading text-[24px] md:text-[30px] font-bold text-primary text-center md:text-left pb-6">
          Specifika märken för sjöscouter
        </h2>
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
          Bevis- och behörighetsmärkena blir ett tecken på vad scouterna kan och
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
          <Link
            className="underline text-primary font-semibold"
            href="https://www.scoutshop.se/marken"
            target="_blank"
          >
            Se alla märken i scoutshop.se &#62;&#62;
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
        <div className="hidden md:flex w-full justify-center items-center">
          <Image src="/Icons/caret_down.svg" height={25} width={25} alt="" />
        </div>
      </article>
      <article className="w-full container pt-0 pb-0">
        <h2 className="font-heading text-[24px] md:text-[30px] font-bold text-primary text-center md:text-left pb-6">
          Märkesaffisch för din åldersgrupp
        </h2>
        {/* MOBILE VERSION */}
        <ul className="text-center sm:hidden">
          {markesaffischCardContent &&
            markesaffischCardContent.map((badge, index) => (
              <li key={index} className={`${badge.colourSchemeSecondary} mb-6`}>
                <h3
                  className={`font-heading text-[18px] md:text-[20px] font-bold pt-4 ${badge.colourSchemeHeading} text-[18px] md:text-[20px]`}
                >
                  {`${badge.title} ${badge.age}`}
                </h3>
                <div className="grid place-items-center">
                  <p className="paragraph-light text-center w-[90%]">
                    {badge.subtitle}
                  </p>
                </div>
                {badge.mobileImage &&
                  badge.mobileImage.map((image, index) => (
                    <div className="w-full" key={index}>
                      <Image
                        className="w-full h-auto"
                        src={image}
                        height={1200}
                        width={800}
                        alt={`${badge.title} märken`}
                      />
                    </div>
                  ))}
              </li>
            ))}
        </ul>
        {/* DESKTOP VERSION */}
        <ul className="hidden sm:flex sm:flex-col sm:text-center sm:w-full sm:items-center">
          {markesaffischCardContent &&
            markesaffischCardContent.map((badge, index) => (
              <li
                key={index}
                className={`border-[5px] ${badge.colourSchemeBorder} mb-6 rounded-sm p-6 w-full`}
              >
                <div className="flex flex-row justify-between">
                  <div className="flex flex-col justify-center sm:w-50 mr-6">
                    <div className="grid place-items-center w-full">
                      <Image
                        src={`/images/Agegroup/${badge.icon}`}
                        height={70}
                        width={70}
                        alt={`${badge.title} märken`}
                      ></Image>
                    </div>
                    <div
                      className={`font-heading font-bold ${badge.colourSchemeHeading} ${badge.colourSchemeSecondary} text-md rounded-sm pt-1 pb-2 pr-2 pl-2`}
                    >
                      <h3>{badge.title}</h3>
                      <span>{badge.age}</span>
                    </div>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="w-full" key={index}>
                      <Image
                        className="w-[90%] h-auto"
                        src={badge.desktopImage}
                        height={100}
                        width={800}
                        alt={`${badge.title} märken`}
                      />
                    </div>
                    <p className="paragraph-light text-wrap mb-0">
                      {badge.subtitle}
                    </p>
                  </div>
                </div>
              </li>
            ))}
        </ul>
        <div className="md:hidden w-full flex justify-center items-center">
          <Image
            src="/images/Body/blue_seperator.png"
            height={100}
            width={1000}
            alt=""
          />
        </div>
        <div className="hidden md:flex w-full justify-center items-center">
          <Image src="/Icons/caret_down.svg" height={25} width={25} alt="" />
        </div>
      </article>
      <article className="container pb-0">
        {/* MOBILE VERSION */}
        {scoutUniformCardContent && (
          <div className="sm:hidden">
            <h2 className="font-heading text-primary text-[24px] md:text-[30px] font-bold text-center mb-4">
              {scoutUniformCardContent[0].title}
            </h2>
            <div className="grid place-items-center">
              <p className="paragraph-light">
                {scoutUniformCardContent[0].subtitle}
              </p>
            </div>
            <div className="w-full">
              <Image
                src={scoutUniformCardContent[0].image_mobile_subtitle}
                height={100}
                width={1000}
                alt="Scoutkläder"
              />
            </div>
            <div className="grid place-items-center">
              <p className="paragraph-light">
                {scoutUniformCardContent[0].second_subtitle}
              </p>
            </div>
            <div className="w-full">
              <Image
                src={scoutUniformCardContent[0].image_mobile_second_subtitle}
                height={100}
                width={1000}
                alt="Scoutkläder"
              />
            </div>
            <div className="grid place-items-center">
              <p className="paragraph-light">
                {scoutUniformCardContent[0].third_subtitle}
              </p>
            </div>
            <div className="w-full">
              <Image
                src={scoutUniformCardContent[0].image_mobile_third_subtitle}
                height={100}
                width={1000}
                alt="Scoutkläder"
              />
            </div>
          </div>
        )}
        {/* DESKTOP VERSION */}
        {scoutUniformCardContent && (
          <div className="hidden sm:flex sm:flex-col">
            <h2 className="text-[30px] font-heading text-primary font-bold text-center md:text-left mb-6">
              {scoutUniformCardContent[0].title}
            </h2>
            <p className="paragraph-light">
              {scoutUniformCardContent[0].subtitle}
              {scoutUniformCardContent[0].second_subtitle}
              {scoutUniformCardContent[0].third_subtitle}
            </p>
            <div className="w-full grid place-items-center">
              <Image
                src={scoutUniformCardContent[0].desktopImage}
                height={1000}
                width={1000}
                alt="Scoutkläder"
              />
            </div>
          </div>
        )}
        <div className="card flex flex-col lg:flex-row lg:justify-around items-center border border-accent bg-yellow-200 rounded-sm mt-6 mb-6">
          <p className="paragraph text-primary text-center sm:text-left mb-2 sm:mb-0">
            Anvisningar för placering av de nya märkena på scoutskjortan.
          </p>
          <Button
            ariaLabel=""
            href="/pdf/nya-maerkessystemet.pdf"
            variant="ternaryBlue"
            text="Ladda ner PDF"
            download={true}
          />
        </div>
      </article>
    </section>
  );
};

export default ScoutmarkenPage;
