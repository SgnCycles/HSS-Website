import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/components/buttons/Button";
import Border from "@/components/common/Border";
import Nav from "../Nav";
import BorderHero from "@/components/common/BorderHero";

const HeaderHome = () => {

  const t = useTranslations("home")
  return (
    <header
      className="bg-primary relative max-h-screen h-160 md:h-screen flex flex-col"
    >
      <Nav />
      <section className="grid grid-cols-1 grid-rows-[1fr_auto_auto] w-full h-full relative overflow-hidden items-end">
        <Image 
          className="row-start-1 row-end-2 md:row-end-4 w-full h-full object-cover bg-linear-to-bl from-primary to-blue-100" 
          src={'/images/Hero/aldersgrupp_hero.png'} 
          alt=""  
          fill
          priority
          fetchPriority="high"
          style={{
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
          }}
        />
        <h1 className="z-5 p-4 bg-primary md:bg-transparent md:row-start-1 md:self-center row-start-2 heading-1 text-shadow-black text-shadow-xs text-center text-white ">
          {t('title')}<br />
          <span className="text-accent">Hässelby Strand Sjöscoutkår</span>
        </h1>
        <BorderHero >
          <div className="z-5 h-min justify-items-center grid grid-cols-[1fr_auto] gap-12">
            <p className="paragraph text-white font-bold justify-self-start">
              Vi är en stolt sjöscoutkår som ger barn och ungdomar en trygg plats
              
              att växa, lära sig sjömanskap och skapa livslånga vänner.
            </p>
            <Button 
              ariaLabel="" 
              href="https://www.scoutnet.se/register/in/group/764" 
              variant="primaryBlue" 
              text="Bli scout" 
            />
          </div>
        </BorderHero>
        <Border variant="text-primary md:hidden"/>
        <div className="bg-primary md:hidden">
          <div className="container z-5 h-min justify-items-center grid grid-rows-[auto_auto] md:grid-rows-[auto] md:grid-cols-[1fr_auto] ">
            <p className="paragraph text-white text-center md:text-left text-white md:text-primary md:justify-self-start">
              Vi är en stolt sjöscoutkår som ger barn och ungdomar en trygg plats
              <br className="hidden md:block" />
              att växa, lära sig sjömanskap och skapa livslånga vänner.
            </p>
            <Button 
              ariaLabel="" 
              href="https://www.scoutnet.se/register/in/group/764" 
              variant="primaryBlue" 
              text="Bli scout" 
            />
          </div>
        </div>
      </section>
    </header>
  )
}

export default HeaderHome;