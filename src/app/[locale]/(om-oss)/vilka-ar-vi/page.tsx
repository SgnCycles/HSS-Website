import Image from "next/image";
import { Link } from "@/i18n/routing";
import BorderSingleDown from "@/components/borders/BorderSingleDown";
import { aboutUsDocuments, historyHSS } from "@/data/vilkaArViCardContent";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import Icons from "@/components/features/Icons";
import AboutUsCardDesktop from "@/components/cards/AboutUsCardDesktop";
import AboutUsCardMobile from "@/components/cards/AboutUsCardMobile";

export const metadata: Metadata = {
  title: "HSS - Vilka är vi",
  description: "Scouterna ger barn och unga äventyr och personlig utveckling i en inkluderande gemenskap där mångfald, respekt och samarbete står i centrum.",
};

const VilkaArViPage = () => {
  const t = useTranslations("vilka-ar-vi")
  return (
    <main id="main-content">
      <section className="flex flex-col lg:bg-blue-100 lg:bg-[url(/images/Backgrounds/boat-white-transparent.png)] lg:bg-size-[398px] lg:bg-no-repeat lg:bg-top-right">
        <article className="container flex flex-col pb-0">
            <h1 className="heading-1 flex align-center justify-center pb-3 lg:justify-start">
              <Icons name="hssLogo" variant="h1-icon" /> 
              {t("title")}
            </h1>
          <div className="w-fit border border-accent bg-yellow-200 font-body font-normal text-center pr-4 pl-4 pt-1 pb-1 text-base m-auto rounded-md lg:hidden mb-6">
            <p>{t("subTitle")}</p>
          </div>
          <AboutUsCardMobile />
          <AboutUsCardDesktop />
        </article>
      </section>
      <BorderSingleDown variant="text-blue-100 lg:block hidden" />
      <section className=" md:container">
        <h2 className="heading-2 hidden lg:block pb-6">{t("documents.title")}</h2>
        <div className="flex flex-col bg-yellow-200 p-5 mb-0 font-body lg:paragraph-light lg:text-blue-900 text-blue-900 lg:border-accent lg:rounded-md lg:bg-secondary lg:border lg:gap-5 md:rounded-md md:border-accent md:border">
          <h2 className="heading-3 lg:hidden">
            {t("documents.title")}
          </h2>
          {aboutUsDocuments && aboutUsDocuments.map((doc) => 
            <Link
              key={doc.id}
              target="blank"
              href={doc.source}
              className="underline underline-offset-2"
            >
              {t(`documents.${doc.id}.text`)}
            </Link>
          )}
        </div>
      </section>
      <section className="container pt-0 align-center flex flex-col justify-center bg-[url(/images/Backgrounds/boatBackground1.png)] bg-size-[119px] bg-no-repeat bg-top-right lg:bg-none">
        <h2 className="heading-2">
          <Icons name="anchor" variant="h2-icon text-accent" />
          {t("history.title")}
        </h2>
        <div className="flex flex-col gap-4">
          {historyHSS && historyHSS.map((h) => (
            <div key={h.id}>
            <p className="paragraph-light">
              {t(`history.${h.id}.text`)}
            </p>
            </div>
          ))}
        </div>
        <div className="flex flex-col pb-0 lg:flex-row gap-0 lg:gap-2 w-full">
          {historyHSS && historyHSS.map((image) => (
            <div key={image.id} className="relative overflow-hidden self-center h-auto ml-0 mr-0 w-screen aspect-4/3 ">
              <Image
                src={`/images/Body/${image.image}`}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                alt="historia om båtar"
                className="ml-0 mr-0 object-cover md:rounded-none lg:rounded-md"
              />
            </div>
          ))}
        </div>
        <Image
          src="/images/Backgrounds/blueWavyLine.png"
          height={29}
          width={350}
          alt=""
          className="self-center lg:w-194.25 md:hidden"
        />
      </section>
    </main>
  );
};

export default VilkaArViPage;