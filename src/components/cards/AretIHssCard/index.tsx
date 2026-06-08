import { aretIHss } from "@/data/aretIHssContent"
import { aretIHssContentType } from "@/types/types"
import Image from "next/image"

const AretiHssCard = (content: aretIHssContentType) => {
  const { title, icon, months } = content

  return (
    <article className="container flex flex-col gap-3.75">
      <div className="border-b-5 border-accent flex w-fit gap-1 items-center pb-1">
        <h3 className="heading-3 text-blue-500">{title}</h3>
        <Image className="h2-icon" src={`/Icons/${icon}`} height={25} width={25} alt="" />
      </div>
      {months && months.map((month, index) => {
        const information = month.info.split('|')
        return (
          <div key={index} >
            <p className="paragraph-light font-bold text-blue-900 mb-0">{month.subtitle}</p>
            {information && information.map((info, index) => {
              return (
                <p key={index} className="paragraph-light mb-0">{info}</p>
              )
            })}
          </div>
        )
      })}
    </article >
  )
}

export default AretiHssCard
