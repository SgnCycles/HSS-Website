import { engageraDigCardContent } from "@/data/engageraDigCardContent"
import Image from "next/image"

const EngageraDigSomVuxenPage = () => {
  return (
    <article className="bg-[#FFFFFF] font-body text-grey-500 p-6 md:grid md:place-items-center">
      <div className="md:w-[40%]">
        <div className="flex w-full justify-center items-center pb-2">
          <Image src={`/icons/engagera-icon.svg`} height={30} width={30} alt=""/>
          <h1 className="font-heading text-primary text-[25px] md:text-[40px] font-extrabold pl-2 md:text-5xl">Engagera dig som vuxen</h1>
        </div>
        <p className="pb-4">
          Som förälder behöver du inte ta på dig ett fast uppdrag.
          Även tillfällig hjälp är ovärderlig för kårens vardag.
        </p>
        <ul className="flex flex-col gap-6 md:gap-6 pb-6 md:pb-0">
          {engageraDigCardContent && engageraDigCardContent.map((card, index) => (
            <li key={index} className="flex border border-[#1E7BC4] rounded-md pt-2 pb-2 bg-blue-100 h-17">
              <div className="w-[20%] grid place-items-center">
                <span className="text-3xl md:text-4xl">{card.icon}</span>
              </div>
              <div className="grid place-items-center">
                <p className="text-base font-semibold pr-2">{card.title}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
      <div className="md:bg-yellow-200 md:border md:border-accent md:mt-6 md:p-6 md:rounded-md">
        <h3 className="text-primary text-center text-lg font-semibold pb-1 md:text-left md:pb-4">
          Vet du inte var du passar in?
        </h3>
        <p className="text-base">
          Hör av dig så berättar vi mer om vad som behövs just nu.
          Alla bidrag räknas, stora som små.
        </p>
        {/* TODO: button bellow will be replaced with button element when ready */}
        <div className="border border-blue-500 bg-primary rounded-sm p-4 md:p-2 text-xl text-accent cursor-pointer mt-4 grid place-items-center font-semibold md:w-[35%] md:place-self-end">
          <a href="mailto:info@hss-scout.org">Kontakta oss</a>
        </div>
      </div>
    </article>
  )
}

export default EngageraDigSomVuxenPage