import Image from "next/image";
import { vilkaArViContentMobile } from "@/data/vilkaArViCardContent";

const VilkaArViCardMobile = () => {

  return (
    <article className="block lg:hidden md:hidden">
      {vilkaArViContentMobile && vilkaArViContentMobile.map((card, index) =>
        <div key={index} className="flex flex-col items-center w-screen">
          <p className="container paragraph-light mb-0">{card.info}</p>
          <Image src={`/images/Body/${card.image}`} height={276} width={393} alt="vilka är vi" className="w-[-webkit-fill-available]" />
        </div>
      )}
    </article>
  )
}

export default VilkaArViCardMobile
