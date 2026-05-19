import Image from "next/image"

import { HomeHeroProps } from "@/types/types"

export default function HomeHero({src,alt,width,height,className}:HomeHeroProps){

  return(

    <div className="w-[90%]  mx-auto">
      <Image src={src} alt={alt} width={width} height={height} className={`${className}`}></Image>
    </div>
  )
}