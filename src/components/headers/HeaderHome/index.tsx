import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/common/Nav";
import { useTranslations } from "next-intl";
import Button from "@/components/buttons/Button";

const HeaderHome = () => {

  const t = useTranslations("home")
  return (
    <>
      <header
        className="h-72 w-full md:h-screen bg-cover bg-no-repeat flex flex-col items-center justify-between"
        style={{
          backgroundImage:
            "linear-gradient(to bottom, #00355F 0%, rgba(0,53,95,0.8) 10%, rgba(0,53,95,0.2) 30%, transparent 100%), url('/images/Hero/aldersgrupp_hero.png')",
          backgroundPosition: "right bottom",
        }}
      >
        <Nav />
        <h1 className="hidden sm:block font-heading text-2xl lg:text-[64px] md:text-4xl font-extrabold leading-none text-center text-shadow-black text-shadow-xs text-white xl:pb-50">
          {t('title')}<br />
          <span className="text-accent">Hässelby Strand Sjöscoutkår</span>
        </h1>
        <div
          className="hidden sm:2-[80%] pt-12 md:flex justify-around items-end bg-cover w-full h-64 pb-6 pr-2 pl-2"
          style={{
            backgroundImage: "url('/images/Backgrounds/homewavy.svg')",
          }}
        >
          <p className="paragraph text-background w-[50%]">
            Vi är en stolt sjöscoutkår som ger barn och ungdomar en trygg plats
            att växa, lära sig sjömanskap och skapa livslånga vänner.
          </p>
          <div className="pb-6">
            <Button
              ariaLabel=""
              href="https://www.scoutnet.se/register/in/group/764"
              variant="primaryBlue"
              text="Bli scout"
              target="_blank"
            />
          </div>
        </div>
        <div className="sm:hidden">
          <Image
            src="/images/Backgrounds/homewavy.svg"
            alt=""
            width={393}
            height={55}
            className="md:hidden w-full"
          ></Image>
        </div>
      </header>
      <section className="md:hidden bg-primary py-6 flex flex-col items-center gap-3">
        <h1 className="block lg:hidden heading-1 text-center text-white">
          Välkommen till <br />
          <span className="text-accent"> Hässelby Strand Sjöscoutkår</span>
        </h1>
        <p className="paragraph w-[90%] font-medium text-background text-center">
          Vi är en sjöscoutkår där barn och ungdomar får växa, lära sig
          sjömanskap och skapa vänner för livet.
        </p>
        <div className="pb-6 w-[90%] sm:flex sm:justify-center text-xl">
          <Button
            ariaLabel=""
            href="https://www.scoutnet.se/register/in/group/764"
            variant="primaryBlue"
            text="Bli scout"
            target="_blank"
          />
        </div>
      </section>
    </>
  );
};

export default HeaderHome;
