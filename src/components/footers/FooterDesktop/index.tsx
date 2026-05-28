"use client"
import Image from "next/image";
import Link from "next/link";
import FooterImage from "../FooterImage"
import FooterLocation from "../FooterLocation";
import FooterContact from "../FooterContact";

const FooterDesktop = () => {
  return (
    <footer className="hidden md:block">
      <FooterImage />
      <Link onClick={() => window.scrollTo(0, 0)} href="/" aria-label="tillbaka till startsidan">
        <Image 
          src="/images/Logo/logo_light.png" 
          height={146} 
          width={146} 
          alt="Hässelby Strands Sjöscoutkår logga" 
          className="absolute left-[50%] -translate-1/2" 
        />
      </Link>
      <div className="bg-blue-900 flex justify-between pt-25 px-10 pb-10 gap-5">
        <section aria-labelledby="footer-location" className="flex flex-col w-[25%] justify-between">
          <h3 id="footer-location" className="font-heading text-yellow-500 font-bold text-[26px]">
            Våra lokaler
          </h3>
          <address className="not-italic">
            <ul>
              <FooterLocation 
                title="Ruffen" 
                address="Hässelby strandväg,|165 65 Hässelby,|Stockholm" 
                googleMapslink={`https://www.google.com/maps/place/59°21'47.8"N+17°49'19.8"E/@59.3632844,17.819599,439m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d59.3632844!4d17.8221739?entry=tts&g_ep=EgoyMDI2MDUwNi4wIPu8ASoASAFQAw%3D%3D&skid=bcbe2d02-4dc2-4735-bc14-6a5e74833589`} 
              />
              <FooterLocation 
                title="Myset" 
                address="Lövstaskogarna,|nära Kyrkhamn,|Hässelby" 
                googleMapslink={`https://www.google.com/maps/place/59%C2%B023'49.7%22N+17%C2%B046'11.4%22E/@59.3971277,17.7672573,438m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d59.3971277!4d17.7698322?entry=tts&g_ep=EgoyMDI2MDUwNi4wIPu8ASoASAFQAw%3D%3D&skid=88707b4d-29c6-470d-88e3-2735d9680d76`} 
              />
            </ul>
          </address>
        </section>

        <section aria-labelledby="footer-about" className="flex flex-col text-center px-4 justify-between w-[60%]">
          <h3 id="footer-about" className="font-heading text-yellow-500 font-extrabold text-[32px]">
            Hässelby Strands Sjöscoutkår
          </h3>
          <p className="font-body text-grey-300 text-[24px]">
            En stolt del av Scouterna sedan 1959.
            <br />
            Vi ger barn och ungdomar äventyr, sjömanskap och gemenskap vid Hässelby Strand.
          </p>
          <Image 
            className="flex place-self-center justify-center p-4"
            src="/images/Logo/scouterna_logo_white.png" 
            height={54} 
            width={279} 
            alt="Scouterna logga"
          />
          <nav>
            <ul className="flex flex-col items-center text-yellow-500 text-[24px]">
              <li>
                <Link target="_blank" href="https://www.scouternasfolkhogskola.se/">Scouternas folkhögskola</Link>
              </li>
              <li>
                <Link target="_blank" href="https://www.scoutshop.se/">Scoutshop</Link>
              </li>
              <li>
                <Link target="_blank" href="https://www.scoutnet.se/f/login">Scoutnet</Link>
              </li>
            </ul>
          </nav>
        </section>

        <section aria-labelledby="footer-contact" className="flex flex-col w-[25%] justify-between">
          <h2 id="footer-contact" className="sr-only">
            Kontaktinformation
          </h2>
          <FooterContact title="Kontakt" icon="yellow-envelope-icon.svg">
            <Link target="_blank" href="mailto:info@hss-scout.org">
              <p className="text-white pl-1 font-body font-medium text-[16px] md:text-[20px]">info@hss-scout.org</p>
            </Link>
          </FooterContact>
          <FooterContact title="Följ oss" icon="yellow-instagram-icon.svg">
            <Link 
              target="_blank" 
              href="https://www.instagram.com/hss_scout" 
              aria-label="instagram Hässelby Strands Sjöscoutkår"
              className="text-white pl-1 font-body font-medium text-[16px] md:text-[20px]"
            >
              @hss_scout
            </Link>
          </FooterContact>
          <FooterContact title="Org.nr" icon={null}>
            <p className="text-white font-body text-[14px] font-medium md:text-[20px]">802006-2389</p>
          </FooterContact>
          <FooterContact title="Stöds av" icon={null}>
            <Link target="_blank" aria-label="postkodlotteriets hemsida" href="https://www.postkodlotteriet.se/">
              <Image 
                src="/images/Logo/postkodlotteriet_logo.svg" 
                height={37} 
                width={112} 
                alt="Postkodlotteriet logga" 
                className="md:w-77 md:h-25.25 md:items-center" 
              />
            </Link>
          </FooterContact>
        </section>
      </div>
    </footer>
  )
}

export default FooterDesktop