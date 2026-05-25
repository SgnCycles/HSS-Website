"use client";
import { markesaffischCardContent, scoutUniformCardContent } from "@/data/scoutmarkenCardContent"
import Image from "next/image"
import Link from "next/link"
import useIsMobile from "@/hooks/useGetMobile"

const ScoutmarkenPage = () => {
  const isMobile = useIsMobile()

  return (
    <article className="grid place-items-center font-body pt-6 pb-6 text-base">
      <div className="w-full sm:w-[70%]">
        <div className="w-full flex justify-center sm:justify-start items-center pb-2 sm:pb-6">
          <Image
            src="/Icons/yellow-anchor-icon.svg"
            height={30}
            width={30}
            alt=""
          />
          <h1 className="font-heading text-primary text-[25px] md:text-[40px] font-extrabold text-nowrap pl-2">
            Scoutmärken
          </h1>
          <div className="hidden sm:grid sm:place-items-center ml-4">
            <p
              className={`border border-accent bg-yellow-200 font-body font-normal text-center pr-2 pl-2 pt-1 pb-1 text-sm rounded-md`}
            >
              Varje märken berättar en historia
            </p>
          </div>
        </div>
        <div className="grid place-items-center sm:hidden">
          <p
            className={`border border-accent bg-yellow-200 w-[70%] font-body font-normal text-center pt-1 md:pt-1 pb-1 md:pb-1 text-sm rounded-md mb-4`}
          >
            Varje märken berättar en historia
          </p>
        </div>
        <div className="grid place-items-center sm:flex">
          <p className="w-[90%] sm:w-full">
            Ett märke är så mycket mer än en tygbit. Det visar att du lärt dig
            något, att du varit med om något speciellt eller att du tillhör en
            viss patrull eller scoutkår.
          </p>
        </div>
        {/* TODO: button bellow will be replaced with button element when ready */}
        <div className="md:hidden border border-blue-500 bg-primary rounded-sm p-4 md:p-2 text-[15px] text-accent cursor-pointer mt-4 grid place-items-center font-bold w-[90%] md:w-[35%] place-self-center md:place-self-end mb-6">
          <Link href="https://media.scoutcontent.se/uploads/2025/08/Markbart-2025.pdf">
            Läs mer
          </Link>
        </div>
        <div className="md:hidden grid place-items-center">
          <p className="mb-6 w-[90%]">
            Att klä din scoutskjorta med märken är ett roligt sätt att alltid
            minnas dina äventyr och se allt du lärt dig på vägen. En
            skjortberättelse om allt du varit med om!
          </p>
        </div>
        {/* Desktop version */}
        <div className="hidden sm:flex justify-around mb-6">
          <div className="border border-blue-500 bg-primary rounded-sm p-4 md:p-2 text-[15px] text-accent cursor-pointer mt-4 grid place-items-center font-bold w-[90%] md:w-[35%] place-self-center md:place-self-end mb-6">
            <Link href="https://media.scoutcontent.se/uploads/2025/08/Markbart-2025.pdf">
              Läs mer
            </Link>
          </div>
          <div className="grid place-items-center">
            <p className="w-[90%]">
              Att klä din scoutskjorta med märken är ett roligt sätt att alltid
              minnas dina äventyr och se allt du lärt dig på vägen. En
              skjortberättelse om allt du varit med om!
            </p>
          </div>
        </div>
        <h3 className="font-heading text-primary text-lg font-bold text-center sm:text-start sm:text-2xl">
          Specifika märken för sjöscouter
        </h3>
        <div className="sm:flex sm:mb-6 grid place-items-center">
          <p className="w-[90%]">
            Bevis- och behörighetsmärkena blir ett tecken på vad scouterna kan
            och bidrar till säkerheten.
          </p>
        </div>
        <div className="sm:w-full sm:grid sm:place-items-center sm:mb-6">
          <Image
            className="w-full sm:w-[70%] h-auto"
            src={
              isMobile
                ? "/images/Scoutmarken/Mobile/sjoscoutmarket_mobile.png"
                : "/images/Scoutmarken/Desktop/sjoscoutmarken_desktop.png"
            }
            height={1200}
            width={800}
            alt=""
          />
        </div>
        <div className="grid place-items-center sm:hidden">
          <p className="w-[90%]">
            Bevis- och behörighetsmärkena blir ett tecken på vad scouterna kan
            och bidrar till säkerheten.
          </p>
        </div>
        <div className="mt-6 mb-6 sm:hidden">
          <Image
            className="w-full h-auto"
            src="/images/Scoutmarken/Mobile/bat_mobile.png"
            height={1200}
            width={800}
            alt=""
          />
        </div>
        <div className="pl-4 flex flex-col sm:border sm:border-accent sm:p-6 sm:rounded-md bg-yellow-200">
          <Link
            className="underline text-primary font-semibold"
            href="https://media.scoutcontent.se/uploads/2021/03/Affisch-A3-Sjo-och-vatten-vit-bakgrund-2020-klar-1.pdf"
          >
            Se flera sjöscoutmärken →
          </Link>
          <Link
            className="underline text-primary font-semibold"
            href="https://www.scoutshop.se/marken"
          >
            Se alla märken is scoutshop.se &#62;&#62;
          </Link>
        </div>
        {/* TODO: placeholder wave */}
        <div className="w-full mt-10 mb-10 flex justify-center items-center">
          <Image
            src="/images/Body/blue_seperator.png"
            height={100}
            width={1000}
            alt=""
          />
        </div>
        {/* <Border /> */}
        <h2 className="font-heading text-primary text-lg font-bold text-center mb-6 sm:text-3xl sm:text-left">
          Märkesaffisch för din åldersgrupp
        </h2>
        {/* MOBILE VERSION */}
        <ul className="text-center sm:hidden">
          {markesaffischCardContent &&
            markesaffischCardContent.map((badge, index) => (
              <li key={index} className={`${badge.colourSchemeSecondary}`}>
                <h3
                  className={`font-heading font-bold pt-4 ${badge.colourSchemeHeading} text-lg`}
                >
                  {`${badge.title} ${badge.age}`}
                </h3>
                <div className="grid place-items-center">
                  <p className="pb-4 w-[90%] text-[15px]">{badge.subtitle}</p>
                </div>
                {badge.mobileImage &&
                  badge.mobileImage.map((image, index) => (
                    <div className="w-full" key={index}>
                      <Image
                        className="w-full h-auto"
                        src={image}
                        height={1200}
                        width={800}
                        alt={`${badge.title} emblems`}
                      />
                    </div>
                  ))}
              </li>
            ))}
        </ul>
        {/* DESKTOP VERSION */}
        <div className="hidden sm:flex sm:flex-col sm:text-center sm:w-full sm:items-center">
          <ul>
            {markesaffischCardContent &&
              markesaffischCardContent.map((badge, index) => (
                <li
                  key={index}
                  className={`border-[5px] ${badge.colourSchemeBorder} mb-6 rounded-sm p-6`}
                >
                  <div className="flex flex-row gap-2">
                    <div className="flex flex-col justify-center sm:w-50">
                      <div className="grid place-items-center w-full">
                        <Image
                          src={`/images/Agegroup/${badge.icon}`}
                          height={70}
                          width={70}
                          alt=""
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
                          className="w-full h-auto"
                          src={badge.desktopImage}
                          height={100}
                          width={800}
                          alt={`${badge.title} emblems`}
                        />
                      </div>
                      <p className="text-[15px] text-wrap">{badge.subtitle}</p>
                    </div>
                  </div>
                </li>
              ))}
          </ul>
        </div>
        {/* TODO: placeholder wave */}
        <div className="w-full mt-10 mb-10 flex justify-center items-center">
          <Image
            src="/images/Body/blue_seperator.png"
            height={100}
            width={1000}
            alt=""
          />
        </div>
        {/* MOBILE VERSION */}
        {scoutUniformCardContent && (
          <div className="sm:hidden">
            <h3 className="font-heading text-primary text-lg font-bold text-center mb-4">
              {scoutUniformCardContent[0].title}
            </h3>
            <div className="grid place-items-center">
              <p className="w-[90%]">{scoutUniformCardContent[0].subtitle}</p>
            </div>
            <div className="w-full">
              <Image
                src={scoutUniformCardContent[0].image_mobile_subtitle}
                height={100}
                width={1000}
                alt=""
              />
            </div>
            <div className="grid place-items-center">
              <p className="w-[90%]">
                {scoutUniformCardContent[0].second_subtitle}
              </p>
            </div>
            <div className="w-full">
              <Image
                src={scoutUniformCardContent[0].image_mobile_second_subtitle}
                height={100}
                width={1000}
                alt=""
              />
            </div>
            <div className="grid place-items-center">
              <p className="w-[90%]">
                {scoutUniformCardContent[0].third_subtitle}
              </p>
            </div>
            <div className="w-full">
              <Image
                src={scoutUniformCardContent[0].image_mobile_third_subtitle}
                height={100}
                width={1000}
                alt=""
              />
            </div>
          </div>
        )}
        {/* DESKTOP VERSION */}
        {scoutUniformCardContent && (
          <div className="hidden sm:flex sm:flex-col">
            <h3 className="sm:font-heading sm:text-primary sm:text-4xl sm:font-bold sm:text-center sm:mb-4">
              {scoutUniformCardContent[0].title}
            </h3>
            <p>
              {scoutUniformCardContent[0].subtitle}
              {scoutUniformCardContent[0].second_subtitle}
              {scoutUniformCardContent[0].third_subtitle}
            </p>
            <div className="sm:w-full sm:grid sm:place-items-center">
              <Image
                src={scoutUniformCardContent[0].desktopImage}
                height={1000}
                width={1000}
                alt=""
              />
            </div>
          </div>
        )}
        <div className="flex flex-col lg:flex-row lg:justify-around items-center lg:items-center lg:border lg:border-accent lg:bg-yellow-200 rounded-sm lg:p-4">
          <p className="text-primary font-bold text-center mt-6 sm:mt-0 sm:font-normal">
            Anvisningar för placering av de nya märkena på scoutskjortan.
          </p>
          {/* TODO: placeholder for button, need to add the file to download */}
          <div className="w-[80%] lg:w-auto flex justify-center items-center lg:flex rounded-sm pt-3 pb-3 pl-12 lg:pl-4 pr-12 lg:pr-4 text-accent cursor-pointer bg-primary font-bold mt-6 lg:mt-0">
            <Link href="/pdf/nya-maerkessystemet.pdf" download>
              Ladda ner PDF
            </Link>
          </div>
        </div>
      </div>
    </article>
  )
}

export default ScoutmarkenPage