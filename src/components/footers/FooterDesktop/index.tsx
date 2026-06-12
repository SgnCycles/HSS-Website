"use client";
import Image from "next/image";
import Link from "next/link";
import FooterImage from "../FooterImage";
import FooterLocation from "../FooterLocation";
import FooterContact from "../FooterContact";
import { useTranslations } from "next-intl";

const FooterDesktop = () => {
  const t = useTranslations("footer");
  return (
    <footer className="hidden md:block">
      <FooterImage />
      <Link
        href="/#nav-content"
        onClick={() => window.scrollTo(0, 0)}
        aria-label="tillbaka till startsidan"
      >
        <Image
          src="/images/Logo/logo_light.png"
          height={146}
          width={146}
          alt="Hässelby Strands Sjöscoutkår logga"
          className="absolute left-[50%] -translate-1/2"
        />
      </Link>
      <div className="bg-blue-900 flex justify-between pt-25 px-10 pb-10 gap-5">
        <section
          aria-labelledby="footer-location"
          className="flex flex-col w-[25%] justify-between"
        >
          <h2
            id="footer-location"
            className="font-heading text-yellow-500 font-bold text-[26px]"
          >
            {t("our_premises")}
          </h2>
          <address className="not-italic">
            <ul>
              <FooterLocation
                title="Ruffen"
                address="Kårlokal Ruffen,|vid Hässelby strandbad,|165 65 Hässelby"
                googleMapslink={`https://www.google.com/maps/place/59°21'47.8"N+17°49'19.8"E/@59.3632844,17.819599,439m/data=!3m2!1e3!4b1!4m4!3m3!8m2!3d59.3632844!4d17.8221739?entry=tts&g_ep=EgoyMDI2MDUwNi4wIPu8ASoASAFQAw%3D%3D&skid=bcbe2d02-4dc2-4735-bc14-6a5e74833589`}
              />
              <FooterLocation
                title="Myset"
                address="Hajkstugan Myset,|mellan Kyrkhamn och Gåseborg,|175 48, Järfälla"
                googleMapslink="https://maps.app.goo.gl/McVsJCFb1JEePGu96"
              />
            </ul>
          </address>
        </section>

        <section
          aria-labelledby="footer-about"
          className="flex flex-col text-center px-4 justify-between w-[60%] items-center"
        >
          <h2
            id="footer-about"
            className="font-heading text-yellow-500 font-extrabold text-[32px]"
          >
            Hässelby Strands Sjöscoutkår
          </h2>
          <p className="font-body text-grey-300 text-[22px]">
            {t("footer_about_description_1")}
            <br />
            {t("footer_about_description_2")}
          </p>
          <div className="w-69.75">
            <Image
              className="flex place-self-center justify-center p-4 w-auto h-auto"
              src="/images/Logo/scouterna_logo_white.png"
              height={54}
              width={279}
              alt="Scouterna logga"
            />
          </div>
          <nav>
            <ul className="flex flex-col items-center text-yellow-500 text-[24px]">
              <li>
                <Link
                  target="_blank"
                  href="https://www.scouternasfolkhogskola.se/"
                >
                  Scouternas folkhögskola
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://www.scoutshop.se/">
                  Scoutshop
                </Link>
              </li>
              <li>
                <Link target="_blank" href="https://www.scoutnet.se/f/login">
                  Scoutnet
                </Link>
              </li>
            </ul>
          </nav>
        </section>

        <section
          aria-labelledby="footer-contact"
          className="flex flex-col w-[25%] justify-between"
        >
          <h2 id="footer-contact" className="sr-only">
            {t("contact_information")}
          </h2>
          <FooterContact
            title={t("contact_information")}
            icon="yellow-envelope-icon.svg"
          >
            <Link target="_blank" href="mailto:info@hss-scout.org">
              <p className="text-white pl-2 font-body font-medium text-[16px] md:text-[20px]">
                info@hss-scout.org
              </p>
            </Link>
          </FooterContact>
          <FooterContact
            title={t("follow_us")}
            icon="yellow-instagram-icon.svg"
          >
            <Link
              target="_blank"
              href="https://www.instagram.com/hss_scout"
              aria-label="instagram Hässelby Strands Sjöscoutkår"
              className="text-white pl-2 font-body font-medium text-[16px] md:text-[20px]"
            >
              @hss_scout
            </Link>
          </FooterContact>
          <FooterContact title="Org.nr" icon={null}>
            <p className="text-white font-body text-[14px] font-medium md:text-[20px]">
              802006-2389
            </p>
          </FooterContact>
          <FooterContact title={t("supported_by")} icon={null}>
            <Link
              target="_blank"
              aria-label="postkodlotteriets hemsida"
              href="https://www.postkodlotteriet.se/"
            >
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
  );
};

export default FooterDesktop;
