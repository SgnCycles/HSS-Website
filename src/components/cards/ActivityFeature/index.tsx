"use client"
import ActivityCard from "../ActivityCard"
import { activityFeatureContent } from "@/data/activityFeatureContent"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useTranslations } from "next-intl";


const ActivityFeature = () => {
  const t = useTranslations('vad-gor-vi')

  const pathname = usePathname()
  const isHomePage = pathname === "/"

  return (
    <main>
      <article className="font-body container">
        <div className="text-center lg:flex ">
          <div className="flex gap-2 p-1 justify-center">
            <Image className="h2-icon" src={activityFeatureContent.icon} alt="" width={20} height={20} />
            <h2 className="heading-2">
              {/* TODO: make translations dynamic  */}
              {t('titleKey')}
              {/* {activityFeatureContent.title} */}
            </h2>
          </div>
          <div className="flex gap-2 pl-2 pr-2 justify-center lg:rounded-lg lg:border lg:ml-4 lg:mt-auto lg:mb-auto lg:bg-secondary lg:border-accent ">
            <Image className="hidden mt-1 w-4 h-4 lg:block" src={activityFeatureContent.subIcon} alt="" width={20} height={20} />
            <p className="mb-4 font-body lg:mb-0 lg:ml-0">
              {/* {activityFeatureContent.subTitle} */}
              {t('subTitleKey')}
            </p>
          </div>
          {!isHomePage && (
            <Image className="hidden absolute -z-10  h-auto w-75 right-1 top-125 lg:block" src={"/images/Backgrounds/boatBackground1.png"} alt="Boat" height={1000} width={1000} />
          )}
        </div>
        <p className="hidden paragraph-light lg:block">{t('infoDescFirstKey')}</p>
        <p className="hidden paragraph-light lg:block">{t('infoDescSecondKey')}</p>
        <div className="mt-4 lg:flex section">
          <ActivityCard />
          {!isHomePage && (
            <p className="paragraph-light pt-6 lg:hidden">{t('infoKey')}</p>
          )}
          <Image className="hidden h-auto w-full object-cover object-top mt-6 lg:mt-0 md:block rounded-md border border-accent" src={"/images/Body/home_body1.png"} alt="" height={1000} width={1000} />
        </div>
      </article>
      <Image className="h-auto w-full card pl-0 pr-0 pt-0 rounded-none object-cover object-top lg:rounded-md lg:border lg:border-accent lg:mt-0 md:hidden" src={"/images/Body/home_body1.png"} alt="" height={1000} width={1000} />
      {isHomePage && (
        <div className="flex container pt-0 justify-center lg:hidden">
          <Link className="rounded-sm border w-full  text-center bg-primary pt-4 pb-4 pr-2 pl-2 text-white text-[16px] font-body font-bold" href="/vad-gor-vi">{t('readMoreKey')}</Link>
        </div>
      )}
    </main>
  )
}

export default ActivityFeature