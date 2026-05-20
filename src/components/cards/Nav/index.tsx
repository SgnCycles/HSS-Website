import Link from "next/link";
import Image from "next/image";
import { NavProps } from "@/types/types";
export default function Nav({items}:NavProps){


  return(

    <div className="relative flex justify-center items-center bg-cover w-full h-[181px]"  style={{backgroundImage: "url('/images/Backgrounds/gradientHero.svg')"}}>
      <Link href="/"><Image src="/images/Logo/logo.png" alt="HSS Scout logo" width={214} height={203} className="absolute w-[55px] h-[55px] sm:w-[214px] sm:h-[203px] top-[20px] left-[18px]"/></Link>
      <h1 className="font-body text-accent text-4xl font-extrabold">Hello</h1>
      <div className="flex">
        {items?.map((item) => item.title)}
        
      </div>
    </div>
  )
}