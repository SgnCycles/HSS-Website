import Image from "next/image";
import Link from "next/link";
import Nav from "@/components/common/Nav";
import { useTranslations } from "next-intl";

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
        <h1 className="hidden heading-1 sm:block font-heading text-2xl lg:text-[64px] md:text-4xl font-extrabold leading-none text-center text-shadow-black text-shadow-xs text-white xl:pb-50">
          {t('title')}<br />
          <span className="text-accent">Hässelby Strand Sjöscoutkår</span>
        </h1>
        <div
          className="hidden sm:2-[80%] pt-12 md:flex justify-around items-center bg-cover w-full h-64"
          style={{
            backgroundImage: "url('/images/Backgrounds/homewavy.svg')",
          }}
        >
          <p className="font-bold paragraph font-body text-lg text-background mt-10 whitespace-pre-line">
            {t('description')}
          </p>
          <Link
            href="https://www.scoutnet.se/register/in/group/764"
            target="_blank"
            className="cursor-pointer py-2 px-12 font-body font-bold bg-primary rounded-sm text-accent border border-[#99AEBF] mt-10"
          >
          {t('cta')}
          </Link>
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
      <section className="sm:hidden bg-primary py-6 flex flex-col items-center gap-3">
        <h1 className="sm:hidden heading-1 text-xl lg:text-[64px] font-heading font-extrabold top-47 text-center text-white">
          {t('title')}<br />
          <span className="text-accent"> Hässelby Strand Sjöscoutkår</span>
        </h1>
        <p className="w-[90%] paragraph font-body text-sm font-medium text-background text-center left-4">
          {t('description')}
        </p>
        <Link
          href="https://www.scoutnet.se/register/in/group/764"
          target="_blank"
          className="w-[90%] h-12 mt-2 cursor-pointer pt-5 pb-5 pr-16 pl-16 font-body font-semibold bg-primary rounded-sm text-accent border-accent border flex justify-center items-center"
        >
          {t('cta')}
        </Link>
      </section>
    </>
  );
};

export default HeaderHome;