import { varaBatarContent } from "@/data/varaBatarContent"
import Image from "next/image"

const VaraBatarPage = () => {
  return (
    <section className="section lg:bg-[url(/images/Backgrounds/blueWavyBoat2.png)] lg:bg-contain md:bg-hidden lg:bg-no-repeat lg:bg-top">
      <article className="container flex flex-col">
        <div className="flex lg:justify-center">
          <Image className="h2-icon" src={`/Icons/sail-boat-icon.svg`} height={30} width={30} alt="" />
          <h2 className="heading-2">Vår nuvarande flotta</h2>
        </div>
        <p className="paragraph-light">HSS är en av de mest ambitiösa sjöscoutkårer i Sverige. Vi har en bred och varierad flotta som används för både utbildning, segling och säkerhet på vattnet. Våra båtar ger scouter möjlighet att utvecklas från nybörjare till erfarna seglare.</p>
      </article>
      <div className="lg:flex lg:justify-center lg:gap-5 lg:flex-wrap">
        {varaBatarContent && varaBatarContent.slice(0, 3).map((image, index) =>
          <Image key={index} src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-[-webkit-fill-available] lg:rounded-md lg:w-98.25" />
        )}
      </div>
      <div className="lg:flex lg:justify-center md:flex md:justify-center">
        <Image src={`/images/Backgrounds/wavyLineTransparent.png`} height={64} width={777} alt="" className="self-center" />
      </div>
      <article className="container">
        <h3 className="heading-3 text-center">Utbildningsjollar (Optimistjollar)</h3>
        <p className="paragraph-light text-center">Apotekarne, Kausarne, Vantarne, Plopp, Cloetta, Snobben, Titanic och övningsseglar</p>
      </article>
      <div className="lg:flex lg:justify-center lg:gap-5">
        {varaBatarContent && varaBatarContent.slice(3, 5).map((image, index) =>
          <Image key={index} src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-[-webkit-fill-available] lg:rounded-md lg:w-98.25" />
        )}
      </div>
      <div className="lg:flex lg:justify-center md:flex md:justify-center">
        <Image src={`/images/Backgrounds/wavyLineTransparent.png`} height={64} width={777} alt="" className="self-center" />
      </div>
      <article className="container">
        <h3 className="heading-3 text-center">Tvåkronor</h3>
        <p className="paragraph-light text-center">Våra tvåkronor används för utbildning och segling i större besättning → Piff och Puff</p>
      </article>
      <div className="lg:flex lg:justify-center lg:gap-5">
        {varaBatarContent && varaBatarContent.slice(5, 7).map((image, index) =>
          <Image key={index} src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-[-webkit-fill-available] lg:rounded-md lg:w-98.25" />

        )}
      </div>
      <div className="lg:flex lg:justify-center md:flex md:justify-center">
        <Image src={`/images/Backgrounds/wavyLineTransparent.png`} height={64} width={777} alt="" className="self-center" />
      </div>
      <article className="container">
        <h3 className="heading-3 text-center">Följebåtar</h3>
        <p className="paragraph-light text-center">För säkerhet och stöd vid aktiviteter på vattnet använder vi  Tryggve IV och Ebbe</p>
      </article>
      <div className="lg:flex lg:justify-center lg:gap-5">
        {varaBatarContent && varaBatarContent.slice(7, 9).map((image, index) =>
          <Image key={index} src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-[-webkit-fill-available] lg:rounded-md lg:w-98.25" />
        )}
      </div>
      <div className="lg:flex lg:justify-center md:flex md:justify-center">
        <Image src={`/images/Backgrounds/wavyLineTransparent.png`} height={64} width={777} alt="" className="self-center" />
      </div>
      <article className="container">
        <h3 className="heading-3 text-center">Albin Viggar</h3>
        <p className="paragraph-light text-center">Vi har även två Albin Viggar →  Lumbago och Cephalea</p>
      </article>
      <div className="lg:flex lg:justify-center lg:gap-5">
        {varaBatarContent && varaBatarContent.slice(9, 11).map((image, index) =>
          <Image key={index} src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-[-webkit-fill-available] lg:rounded-md lg:w-98.25" />
        )}
      </div>
      <div className="lg:flex lg:justify-center md:flex md:justify-center">
        <Image src={`/images/Backgrounds/wavyLineTransparent.png`} height={64} width={777} alt="" className="self-center" />
      </div>
      <article className="container">
        <h3 className="heading-3 text-center">H-båtar</h3>
        <p className="paragraph-light text-center">Våra H-båtar används för längre seglingar och mer avancerad träning →  Nocke, Vendela och Goofy</p>
      </article>
      <div className="lg:flex lg:justify-center lg:gap-5 lg:flex-wrap">
        {varaBatarContent && varaBatarContent.slice(11, 14).map((image, index) =>
          <Image key={index} src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-[-webkit-fill-available] lg:rounded-md lg:w-98.25" />
        )}
      </div>
      <div className="lg:flex lg:justify-center md:flex md:justify-center">
        <Image src={`/images/Backgrounds/wavyLineTransparent.png`} height={64} width={777} alt="" className="self-center" />
      </div>
    </section>
  )
}

export default VaraBatarPage