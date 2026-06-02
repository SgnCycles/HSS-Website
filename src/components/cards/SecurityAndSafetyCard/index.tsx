import { securityAndSafetyCardContent } from "@/data/securityAndSafetyContent"
import Image from "next/image"

const SecurityAndSafetyCard = () => {
  return (
    <ul className="cards-column section">
      {securityAndSafetyCardContent && securityAndSafetyCardContent.map((card, index) => (
        <li key={index} className="flex gap-4 rounded-md bg-primary m-2 min-h-[165]">
          <Image className="h-auto w-10 ml-5" src={card.icon} alt="" height={20} width={20}></Image>
          <article className="flex-1 bg-secondary border-primary border-2 rounded-md p-2 md:pl-4">
            <h2 className="text-primary heading-2 text-[24px] md:text-[30px]">{card.title}</h2>
            <p className="paragraph-light">{card.info}</p>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default SecurityAndSafetyCard