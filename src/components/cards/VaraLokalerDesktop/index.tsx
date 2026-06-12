"use client"

import Image from "next/image";
import Button from "@/components/buttons/Button";
import { useEffect, useState } from "react";
import CloseButton from "@/components/buttons/CloseButton";
import { useTranslations } from "next-intl";

const VaraLokalerDesktop = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const t = useTranslations('VaraLokalerCard')

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = "initial"
    }
  }, [isOpen])

  return (
    <section className="hidden lg:flex lg:flex-col">
      <article className="container flex flex-col justify-center pb-0 items-start">
        <div className="flex gap-2 items-center">
          <h2 className="heading-3">{t('title')}</h2>
          <div className="text-base font-body flex gap-2 pl-2 pr-2 justify-center rounded-md w-fit border bg-secondary border-accent text-center self-center mt-2 mb-2">
            <p>{t('subtitle')}</p>
          </div>
        </div>
        <p className="paragraph-light">{t('p1')}</p>
        <div className="flex self-stretch justify-between">
          <div>
            <h3 className="heading-4">{t('coordinatesTitle')}</h3>
            <p className="paragraph-light">{t('coordinates')}</p>
          </div>
          <div>
            <Button
              ariaLabel="Google Maps"
              href="https://www.google.com/maps/place/Scoutstugan+Myset/@59.3971277,17.7672573,559m/data=!3m1!1e3!4m6!3m5!1s0x465fa128809e851d:0xb0d426cb47615c42!8m2!3d59.3970258!4d17.7705506!16s%2Fg%2F11p52y22tg?entry=tts&g_ep=EgoyMDI2MDUyNS4wIPu8ASoASAFQAw%3D%3D&skid=749da01d-6040-4b4d-9ded-2e8b24d9c127"
              variant="primaryBlue"
              text={t('cta')}
            />
          </div>
        </div>
      </article>
      <article className="container flex gap-5 items-center">
        <div className="bg-blue-100 border border-blue-500 rounded-md p-5 w-[35%] h-145.5 flex gap-2.5 flex-col justify-center">
          <h3 className="heading-3">{t('mysetDetail1')}</h3>
          <h4 className="heading-4">{t('mysetDetail2')}</h4>
          <p className="paragraph-light">{t('mysetDetail3')}</p>
          <h4 className="heading-4">{t('mysetDetail4')}</h4>
          <p className="paragraph-light">{t('mysetDetail5')}</p>
          <h4 className="heading-4">{t('mysetDetail6')}</h4>
          <p className="paragraph-light">{t('mysetDetail7')}</p>
          <h4 className="heading-4">{t('mysetDetail8')}</h4>
          <p className="paragraph-light">{t('mysetDetail9')}</p>
        </div>
        <div className="h-145.5 w-[75%]">
          <Image src="/images/Body/varaLokaler_body1.png" height={324} width={400} alt="Myset" className="h-145.5 w-180.75 rounded-md object-cover" />
        </div>
      </article>
      <article>
        <div className="container flex flex-col justify-center">
          <h2 className="heading-3">{t('bookingDetail1')}</h2>
          <p className="paragraph-light">{t('bookingDetail2')}</p>
          <button onClick={handleClick} className="paragraph-light underline underline-offset-2 text-blue-900 cursor-pointer">{t('bookingDetail3')}</button>
          {isOpen && (
            <div className="fixed w-full h-full z-50 top-0 left-0 flex items-center justify-center">
              <div
                className="absolute w-full h-full bg-black/40 backdrop-blur-sm"
                onClick={() => handleClick}
              ></div>
              <article className="bg-background p-6 z-10 w-[80%]">
                <Image src="/images/Body/myset_plan.png" height={1000} width={1000} alt="Planlösning av Myset" className="w-[80%] h-auto" />
                <div className="flex justify-end">
                  <CloseButton
                    ariaLabel="Close the window"
                    text={t('close-cta')}
                    onClick={handleClick}
                  />
                </div>
              </article>
            </div>
          )}
          <Button
            ariaLabel="skicka bokningsförfrågan"
            href="mailto:myset.hss.scout@gmail.com"
            variant="primaryBlue"
            text={t('booking-cta')}
          />
          <div className="mt-20 self-center">
            <Image src="/images/Body/varaLokaler_body2.png" height={441} width={1260} alt="våra lokaler" className="object-cover w-auto rounded-md h-auto" />
          </div>
        </div>
      </article>
      <article>
        <div className="container flex flex-row gap-4">
          <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-md p-5 w-[33%]">
            <div className="flex">
              <Image className="h3-icon" src="/Icons/egg-cooking-icon.svg" height={30} width={30} alt="" />
              <h3 className="heading-3">{t('myset-info1')}</h3>
            </div>
            <p className="paragraph-light">{t('myset-info2')}</p>
          </div>
          <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-md p-5 w-[33%]">
            <div className="flex">
              <Image className="h3-icon" src="/Icons/bonfire-icon.svg" height={30} width={30} alt="" />
              <h3 className="heading-3">{t('myset-info3')}</h3>
            </div>
            <p className="paragraph-light">{t('myset-info4')}</p>
          </div>
          <div className="flex flex-col bg-blue-100 border border-blue-500 rounded-md p-5 w-[33%]">
            <div className="flex">
              <Image className="h3-icon" src="/Icons/forest-icon.svg" height={30} width={30} alt="" />
              <h3 className="heading-3">{t('myset-info5')}</h3>
            </div>
            <p className="paragraph-light">{t('myset-info6')}</p>
          </div>
        </div>
        <div className="flex justify-center">
          <Image src={`/images/Backgrounds/wavyLineTransparent.png`} height={64} width={777} alt="" className="self-center w-auto h-auto" />
        </div>
      </article>
      <article className="container flex flex-col justify-center pb-0 items-start">
        <div className="flex gap-2 items-center">
          <h2 className="heading-3">{t('ruffen-title')}</h2>
          <div className="text-base font-body flex gap-2 pl-2 pr-2 justify-center rounded-md w-fit border bg-secondary border-accent text-center self-center mt-2 mb-2">
            <p>{t('ruffen-subtitle')}</p>
          </div>
        </div>
        <p className="paragraph-light">{t('p2')}</p>
        <p className="paragraph-light">{t('p3')}</p>
        <p className="paragraph-light">{t('p4')}</p>
      </article>
      <article className="container flex gap-5 items-center">
        <div className="bg-blue-100 border border-blue-500 rounded-md p-5 w-90 h-125 flex gap-2.5 flex-col justify-center">
          <h3 className="heading-3">{t('ruffen-detail1')}</h3>
          <h4 className="heading-4">{t('ruffen-detail2')}</h4>
          <p className="paragraph-light">{t('ruffen-detail3')}</p>
          <h4 className="heading-4">{t('ruffen-detail4')}</h4>
          <p className="paragraph-light">{t('ruffen-detail5')}</p>
          <h4 className="heading-4">{t('ruffen-detail6')}</h4>
          <p className="paragraph-light mb-0">{t('ruffen-detail7')}<br></br>{t('ruffen-detail7-2')}</p>
        </div>
        <div>
          <Image src="/images/Body/varaLokaler_body3.png" height={516} width={625} alt="Ruffen" className="object-cover w-auto rounded-md" />
        </div>
      </article>
      <article>
        <div className="container flex self-stretch justify-between">
          <div>
            <div className="flex">
              <Image className="h-auto w-auto" src="/Icons/location-icon.svg" height={21} width={16} alt="h3-icon" />
              <h3 className="heading-4">{t('ruffen-address-title')}</h3>
            </div>
            <p className="paragraph-light">{t('ruffen-address')}</p>
            <div>
              <h3 className="heading-4">{t('ruffen-coordinatesTitle')}</h3>
              <p className="paragraph-light">{t('ruffen-coordinates')}</p>
            </div>
          </div>
          <Button
            ariaLabel="Google Maps"
            href="https://www.google.com/maps/place/59%C2%B021'47.8%22N+17%C2%B049'19.8%22E/@59.3632844,17.819599,439m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d59.3632844!4d17.8221739?entry=tts&g_ep=EgoyMDI2MDUwNi4wIPu8ASoASAFQAw%3D%3D&skid=bcbe2d02-4dc2-4735-bc14-6a5e74833589"
            variant="primaryBlue"
            text={t('cta')}
          />
        </div>
      </article>
    </section>
  )
}

export default VaraLokalerDesktop
