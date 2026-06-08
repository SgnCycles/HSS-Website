import AretiHssCard from "@/components/cards/AretIHssCard"
import { aretIHss } from "@/data/aretIHssContent"
import Image from "next/image"

const AretiHssPage = () => {
  return (
    <main id="main-content">
      <section className="full-bleed flex flex-col lg:bg-[url(/images/Backgrounds/blueWavyBoat2.png)] lg:bg-size-[100%] lg:bg-no-repeat lg:bg-top bg-[url(/images/Backgrounds/boatBackground1.png)] bg-size-[175px] bg-no-repeat bg-right">
        <div className="container flex justify-center lg:justify-start flex-col items-center lg:flex-row">
          <div className="flex lg:flex-row">
            <Image className="h2-icon" src={`/Icons/yellow-calendar-icon.svg`} height={30} width={30} alt="" />
            <h2 className="heading-2">Året i HSS</h2>
          </div>
          <div className="text-base font-body flex gap-2 pl-2 pr-2 justify-center rounded-md w-fit border bg-secondary border-accent text-center self-center lg:ml-4">
            <p>Återkommande aktiviteter och traditioner</p>
          </div>
        </div>
        {aretIHss && aretIHss.map((content, index) => {
          return (
            <AretiHssCard key={index} {...content} />
          )
        })}
      </section>
    </main>
  )
}

export default AretiHssPage