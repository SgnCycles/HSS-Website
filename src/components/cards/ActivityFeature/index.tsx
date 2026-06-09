"use client"
import ActivityCard from "../ActivityCard"
import { activityFeatureContent } from "@/data/activityFeatureContent"
import Image from "next/image"
import { usePathname } from "next/navigation"
import Link from "next/link"
import { useTranslations } from "next-intl"
import Button from "@/components/buttons/Button"

const ActivityFeature = () => {
  const t = useTranslations('vad-gor-vi')

  const pathname = usePathname()
  const isHomePage = pathname === "/" || pathname === "/sv" || pathname === "/en"
  const t = useTranslations('vad-gor-vi')

  return(
    <div>
      <article className="font-body container">
        <div>
          <div className="text-center lg:flex">
            <div className="flex p-1 justify-center">
              <Image className="h2-icon" src={activityFeatureContent.icon} alt="" width={20} height={20} />
              <h2 className="heading-2">{t('titleKey')}</h2>
            </div>
            <div className="flex gap-2 pl-2 pr-2 justify-center lg:rounded-lg lg:border lg:ml-4 lg:mt-auto lg:mb-auto lg:bg-secondary lg:border-accent">
              <Image className="hidden mt-1 w-4 h-4 lg:block" src={activityFeatureContent.subIcon} alt="" width={20} height={20} />
              <p className="mb-4 text-base font-body lg:mb-0 lg:ml-0">{t('subTitleKey')}</p>
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
            <Image className="hidden h-auto w-full object-cover object-top mt-6 lg:mt-0 md:block lg:max-w-87.5 rounded-md border border-accent" src={"/images/Body/home_body1.png"} alt="" height={1000} width={1000} />
          </div>
        </div>
      </article>
      <Image className="h-auto w-full card pl-0 pr-0 pt-0 rounded-none object-cover object-top lg:rounded-md lg:border lg:border-accent lg:mt-0 md:hidden" src={"/images/Body/home_body1.png"} alt="" height={1000} width={1000} />
      {isHomePage && (
        <div className="flex justify-center container lg:hidden">
          <Button
            ariaLabel=""
            href="/vad-gor-vi"
            variant="secondaryBlue"
            text={`${t('readMoreKey')}→`}
            target="_self"
          />
        </div>
      )}
    </div>
  )
}

export default ActivityFeature