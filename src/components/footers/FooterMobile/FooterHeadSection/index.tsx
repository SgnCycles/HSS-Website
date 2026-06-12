import Link from "next/link"
import Image from "next/image";
import { useTranslations } from "next-intl";

const FooterHeadSection = () => {

  const t = useTranslations('footer')
  return (
    <section className="bg-linear-to-t text-center px-4 from-blue-200 py-4">
      <h2 className="font-heading text-blue-900 font-extrabold text-[18px]">Hässelby Strands Sjöscoutkår</h2>
      <p className="font-body text-[15px]">{t('footer_about_description_1')}{t('footer_about_description_2')}
        </p>
      <Image
        src="/images/Logo/scouterna_logo.png"
        height={113}
        width={170}
        alt="Scouterna logga"
        className="flex place-self-center p-4 w-auto h-auto"
      />
      <nav>
        <ul className="flex justify-around text-blue-900 text-[14px]">
          <li>
            <Link target="_blank" href="https://www.scoutshop.se/">Scoutshop</Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.scouternasfolkhogskola.se/">Scouternas folkhögskola</Link>
          </li>
          <li>
            <Link target="_blank" href="https://www.scoutnet.se/f/login">Scoutnet</Link>
          </li>
        </ul>
      </nav>
    </section>
  )
}

export default FooterHeadSection