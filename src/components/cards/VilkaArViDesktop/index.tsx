import Image from "next/image";
import { vilkaArViContent, vilkaArViTextContent } from "@/data/vilkaArViCardContent";

const VilkaArViCardDesktop = () => {

  return (
    <article className="lg:container md:container lg:pt-0 ">
      <div className="hidden lg:flex lg:justify-center md:flex md:flex-col">
        {vilkaArViTextContent && vilkaArViTextContent.map((info, index) =>
          <p key={index} className="paragraph-light">{info.info}</p>
        )}
      </div>
      <div className="hidden lg:flex lg:justify-center lg:gap-5 md:flex md:flex-row md:gap-2">
        {vilkaArViContent && vilkaArViContent.map((image, index) =>
          <Image key={index} src={`/images/Body/${image.image}`} height={276} width={393} alt="vilka är vi" className="lg:rounded-md md:rounded-md md:h-50 md:w-[33.33%] lg:h-auto h-auto w-auto object-cover" />
        )}
      </div>
    </article>
  )
}

export default VilkaArViCardDesktop