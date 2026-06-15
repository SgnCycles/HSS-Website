import Image from "next/image";
import { aboutUs } from "@/data/vilkaArViCardContent";
import { useTranslations } from "next-intl";

const VilkaArViCardMobile = () => {
  const t = useTranslations('vilka-ar-vi')
  return (
    <article className="block lg:hidden md:hidden">
      {aboutUs && aboutUs.map((card) =>
        <div key={card.id} className="flex flex-col items-center w-screen">
          <p className="container paragraph-light mb-0">{t(`history${card.id}card.text`)}</p>
          <Image src={card.image} height={276} width={393} alt="vilka är vi" className="w-[-webkit-fill-available]" />
        </div>
      )}
    </article>
  )
}

export default VilkaArViCardMobile