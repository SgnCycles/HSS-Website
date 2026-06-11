import Image from "next/image";
import Link from "next/link";
import { vilkaArViGamlaBatarContent } from "@/data/vilkaArViCardContent";
import BorderSingleDown from "@/components/borders/BorderSingleDown";
import { historyHSS } from "@/data/vilkaArViCardContent";
import VilkaArViCardDesktop from "@/components/cards/VilkaArViDesktop";
import VilkaArViCardMobile from "@/components/cards/VilkaArViMobile";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSS - Vilka är vi",
  description:
    "Scouterna ger barn och unga äventyr och personlig utveckling i en inkluderande gemenskap där mångfald, respekt och samarbete står i centrum.",
};

const VilkaArViPage = () => {
  return (
    <main id="main-content">
      <section className="flex flex-col lg:bg-blue-100 lg:bg-[url(/images/Backgrounds/boat-white-transparent.png)] lg:bg-size-[398px] lg:bg-no-repeat lg:bg-top-right">
        <article className="flex flex-col items-center pb-0">
          <div className="justify-center container pb-0 flex flex-row items-center lg:justify-start">
            <Image
              src="/images/Logo/logo.png"
              height={74}
              width={78}
              alt=""
              className="h1-icon"
            />
            <h1 className="heading-1 text-blue-900">Om HSS</h1>
          </div>
          <div className="text-base font-body flex gap-2 pl-2 pr-2 justify-center rounded-md w-fit border bg-secondary border-accent lg:hidden">
            <p>Scoutkåren bildades 1959</p>
          </div>
          <VilkaArViCardDesktop />
          <VilkaArViCardMobile />
        </article>
      </section>
      <BorderSingleDown variant="text-blue-100 lg:block hidden" />
      <section className="lg:container md:container">
        <h2 className="heading-2 hidden lg:block">Se andra dokument</h2>
        <div className="flex flex-col bg-yellow-200 p-5 mb-0 font-body lg:paragraph-light lg:text-blue-900 text-blue-900 lg:border-accent lg:rounded-md lg:bg-secondary lg:border lg:gap-5 md:rounded-md md:border-accent md:border">
          <h2 className="heading-2 lg:hidden">Se andra dokument</h2>
          <Link
            target="_blank"
            href="/pdf/Stadgar-Hasselby-Strands-Sjoscoutkar-beslutad-2025-10-22-signerade.pdf"
            className="underline underline-offset-2"
          >
            Stadgar för Hässelby Strands Sjöscoutkår →
          </Link>
          <Link
            target="_blank"
            href="/pdf/Verksamhetsplan-for-perioden-2025-09-01-2026-12-31.pdf"
            className="underline underline-offset-2"
          >
            Verksamhetsplan för perioden 2025-2026 →
          </Link>
          <Link
            target="_blank"
            href="/pdf/HSS-karstamma-2025-10-22-protokoll-signerat.pdf"
            className="underline underline-offset-2"
          >
            HSS Kår stämma för 2025 →
          </Link>
        </div>
      </section>
      <section className="container flex flex-col bg-[url(/images/Backgrounds/boatBackground1.png)] bg-size-[119px] bg-no-repeat bg-top-right lg:bg-none">
        <div className="flex flex-row items-center">
          <Image
            src="/Icons/yellow-anchor-icon.svg"
            height={30}
            width={30}
            alt=""
            className="h2-icon"
          />
          <h2 className="heading-2">Historien om HSS</h2>
        </div>
        <div className="flex flex-col">
          {historyHSS &&
            historyHSS.map((content, index) => (
              <p key={index} className="paragraph-light">
                {content.info}
              </p>
            ))}
        </div>
        <div className="flex flex-col items-center lg:flex-row lg:gap-5 lg:justify-center md:flex-row self-center lg:w-full w-screen md:w-auto gap-1 md:gap-2">
          {vilkaArViGamlaBatarContent &&
            vilkaArViGamlaBatarContent.map((image, index) => (
              <Image
                key={index}
                src={`/images/Body/${image.image}`}
                height={276}
                width={393}
                alt="historia om båtar"
                className="lg:h-60 lg:rounded-md md:rounded-md md:w-[33.33%] h-auto w-[-webkit-fill-available] object-cover md:h-50"
              />
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