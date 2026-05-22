"use client"

import Image from "next/image";
import Link from "next/link";
import FooterImage from "../FooterImage"
import FooterLocation from "../FooterMobile/FooterLocation";
import FooterContact from "../FooterMobile/FooterContact";

const FooterDesktop = () => {
  return (
    <>
      <FooterImage />
      <Link onClick={() => window.scrollTo(0, 0)} href="/">
        <Image src={`/images/Logo/logo_light.png`} height={146} width={146} alt={`HSSLogo`} className="absolute left-[50%] -translate-1/2"></Image>
      </Link>
      <div className="bg-blue-900 flex justify-between pt-25 px-10 pb-10 gap-5">
        <div className="flex flex-col w-[25%] justify-evenly">
          <h3 className="font-heading text-yellow-500 font-bold text-[30px]">Våra lokaler</h3>
          <FooterLocation title={"Ruffen"} address={"Hässelby strandväg,|165 65 Hässelby,|Stockholm"} googleMapslink={`google.com/maps/place/59°21'47.8"N+17°49'19.8"E/@59.3632844,17.819599,439m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d59.3632844!4d17.8221739?entry=tts&g_ep=EgoyMDI2MDUwNi4wIPu8ASoASAFQAw%3D%3D&skid=bcbe2d02-4dc2-4735-bc14-6a5e74833589`} />
          <FooterLocation title={"Myset"} address={"Lövstaskogarna,|nära Kyrkhamn,|Hässelby"} googleMapslink={`https://www.google.com/maps/place/59%C2%B023'49.7%22N+17%C2%B046'11.4%22E/@59.3971277,17.7672573,438m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d59.3971277!4d17.7698322?entry=tts&g_ep=EgoyMDI2MDUwNi4wIPu8ASoASAFQAw%3D%3D&skid=88707b4d-29c6-470d-88e3-2735d9680d76`} />
        </div>
        <div className="flex flex-col justify-between w-[60%]">
          <div className="text-center px-4">
            <h3 className="font-heading text-yellow-500 font-extrabold text-[40px]">Hässelby Strands Sjöscoutkår</h3>
            <p className="font-body text-grey-300 text-[30px]">En stolt del av Scouterna sedan 1959.
              Vi ger barn och ungdomar äventyr, sjömanskap och gemenskap vid Hässelby Strand.</p>
          </div>
          <div className="flex justify-center p-4">
            <Image src={`/images/Logo/scouterna_logo_white.png`} height={54} width={279} alt={`ScouternaLogoImage`}></Image>
          </div>
          <div className="flex flex-col items-center text-yellow-500 text-[30px]">
            <Link target="_blank" href="https://www.scouternasfolkhogskola.se/">Scouternas folkhögskola</Link>
            <Link target="_blank" href="https://www.scoutshop.se/">Scoutshop</Link>
            <Link target="_blank" href="https://www.scoutnet.se/f/login">Scoutnet</Link>
          </div>
        </div>
        <div className="flex flex-col w-[25%] justify-between">
          <FooterContact title={"Kontakt"} icon={"yellow-envelope-icon.svg"}>
            <Link target="_blank" href={"mailto:info@hss-scout.org"}>
              <p className="text-white pl-1 font-body font-medium text-[16px] md:text-[24px]">info@hss-scout.org</p>
            </Link>
          </FooterContact>
          <FooterContact title={"Följ oss"} icon={"yellow-instagram-icon.svg"}>
            <Link target="_blank" href="https://www.instagram.com/hss_scout" className="text-white pl-1 font-body font-medium text-[16px] md:text-[24px]">@hss_scout</Link>
          </FooterContact>
          <FooterContact title={"Organisationsnr"} icon={null}>
            <p className="text-white font-body text-[14px] font-medium md:text-[24px]">802006-2389</p>
          </FooterContact>
          <FooterContact title={"Stöds av"} icon={null}>
            <Link target="_blank" href={`https://www.postkodlotteriet.se/`}>
              <Image src={`/images/Logo/postkodlotteriet_logo.svg`} height={37} width={112} alt={`PostkodLogo`} className="md:w-77 md:h-25.25 md:items-center"></Image>
            </Link>
          </FooterContact>
        </div>
      </div>
    </>
  )
}

export default FooterDesktop