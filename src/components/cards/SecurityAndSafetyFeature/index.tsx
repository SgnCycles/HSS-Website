"use client"
import SecurityAndSafetyCard from "../SecurityAndSafetyCard"
import { securityAndSafetyCheckContent, securityAndSafetyInfoContent, securityAndSafetyPopupContent } from "@/data/securityAndSafetyContent"
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

  return (
    <div className="flex flex-col items-center mt-6 mb-6">
      <div className="max-w-[80%]">
        <div className="flex flex-col items-center md:flex-row md:items-start md:gap-10 md:justify-between">
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center p-4 md:pt-0">
              <div className="h-auto w-7">
                <Image src={"/Icons/yellow-shield-cross-icon.svg"} alt="Gul sköld" height={40} width={40} />
              </div>
              <h1 className="font-bold font-heading text-primary text-[25px]">Säkerhet & trygghet</h1>
            </div>
            <p className="p-4 ml-4 font-body max-w-md md:p-0">På HSS är barnens trygghet, inkludering och glädje alltid vår högsta prioritet.</p>
          </div>
          <div className="flex flex-col">
            {securityAndSafetyCheckContent && securityAndSafetyCheckContent.map((box, index) => (
              <div className="flex items-start gap-2 p-1" key={index}>
                <div className="h-auto w-5">
                  <Image src={box.icon} alt={"checkbox"} height={40} width={40} />
                </div>
                <p className="font-body text-sm md:text-[16px]">{box.info}</p>
              </div>
            ))}
          </div>
        </div>
        <SecurityAndSafetyCard />
        <div >
          {securityAndSafetyInfoContent && securityAndSafetyInfoContent.map((box, index) => (
            <div className="p-4 md:hidden" key={index}>
              <h2 className="font-heading font-medium text-[20px] text-primary">{box.title}</h2>
              <p className="font-body">{box.info}</p>
            </div>
          ))}
        </div>
        <div className="hidden w-full justify-end p-4 md:flex">
          <button className="bg-primary p-4 text-accent rounded-sm text-[18px] font-semibold font-body cursor-pointer" onClick={() => setPopup(true)}>Läs mer här</button>
        </div>
        {popup && (
          <div className="fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center">
            <div className="absolute w-full h-full bg-black/40 backdrop-blur-sm" onClick={() => setPopup(false)}></div>
            <div className="bg-background p-6 z-10 w-[80%]">
              <div className="text-center">
                <h2 className="font-heading font-bold text-primary text-[30px] m-4">Trygghet och inkludering på HSS</h2>
              </div>
              {securityAndSafetyPopupContent && securityAndSafetyPopupContent.map((box, index) => (
                <div className="p-4" key={index}>
                  <h2 className="font-heading font-medium text-[20px] text-primary">{box.title}</h2>
                  <p className="font-body">{box.info}</p>
                </div>
              ))}
              <div className="flex justify-end">
                <button className="mt-4 bg-primary p-4 text-accent rounded-sm text-[18px] font-semibold font-body cursor-pointer" onClick={() => setPopup(false)}>Stäng</button>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default SecurityAndSafetyFeature