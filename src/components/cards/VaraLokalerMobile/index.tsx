import Image from "next/image";
import Button from "@/components/buttons/Button";
import { Link } from "@/i18n/routing";
import { useTranslations } from "next-intl";

const VaraLokalerMobile = () => {
  const t = useTranslations('VaraLokalerCard')
  return (
    <section className="block lg:hidden md:flex md:flex-col">
      <article className="container flex flex-col justify-center pb-0">
        <div>
          <h2 className="heading-3">{t('title')}</h2>
          <div className="text-base font-body flex gap-2 pl-2 pr-2 justify-center rounded-md w-fit border bg-secondary border-accent text-center self-center mt-2 mb-2">
            <p>{t('subtitle')}</p>
          </div>
          <p className="paragraph-light">{t('p1')}</p>
          <h3 className="heading-4">{t('coordinatesTitle')}</h3>
          <p className="paragraph-light">{t('coordinates')}</p>
        </div>
        <Button
          ariaLabel="Google Maps"
          href="https://www.google.com/maps/place/Scoutstugan+Myset/@59.3971277,17.7672573,559m/data=!3m1!1e3!4m6!3m5!1s0x465fa128809e851d:0xb0d426cb47615c42!8m2!3d59.3970258!4d17.7705506!16s%2Fg%2F11p52y22tg?entry=tts&g_ep=EgoyMDI2MDUyNS4wIPu8ASoASAFQAw%3D%3D&skid=749da01d-6040-4b4d-9ded-2e8b24d9c127"
          variant="primaryBlue"
          text={t('cta')}
        />
        <div className="w-screen mt-5 self-center">
          <Image src="/images/Body/varaLokaler_body1.png" height={324} width={400} alt="Myset" className="h-auto md:w-[-webkit-fill-available] w-[-webkit-fill-available]" />
        </div>
      </article >
      <article className="bg-blue-100">
        <div className="container">
          <h3 className="heading-4">{t('mysetDetail2')}</h3>
          <p className="paragraph-light">{t('mysetDetail3')}</p>
          <h3 className="heading-4">{t('mysetDetail4')}</h3>
          <p className="paragraph-light">{t('mysetDetail5')}</p>
          <h3 className="heading-4">{t('mysetDetail6')}</h3>
          <p className="paragraph-light">{t('mysetDetail7')}</p>
          <h3 className="heading-4">{t('mysetDetail8')}</h3>
          <p className="paragraph-light">{t('mysetDetail9')}</p>
        </div>
      </article>
      <article>
        <div className="container">
          <div className="flex">
            <Image className="h3-icon" src="/Icons/egg-cooking-icon.svg" height={30} width={30} alt="" />
            <h3 className="heading-3">{t('myset-info1')}</h3>
          </div>
          <p className="paragraph-light">{t('myset-info2')}</p>
          <div className="flex">
            <Image className="h3-icon" src="/Icons/bonfire-icon.svg" height={30} width={30} alt="" />
            <h3 className="heading-3">{t('myset-info3')}</h3>
          </div>
          <p className="paragraph-light">{t('myset-info4')}</p>
          <div className="flex">
            <Image className="h3-icon" src="/Icons/forest-icon.svg" height={30} width={30} alt="" />
            <h3 className="heading-3">{t('myset-info5')}</h3>
          </div>
          <p className="paragraph-light">{t('myset-info6')}</p>
        </div>
      </article>
      <article>
        <div className="container flex flex-col justify-center">
          <h2 className="heading-3">{t('bookingDetail1')}</h2>
          <p className="paragraph-light">{t('bookingDetail2')}</p>
          <Link target="_blank" href="/pdf/myset_plan.pdf" className="paragraph-light underline underline-offset-2 text-blue-900">{t('bookingDetail3')}</Link>
          <Button
            ariaLabel="skicka bokningsförfrågan"
            href="mailto:myset.hss.scout@gmail.com"
            variant="primaryBlue"
            text={t('booking-cta')}
          />
          <div className="w-screen mt-5 self-center">
            <Image src="/images/Body/varaLokaler_body2.png" height={324} width={400} alt="Våra lokaler" className="object-cover h-60 md:w-[-webkit-fill-available] w-[-webkit-fill-available]" />
          </div>
        </div>
      </article>
      <article className="container flex flex-col justify-center items-center pb-0 md:pb-7.5">
        <div>
          <h2 className="heading-3">{t('ruffen-title')}</h2>
          <div className="text-base font-body flex gap-2 pl-2 pr-2 justify-center rounded-md w-fit border bg-secondary border-accent text-center self-center mt-2 mb-2">
            <p>{t('ruffen-subtitle')}</p>
          </div>
          <p className="paragraph-light">{t('p2')}</p>
          <p className="paragraph-light">{t('p3')}</p>
          <p className="paragraph-light">{t('p4')}</p>
        </div>
      </article>
      <article className="bg-blue-100">
        <div className="container">
          <h3 className="heading-3">{t('ruffen-detail1')}</h3>
          <h4 className="heading-4">{t('ruffen-detail2')}</h4>
          <p className="paragraph-light">{t('ruffen-detail3')}</p>
          <h4 className="heading-4">{t('ruffen-detail4')}</h4>
          <p className="paragraph-light">{t('ruffen-detail5')}</p>
          <h4 className="heading-4">{t('ruffen-detail6')}</h4>
          <p className="paragraph-light">{t('ruffen-detail7')}<br></br>{t('ruffen-detail7-2')}</p>
        </div>
      </article>
      <article>
        <div className="w-screen">
          <Image src="/images/Body/varaLokaler_body3.png" height={324} width={400} alt="Ruffen" className="h-auto md:w-[-webkit-fill-available] w-[-webkit-fill-available]" />
        </div>
        <div className="container">
          <div>
            <div className="flex">
              <Image className="h-auto w-auto" src="/Icons/location-icon.svg" height={21} width={16} alt="h3-icon" />
              <h3 className="heading-4">{t('ruffen-address-title')}</h3>
            </div>
            <p className="paragraph-light">{t('ruffen-address')}</p>
          </div>
          <div>
            <h3 className="heading-4">{t('ruffen-coordinatesTitle')}</h3>
            <p className="paragraph-light">{t('ruffen-coordinates')}</p>
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

export default VaraLokalerMobile
