import { varaBatarCardContentType } from "@/types/types"
import Image from "next/image"

const VaraBatarCard = (content: varaBatarCardContentType) => {

  const { title, description, waveImage, boatImage } = content

  return (
    <li>
      <section className="flex flex-col items-center">
        <h2 className="heading-3 text-center">{title}</h2>
        <p className="paragraph-light text-center">{description}</p>
        <div className="w-screen lg:w-full ml-0 lg:flex lg:justify-center lg:gap-5 lg:flex-row lg:flex-wrap flex flex-col gap-1">
          {boatImage && boatImage.map((boat, index) =>
            <Image key={index} src={`/images/Body/${boat.image}`} height={424} width={452} alt={boat.alt} className="h-auto w-auto object-cover lg:rounded-md lg:w-[30%]" />
          )}
        </div>
        <div className="lg:flex lg:justify-center md:flex md:justify-center">
          <Image src={`/images/Backgrounds/${waveImage}`} height={64} width={777} alt="" className="self-center lg:w-auto" />
        </div>
      </section>
    </li>
  )
}

export default VaraBatarCard