import Link from "next/link";
import Image from "next/image";
import { LogoProps } from "@/types/types";



export default function Logo({src,alt,width,height,className}:LogoProps){


  return(

    <Link href="/"><Image src={src} alt={alt} width={width} height={height} className={`cursor-pointer ${className}`}></Image></Link>
  )
}