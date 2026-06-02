import { varaBatarContent } from "@/data/varaBatarContent"
import Image from "next/image"

const VaraBatarPage = () => {
  return (
    <section>
      <article className="container flex flex-col">
        <div className="flex">
          <Image className="h2-icon" src={`/Icons/sail-boat-icon.svg`} height={30} width={30} alt="" />
          <h2 className="heading-2">Vår nuvarande flotta</h2>
        </div>
        <p className="paragraph-light">HSS är en av de mest ambitiösa sjöscoutkårer i Sverige. Vi har en bred och varierad flotta som används för både utbildning, segling och säkerhet på vattnet. Våra båtar ger scouter möjlighet att utvecklas från nybörjare till erfarna seglare.</p>
      </article>
      {varaBatarContent && varaBatarContent.slice(0, 3).map((image, index) =>
        <div key={index} >
          <Image src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-auto" />
        </div>
      )}
      <div>
        <Image src={`/images/Backgrounds/blueWavyLine.png`} height={35} width={425} alt="" className="self-center" />
      </div>
      <article className="container">
        <h3 className="heading-3">Utbildningsjollar (Optimistjollar)</h3>
        <p className="paragraph-light">Apotekarne, Kausarne, Vantarne, Plopp, Cloetta, Snobben, Titanic och övningsseglar</p>
      </article>
      {varaBatarContent && varaBatarContent.slice(3, 5).map((image, index) =>
        <div key={index} >
          <Image src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-auto" />
        </div>
      )}
      <div>
        <Image src={`/images/Backgrounds/blueWavyLine.png`} height={35} width={425} alt="" className="self-center" />
      </div>
      <article className="container">
        <h3 className="heading-3">Tvåkronor</h3>
        <p className="paragraph-light">Våra tvåkronor används för utbildning och segling i större besättning → Piff och Puff</p>
      </article>
      {varaBatarContent && varaBatarContent.slice(5, 7).map((image, index) =>
        <div key={index} >
          <Image src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-auto" />
        </div>
      )}
      <div>
        <Image src={`/images/Backgrounds/blueWavyLine.png`} height={35} width={425} alt="" className="self-center" />
      </div>
      <article className="container">
        <h3 className="heading-3">Följebåtar</h3>
        <p className="paragraph-light">För säkerhet och stöd vid aktiviteter på vattnet använder vi  Tryggve IV och Ebbe</p>
      </article>
      {varaBatarContent && varaBatarContent.slice(7, 9).map((image, index) =>
        <div key={index} >
          <Image src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-auto" />
        </div>
      )}
      <div>
        <Image src={`/images/Backgrounds/blueWavyLine.png`} height={35} width={425} alt="" className="self-center" />
      </div>
      <article className="container">
        <h3 className="heading-3">Albin Viggar</h3>
        <p className="paragraph-light">Vi har även två Albin Viggar →  Lumbago och Cephalea</p>
      </article>
      {varaBatarContent && varaBatarContent.slice(9, 11).map((image, index) =>
        <div key={index} >
          <Image src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-auto" />
        </div>
      )}
      <div>
        <Image src={`/images/Backgrounds/blueWavyLine.png`} height={35} width={425} alt="" className="self-center" />
      </div>
      <article className="container">
        <h3 className="heading-3">H-båtar</h3>
        <p className="paragraph-light">Våra H-båtar används för längre seglingar och mer avancerad träning →  Nocke, Vendela och Goofy</p>
      </article>
      {varaBatarContent && varaBatarContent.slice(11, 14).map((image, index) =>
        <div key={index} >
          <Image src={`/images/Body/${image.image}`} height={276} width={393} alt="våra båtar" className="h-auto w-auto" />
        </div>
      )}
      <div>
        <Image src={`/images/Backgrounds/blueWavyLine.png`} height={35} width={425} alt="" className="self-center" />
      </div>
    </section>
  )
}

export default VaraBatarPage