import Image from "next/image";
import Link from "next/link";
import FooterImage from "../FooterImage";
import FooterHeadSection from "./FooterHeadSection";
import FooterLocation from "../FooterLocation";
import FooterContact from "../FooterContact";

const FooterMobile = () => {
  return (
    <footer>
      <FooterImage />
      <FooterHeadSection />
      <div className="bg-blue-900 p-8">
        <h3 className="font-heading text-yellow-500 font-bold text-[18px]">Våra lokaler</h3>
        <div className="flex flex-row justify-between border-solid border-0 border-b border-grey-300 py-3">
          <FooterLocation title="Ruffen" address="Hässelby strandväg,|165 65 Hässelby,|Stockholm" googleMapslink={`https://www.google.com/maps/place/59°21'47.8"N+17°49'19.8"E/@59.3632844,17.819599,439m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d59.3632844!4d17.8221739?entry=tts&g_ep=EgoyMDI2MDUwNi4wIPu8ASoASAFQAw%3D%3D&skid=bcbe2d02-4dc2-4735-bc14-6a5e74833589`} />
          <FooterLocation title="Myset" address="Lövstaskogarna,|nära Kyrkhamn,|Hässelby" googleMapslink={`https://www.google.com/maps/place/59%C2%B023'49.7%22N+17%C2%B046'11.4%22E/@59.3971277,17.7672573,438m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d59.3971277!4d17.7698322?entry=tts&g_ep=EgoyMDI2MDUwNi4wIPu8ASoASAFQAw%3D%3D&skid=88707b4d-29c6-470d-88e3-2735d9680d76`} />
        </div>
        <div className="flex flex-row justify-between border-solid border-0 border-b border-grey-300 py-3">
          <FooterContact title="Kontakt" icon="yellow-envelope-icon.svg">
            <Link href="mailto:info@hss-scout.org">
              <p className="text-white pl-1 font-body font-medium text-[16px]">info@hss-scout.org</p>
            </Link>
          </FooterContact>
          <FooterContact title="Följ oss" icon="yellow-instagram-icon.svg">
            <Link target="_blank" href="https://www.instagram.com/hss_scout" className="text-white pl-1 font-body font-medium text-[16px]">@hss_scout</Link>
          </FooterContact>
        </div>
        <div className="flex flex-row justify-between py-3">
          <FooterContact title="Org.nr" icon={null}>
            <p className="text-white font-body text-[14px] font-medium">802006-2389</p>
          </FooterContact>
          <FooterContact title="Stöds av" icon={null}>
            <Link target="_blank" href="https://www.postkodlotteriet.se/">
              <Image src="/images/Logo/postkodlotteriet_logo.svg" height={37} width={112} alt="PostkodLogo"></Image>
            </Link>
          </FooterContact>
        </div>
      </div>
    </footer>
  )
}

export default FooterMobile