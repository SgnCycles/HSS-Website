import { securityAndSafetyCardContent } from "@/data/securityAndSafetyContent"
import Image from "next/image"

const SecurityAndSafetyCard = () => {
  return (
    <ul className="flex flex-col gap-1">
      {securityAndSafetyCardContent && securityAndSafetyCardContent.map((card, index) => (
        <li key={index} className="flex gap-4 rounded-md bg-primary m-2 min-h-32.5">
          <Image className="h-auto w-10 ml-5" src={card.icon} alt="" height={20} width={20}></Image>
          <article className="flex-1 bg-secondary border-primary border-2 rounded-md p-2">
            <h2 className="text-primary font-bold text-lg font-heading m-1 ">{card.title}</h2>
            <p className="font-body text-sm ml-1 md:text-[20px]">{card.info}</p>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default SecurityAndSafetyCard