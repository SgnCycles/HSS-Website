import AretiHssCard from "@/components/cards/AretIHssCard"
import { aretIHss } from "@/data/aretIHssContent"
import Image from "next/image"

const AretiHssPage = () => {
  return (
    <main id="main-content">
      <section className="container flex flex-col">
        <div className="flex justify-center">
          <Image className="h2-icon" src={`/Icons/yellow-calendar-icon.svg`} height={30} width={30} alt="" />
          <h2 className="heading-2">Året i HSS</h2>
        </div>
        <div className="text-base font-body flex gap-2 pl-2 pr-2 justify-center rounded-md w-fit border bg-secondary border-accent text-center self-center">
          <p>Återkommande aktiviteter och traditioner</p>
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