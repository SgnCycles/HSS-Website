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
    <article className="relative mt-6 mb-6 lg:w-[80%] xl:w-[60%] mx-auto font-body lg:mt-24">
      <div className="">
        <div className="text-center lg:flex ">
          <div className="flex gap-2 p-1 justify-center">
            <Image className="w-5 h-auto lg:w-7.5" src={activityFeatureContent.icon} alt="" width={20} height={20} />
            <h2 className="text-[30px] font-heading font-extrabold text-primary md:text-[40px] lg:text-4xl">{activityFeatureContent.title}</h2>
          </div>
          <div className="flex gap-2 pl-2 pr-2 justify-center lg:rounded-lg lg:border lg:ml-4 lg:mt-auto lg:mb-auto lg:bg-secondary lg:border-accent ">
            <Image className="hidden mt-1 w-4 h-4 lg:block" src={activityFeatureContent.subIcon} alt="" width={20} height={20} />
            <p className="mb-4 font-body lg:mb-0 lg:ml-0">{activityFeatureContent.subTitle}</p>
          </div>
          {!isHomePage && (
            <Image className="hidden absolute -z-10 -right-35 -top-25 h-auto w-75 md:-right-20 lg:block" src={"/images/Backgrounds/boatBackground1.png"} alt="Boat" height={1000} width={1000} />
          )}
        </div>
        <p className="hidden mt-6 mb-6 text-[20px] lg:block">{activityFeatureContent.infoDescFirst}</p>
        <p className="hidden mt-6 mb-6 text-[20px] lg:block">{activityFeatureContent.infoDescSecond}</p>
        <div className="mt-4 xl:max-h-125 lg:flex">
          <ActivityCard />
          {!isHomePage && (
            <p className="text-base font-normal m-4 font-body lg:hidden">{activityFeatureContent.info}</p>
          )}
          <Image className="h-auto w-full mt-6 object-cover object-top lg:rounded-lg lg:border lg:border-accent lg:ml-3 lg:mt-0" src={"/images/Body/home_body1.png"} alt="" height={1000} width={1000} />
          {isHomePage && (
            <div className="flex justify-center m-2 lg:hidden">
              <Link className="rounded-sm border w-[90%] text-center bg-primary mt-4 pt-4 pb-4 pr-2 pl-2 text-white text-[16px] font-body font-bold" href="/vad-gor-vi">Läs mer om vad vi gör i scout</Link>
            </div>
          )}
        </div>
      </div>
    </article>
  )
}

export default ActivityFeature