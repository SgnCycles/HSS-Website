import Image from "next/image";
import { useTranslations } from "next-intl";
import Button from "@/components/buttons/Button";
import Nav from "../Nav";
import BorderTwoUp from "@/components/borders/BorderTwoUp";

const HeaderHome = () => {
  const t = useTranslations("home")

  return (
    <header
      className="bg-primary relative max-h-screen h-185 md:h-screen flex flex-col"
    >
      <Nav />
      <section className="grid grid-cols-1 grid-rows-[1fr_auto_auto] w-full h-full relative overflow-hidden items-end">
        <Image 
          className="row-start-1 row-end-2 md:row-end-4 w-screen h-full object-cover bg-linear-to-bl from-primary to-blue-100" 
          src={'/images/Hero/aldersgrupp_hero.png'} 
          alt=""  
          fill
          priority
          style={{
            objectPosition: "right bottom",
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)',
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 60%, rgba(0,0,0,0) 100%)'
          }}
        />
        <h1 className="z-5 p-4 bg-primary md:bg-transparent md:row-start-1 row-start-2 heading-1 text-shadow-black text-shadow-xs text-center text-white ">
          {t('title')}<br />
          <span className="text-accent">Hässelby Strand Sjöscoutkår</span>
        </h1>
        <BorderTwoUp foreground="text-primary md:text-primary/45" background="text-blue-100/30 md:text-blue-100/45" />
        <div className="z-5 bg-primary md:bg-blue-100/45">
        <div className="z-5 bg-primary md:bg-primary/45">
          <div className="containerHero h-min justify-items-center items-end grid grid-rows-[auto_auto] md:grid-rows-[auto] gap-4 md:gap-20 md:grid-cols-[1fr_auto] ">
            <p className="paragraph font-bold mb-0 text-center md:text-left text-white md:justify-self-start md:text-shadow-lg">
              {t('description')}
            </p>
            <Button 
              ariaLabel="" 
              href="https://www.scoutnet.se/register/in/group/764" 
              variant="primaryBlue" 
              text={t('cta')} 
            />
          </div>
          
        </div>
        </div>
      </section>
    </header>
  )
}

export default HeaderHome;
