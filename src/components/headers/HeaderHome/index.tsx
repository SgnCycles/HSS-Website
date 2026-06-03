import Image from "next/image";
import Link from "next/link";
import Nav from "../Nav";
import { useTranslations } from "next-intl";
import Button from "@/components/buttons/Button";
import Border from "@/components/common/Border";

const HeaderHome = () => {

  const t = useTranslations("home")
  return (
    <header
      className="h-150 max-h-screen sm:h-300 md:h-screen bg-contain sm:bg-cover bg-no-repeat flex flex-col items-center justify-between"
      style={{
        backgroundImage:
          "linear-gradient(to bottom, #00355F 0%, rgba(0,53,95,0.8) 10%, rgba(0,53,95,0.2) 30%, transparent 100%), url('/images/Hero/aldersgrupp_hero.png')",
        backgroundPosition: "center top",
      }}
    >
      <Nav />
      <section className="grid grid-cols-1 w-full">
        <h1 className="hidden md:block heading-1 text-shadow-black text-shadow-xs text-center text-white xl:pb-50">
          {t('title')}<br />
          <span className="text-accent">Hässelby Strand Sjöscoutkår</span>
        </h1>
        <Border variant="text-primary md:text-blue-100" />
        <div className=" px-1 grid grid-rows-[auto_auto] md:grid-rows-[auto] md:grid-cols-[1fr_auto] bg-primary md:bg-blue-100 p-4 section">
        <h1 className="heading-1 md:hidden text-shadow-black text-shadow-xs text-center text-white xl:pb-50">
          {t('title')}<br />
          <span className="text-accent">Hässelby Strand Sjöscoutkår</span>
        </h1>
          <div className="grid justify-items-center md:grid-cols-[auto_auto]">
            <p className="paragraph text-white md:text-primary">
              Vi är en stolt sjöscoutkår som ger barn och ungdomar en trygg plats
              <br className="hidden md:block" />
              att växa, lära sig sjömanskap och skapa livslånga vänner.
            </p>
            <Button ariaLabel="" href="https://www.scoutnet.se/register/in/group/764" variant="primaryBlue" text="Bli scout" />
          </div>
        </div>
      </section>
    </header>
  )
}

export default HeaderHome;