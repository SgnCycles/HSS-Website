import Image from "next/image";
import Link from "next/link";
import FooterImage from "../FooterImage";
import FooterHeadSection from "./FooterHeadSection";
import FooterLocation from "../FooterLocation";
import FooterContact from "../FooterContact";
import { useTranslations } from "next-intl";

const FooterMobile = () => {

  const t = useTranslations('footer')
  return (
    <footer className="block md:hidden">
      <FooterImage />
      <FooterHeadSection />
      <div className="bg-blue-900 p-8">
        <h2 className="font-heading text-yellow-500 font-bold text-[18px]">{t('our_premises')}</h2>
        <address>
          <ul className="not-italic grid grid-cols-[3fr_2fr] md:grid-cols-[2fr_1fr] justify-between border-solid border-0 border-b border-grey-300 py-3">
            <FooterLocation
              title="Ruffen"
              address="Kårlokal Ruffen,|vid Hässelby|strandbad,|165 65 Hässelby"
              googleMapslink={`https://www.google.com/maps/place/59°21'47.8"N+17°49'19.8"E/@59.3632844,17.819599,439m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d59.3632844!4d17.8221739?entry=tts&g_ep=EgoyMDI2MDUwNi4wIPu8ASoASAFQAw%3D%3D&skid=bcbe2d02-4dc2-4735-bc14-6a5e74833589`}
            />
            <FooterLocation
              title="Myset"
              address="Hajkstugan Myset,|mellan Kyrkhamn|och Gåseborg,|175 48, Järfälla"
              googleMapslink="https://maps.app.goo.gl/McVsJCFb1JEePGu96"
            />
          </ul>
        </address>
        <div className="grid grid-cols-[3fr_2fr] md:grid-cols-[2fr_1fr] justify-between border-solid border-0 border-b border-grey-300 py-3">
          <FooterContact title={t('contact_information')} icon="yellow-envelope-icon.svg">
            <Link href="mailto:info@hss-scout.org">
              <p className="text-white pl-1 font-body font-medium text-[16px]">info@hss-scout.org</p>
            </Link>
          </FooterContact>
          <FooterContact title={t('follow_us')} icon="yellow-instagram-icon.svg">
            <Link target="_blank" href="https://www.instagram.com/hss_scout" className="text-white pl-1 font-body font-medium text-[16px]">@hss_scout</Link>
          </FooterContact>
        </div>
        <div className="grid grid-cols-[3fr_2fr] md:grid-cols-[2fr_1fr] justify-between py-3">
          <FooterContact title="Org.nr" icon={null}>
            <p className="text-white font-body text-[14px] font-medium">802006-2389</p>
          </FooterContact>
          <FooterContact title={t('supported_by')} icon={null}>
            <Link target="_blank" aria-label="postkodlotteriet hemsida" href="https://www.postkodlotteriet.se/">
              <Image
                className="w-full h-auto"
                src="/images/Logo/postkodlotteriet_logo.svg"
                height={37}
                width={112}
                alt="postkodlotteriet logga"
              />
            </Link>
          </FooterContact>
        </div>
      </div>
    </footer>
  )
}

export default FooterMobile