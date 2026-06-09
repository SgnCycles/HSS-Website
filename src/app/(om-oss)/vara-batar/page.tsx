import { varaBatarContent } from "@/data/varaBatarContent"
import { varaBatarCardContent } from "@/data/varaBatarCardContent"
import Image from "next/image"
import VaraBatarCard from "@/components/cards/VaraBatarCard"

const VaraBatarPage = () => {
  return (
    <main id="main-content">
      <section className="container">
        <div className="flex flex-col">
          <div className="flex lg:justify-center">
            <Image className="h2-icon" src={`/Icons/sail-boat-icon.svg`} height={30} width={30} alt="" />
            <h2 className="heading-2">Vår nuvarande flotta</h2>
          </div>
          <p className="paragraph-light">HSS är en av de mest ambitiösa sjöscoutkårer i Sverige. Vi har en bred och varierad flotta som används för både utbildning, segling och säkerhet på vattnet. Våra båtar ger scouter möjlighet att utvecklas från nybörjare till erfarna seglare.</p>
          <div className="lg:flex lg:justify-center lg:gap-5 lg:flex-wrap">
            {varaBatarContent && varaBatarContent.map((image, index) =>
              <Image key={index} src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-[-webkit-fill-available] lg:rounded-md lg:w-[30%]" />
            )}
          </div>
          <div className="lg:flex lg:justify-center md:flex md:justify-center">
            <Image src={`/images/Backgrounds/wavyLineTransparent.png`} height={64} width={777} alt="" className="self-center lg:w-auto" />
          </div>
        </div>
      </section>
      <section className="container flex flex-col gap-[40px]">
        {varaBatarCardContent && varaBatarCardContent.map((content, index) => {
          return (
            <VaraBatarCard key={index} {...content} />
          )
        })}
      </section>
    </main >
  )
}

export default VaraBatarPage