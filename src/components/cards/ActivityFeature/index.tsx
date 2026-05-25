"use client"
import ActivityCard from "../ActivityCard"
import { activityFeatureContent } from "@/data/activityFeatureContent"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"

const ActivityFeature = () => {

  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return(
    <div className="md:w-[80%] lg:w-[70%] mx-auto">
      <div className="text-center md:flex ">
        <div className="flex gap-2 p-1 justify-center">
          <Image className="w-5 h-auto md:w-7.5"
            src={activityFeatureContent.icon}
            alt={activityFeatureContent.title}
            width={20}
            height={20}
          />
          <h1 className="text-2xl font-heading font-extrabold text-primary md:text-4xl">{activityFeatureContent.title}</h1>
        </div>
        <div className="flex gap-2 pl-2 pr-2 justify-center md:rounded-md md:border md:ml-4 md:mt-auto md:mb-auto md:bg-secondary md:border-accent ">
          <Image className="hidden mt-1 w-4 h-4 md:block"
            src={activityFeatureContent.subIcon}
            alt={activityFeatureContent.title}
            width={20}
            height={20}
          />
          <p className="mb-4 font-body md:mb-0 md:ml-0">{activityFeatureContent.subTitle}</p>
        </div>
      </div>
        <p className="hidden m-6 text-2xl md:block">{activityFeatureContent.infoDescFirst}</p>
        <p className="hidden m-6 text-2xl md:block">{activityFeatureContent.infoDescSecond}</p>
      <div className="mt-4 md:flex">
        <ActivityCard />
        {!isHomePage && (
          <p className="text-base font-normal m-4 font-body md:hidden">{activityFeatureContent.info}</p>
        )}
        <Image className="h-auto w-full mt-6 object-cover md:rounded-md md:border md:border-accent md:ml-3 md:mt-0"
          src={"/images/Body/home_body1.png"} 
          alt="Scouts" 
          height={1000} 
          width={1000} 
        />
        {isHomePage && (
          <div className="flex justify-center m-2 md:hidden">
            <Link className="rounded-md border bg-primary pt-4 pb-4 pr-2 pl-2 text-white text-[16px] font-body font-bold" href={"/vad-gor-vi"}>Läs mer om vad vi gör i scout</Link>
          </div>
        )}
      </div>
    </div>
  )
}

export default ActivityFeature