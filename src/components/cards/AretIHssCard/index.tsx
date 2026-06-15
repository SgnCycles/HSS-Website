import { aretIHss } from "@/data/aretIHssContent"
import { aretIHssContentType } from "@/types/types"
import Image from "next/image"

const AretiHssCard = (content: aretIHssContentType) => {
  
  const { title, icon, months } = content

  return (
    <li className="grid grid-cols-1 md:grid-cols-[1fr_5fr] auto-rows-auto gap-4 md:gap-y-6 md:gap-x-12">
      <div className="md:col-start-1 md:row-start-1 row-span-full">
        <div className="border-b-5 border-accent flex w-fit md:w-full gap-1 items-center pb-1">
          <h2 className="heading-3 text-blue-500">{title}</h2>
          <Image className="h2-icon mr-0" src={`/Icons/${icon}`} height={25} width={25} alt="" />
        </div>
      </div>
      {months && months.map((month, index) => {
        const information = month.info.split('|')
        return (
          <section className="md:col-start-2" key={index}>
            <h3 className="paragraph-light font-bold text-blue-900 mb-0">{month.subtitle}</h3>
            {information && information.map((info, index) => {
              return (
                <p key={index} className="paragraph-light mb-0">{info}</p>
              )
            })}
          </section>
        )
      })}
    </li >
  )
}

export default AretiHssCard
