"use client"
import SecurityAndSafetyCard from "../SecurityAndSafetyCard"
import { securityAndSafetyCheckContent, securityAndSafetyInfoContent, securityAndSafetyPopupContent } from "@/data/securityAndSafetyContent"
import { useTranslations } from "next-intl"
import Image from "next/image"
import { useState, useEffect } from "react"

const SecurityAndSafetyFeature = () => {

  const [popup, setPopup] = useState(false)

  useEffect(() => {
    if (popup) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "initial"
    }
  }, [popup])

  const tPopUp = useTranslations('securityPopup')
  const tInfo = useTranslations('security-and-safety-info')
  const tChecks = useTranslations('security-and-safety-checks')
  const tPage= useTranslations('security-and-safety-page')
 


  return (
    <article className="flex flex-col items-center self-center container">
      <div className="flex flex-col items-center lg:flex-row lg:items-start lg:gap-10 lg:justify-between">
        <section className="flex flex-col items-center lg:mb-6 lg:mt-6 lg:items-start">
          <div className="flex items-center justify-center w-full lg:p-4 lg:pt-0">
            <Image className="h1-icon" src={"/Icons/yellow-shield-cross-icon.svg"} alt="" height={40} width={40} />
            <h1 className="heading-1 text-primary">{tPage('page-title')}</h1>
          </div>
          <p className="pb-4 pt-0 paragraph-light text-center max-w-lg lg:text-left lg:p-0 lg:pl-6">{tPage('sub-title')}</p>
        </section>
        <div className="mt-auto">
          <ul className="flex flex-col mb-4 ">
            {securityAndSafetyCheckContent && securityAndSafetyCheckContent.map((box, index) => (
              <li className="flex items-start gap-2 p-1" key={index}>
                <Image className="h-auto w-5" src={box.icon} alt="" height={40} width={40} />
                <p className="font-body text-base">{tChecks(box.infoKey)}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
      <SecurityAndSafetyCard />
      <div className="flex flex-col justify-center items-center">
        {securityAndSafetyInfoContent && securityAndSafetyInfoContent.map((box, index) => (
          <div className="pb-2 pt-2 w-[90%] lg:hidden" key={index}>
            <h2 className="heading-2">{tInfo(box.titleKey)}</h2>
            <p className="paragraph-light">{tInfo(box.infoKey)}</p>
          </div>
        ))}
      </div>
      <div className="hidden w-full justify-end p-4 lg:flex">
        <button className="bg-primary p-4 text-accent rounded-sm text-[18px] font-bold font-body cursor-pointer" aria-label="Öppna popup" onClick={() => setPopup(true)}>{tPage('cta')}</button>
      </div>
      {popup && (
        <div className="fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center">
          <div className="absolute w-full h-full bg-black/40 backdrop-blur-sm" onClick={() => setPopup(false)}></div>
          <article className="bg-background p-6 z-10 w-[80%]">
            <div className="text-center">
              <h2 className="heading-2 m-4">{tPage('popup-title')}</h2>
            </div>
            {securityAndSafetyPopupContent && securityAndSafetyPopupContent.map((box, index) => (
              <section className="p-2" key={index}>
                <h3 className="heading-3 text-primary">{tPopUp(box.titleKey)}</h3>
                <p className="paragraph-light text-[18px]">{tPopUp(box.infoKey)}</p>
              </section>
            ))}
            <div className="flex justify-end">
              <button className="mt-4 bg-primary p-4 text-accent rounded-sm text-[18px] font-bold font-body cursor-pointer" aria-label="Stäng popup" onClick={() => setPopup(false)}>{tPage('close-cta')}</button>
            </div>
          </article>
        </div>
      )}
    </article>
  )
}

export default SecurityAndSafetyFeature