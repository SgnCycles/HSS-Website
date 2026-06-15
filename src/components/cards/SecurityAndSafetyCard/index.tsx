import { securityAndSafetyCardContent } from "@/data/securityAndSafetyContent"
import { useTranslations } from "next-intl"
import Image from "next/image"

const SecurityAndSafetyCard = () => {

  const tCards = useTranslations('security-and-safety-cards')
  return (
    <ul className="cards-column section">
      {securityAndSafetyCardContent && securityAndSafetyCardContent.map((card, index) => (
        <li key={index} className="flex gap-4 rounded-md bg-primary m-2 min-h-[165]">
          <Image className="h-auto w-10 ml-5" src={card.icon} alt="" height={20} width={20} />
          <article className="flex-1 bg-secondary border-primary border-2 rounded-md p-2 md:pl-4 content-center">
            <h3 className="text-primary heading-3">{tCards(card.titleKey)}</h3>
            <p className="paragraph-light">{tCards(card.infoKey)}</p>
          </article>
        </li>
      ))}
    </ul>
  )
}

export default SecurityAndSafetyCard