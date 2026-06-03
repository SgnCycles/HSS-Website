import Image from "next/image"
import Link from "next/link"
import { vilkaArViContent, vilkaArViGamlaBatarContent, vilkaArViTextContent } from "@/data/vilkaArViCardContent"

const VilkaArViPage = () => {
  return (
    <section className="lg:gap-20 flex flex-col">
      <div className="lg:bg-[url(/images/Backgrounds/blueWavyBoat1.png)] lg:bg-size-[100%] lg:bg-no-repeat lg:bg-bottom">
        <article className="flex flex-col items-center font-body lg:m-auto lg:w-[70%] lg:px-0 ">
          <div className="flex flex-row items-center p-2.5 gap-2.5 lg:self-baseline lg:px-0 lg:py-5">
            <Image src={`/images/Logo/logo.png`} height={74} width={78} alt="" className="w-7.5 h-7.5 lg:h-18.5 lg:w-19.5" />
            <h1 className="font-heading text-[25px] font-semibold text-blue-900 lg:text-right lg:text-[55px]">Om HSS</h1>
          </div>
          <div className="flex gap-2 pl-2 pr-2 justify-center rounded-md w-fit border bg-secondary border-accent mb-5 lg:hidden">
            <p>Scoutkåren bildades 1959</p>
          </div>
          <div className="font-body lg:text-[20px]">
            {vilkaArViTextContent && vilkaArViTextContent.map((card, index) =>
              <div key={index} className="gap-5 flex flex-col items-center">
                <p className="px-5 pt-5 md:pb-5 md:pt-0 lg:px-0">{card.info}</p>
                <Image src={`/images/Body/${card.image}`} height={276} width={393} alt="vilka är vi" className="lg:hidden md:hidden w-[-webkit-fill-available]" />
              </div>
            )}
            <div className="hidden lg:flex lg:justify-center lg:gap-5 lg:pt-10 md:flex md:flex-row">
              {vilkaArViContent && vilkaArViContent.map((image, index) =>
                <Image key={index} src={`/images/Body/${image.image}`} height={276} width={393} alt="vilka är vi" className="lg:rounded-md md:w-[33.33%] lg:h-auto h-auto w-[-webkit-fill-available] aspect-video" />
              )}
            </div>
            <div>
              <h2 className="font-heading text-[20px] font-semibold text-blue-900 hidden lg:block lg:text-[30px] lg:py-5">Se andra dokument</h2>
              <div className="flex flex-col bg-yellow-200 p-5 font-body lg:border-accent lg:rounded-md lg:bg-secondary lg:border lg:text-[20px] lg:gap-5">
                <h2 className="font-heading text-[20px] font-semibold text-blue-900 lg:hidden">Se andra dokument</h2>
                <Link target="_blank" href="/pdf/Stadgar-Hasselby-Strands-Sjoscoutkar-beslutad-2025-10-22-signerade.pdf" className="underline underline-offset-2 text-blue-900">Stadgar för Hässelby Strands Sjöscoutkår →</Link>
                <Link target="_blank" href="/pdf/Verksamhetsplan-for-perioden-2025-09-01-2026-12-31.pdf" className="underline underline-offset-2 text-blue-900">Verksamhetsplan för perioden 2025-2026 →</Link>
                <Link target="_blank" href="/pdf/HSS-karstamma-2025-10-22-protokoll-signerat" className="underline underline-offset-2 text-blue-900">HSS Kår stämma för 2025 →</Link>
              </div>
            </div>
          </div>
        </article>
      </div>
      <article className="flex flex-col font-body bg-[url(/images/Backgrounds/boatBackground1.png)] bg-size-[119px] bg-no-repeat bg-top-right lg:m-auto lg:w-[70%] lg:bg-size-[258px]">
        <div className="flex flex-row items-center p-5 gap-2.5 pb-0 lg:p-0">
          <Image src={`/Icons/yellow-anchor-icon.svg`} height={30} width={30} alt="" className="h-max" />
          <h2 className="font-heading text-[25px] font-semibold text-blue-900 lg:text-[40px] lg:py-5">Historien om HSS</h2>
        </div>
        <div className="p-5 gap-5 flex flex-col lg:p-0 lg:text-[20px]">
          <p>HSS grundades år 1959 och växte snabbt tack vare ett starkt engagemang från både ledare, föräldrar och scouter. Tillsammans hjälptes man åt att bygga upp verksamheten genom aktiviteter, insamlingar och ideellt arbete.</p>
          <p>Kårens första båt, Igelknäcken (“Inga-Lunda”), blev starten på HSS starka sjöscouttradition. Med tiden kunde fler båtar köpas in tack vare basarer, lotterier och ett stort gemensamt engagemang.
            Under 1960-talet fortsatte kåren att växa. Fler barn och ungdomar hittade till scoutinglivet, och segling på Mälaren blev en självklar del av verksamheten. Nya båtar sjösattes och sjölivet blev en viktig del av gemenskapen.</p>
          <p>Behovet av en egen samlingsplats på land växte också fram. Genom många ideella krafter byggdes scoutstugan Myset, som invigdes 1968. Än idag används den som en plats för läger, gemenskap och minnen.</p>
          <p className="lg:pb-15">Sedan starten har HSS varit en sjöscoutkår präglad av gemenskap, samarbete och äventyr. Det är en tradition som fortfarande lever vidare idag.</p>
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:gap-5 lg:justify-center md:flex-row">
          {vilkaArViGamlaBatarContent && vilkaArViGamlaBatarContent.map((image, index) =>
            <Image key={index} src={`/images/Body/${image.image}`} height={276} width={393} alt="historia om båtar" className="lg:max-h-65 lg:rounded-md md:w-[33.33%] h-auto w-[-webkit-fill-available] aspect-video" />
          )}
        </div>
        <Image src={`/images/Backgrounds/blueWavyLine.png`} height={29} width={350} alt="" className="self-center lg:w-194.25" />
      </article >
    </section >
  )
}

export default VilkaArViPage