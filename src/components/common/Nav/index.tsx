import Link from "next/link";
import Image from "next/image";
import { navItems } from "@/data/navMenu";


interface MenuItems{
   title:string,
   content:string[]
}

interface NavProps{
  items: MenuItems[]
}

export default function Nav({items}:NavProps){


  return(

    <div className="relative flex justify-center items-center bg-cover w-full h-[181px]"  style={{backgroundImage: "url('/images/Backgrounds/gradientHero.svg')"}}>
      <Link href="/"><Image src="/images/Logo/logo.png" alt="HSS Scout logo" width={214} height={203} className="absolute w-[55px] h-[55px] md:w-[214px] md:h-[203px] top-[20px] left-[18px]"/></Link>
      <div className="hidden absolute top-[37px] left-[648px] font-body text-background md:gap[77px] md:flex md:justify-evenly md:w-[866px] md:h-[52px]">

        {items.map((item,index)=> {
          return <button key={index} className="flex justify-center items-center font-body font-bold cursor-pointer">{item.title}<Image src="/Icons/nav-arrow.svg" alt="menu-icon" width={24} height={24} /></button>
        } )}

        <div>
          {}
        </div>
        
        
      </div>
    </div>
  )
}