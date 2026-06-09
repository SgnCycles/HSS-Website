import { varaBatarCardContent } from "@/data/varaBatarCardContent"
import { varaBatarCardContentType } from "@/types/types"
import Image from "next/image"

const VaraBatarCard = (content: varaBatarCardContentType) => {

  const { title, description, waveImage, boatImage } = content

  return (
    <article className="flex flex-col" >
      <h3 className="heading-3 text-center">{title}</h3>
      <p className="paragraph-light text-center">{description}</p>
      <div className="lg:flex lg:justify-center lg:gap-5 lg:flex-wrap">
        {boatImage && boatImage.map((boat, index) =>
          <Image key={index} src={`/images/Body/${boat.image}`} height={276} width={393} alt={boat.alt} className="h-auto w-[-webkit-fill-available] lg:rounded-md lg:w-[30%]" />
        )}
      </div>
      <div className="lg:flex lg:justify-center md:flex md:justify-center">
        <Image src={`/images/Backgrounds/${waveImage}`} height={64} width={777} alt="" className="self-center lg:w-auto" />
      </div>
    </article>
  )
}

export default VaraBatarCard
