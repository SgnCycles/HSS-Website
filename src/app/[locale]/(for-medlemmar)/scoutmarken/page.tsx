import Image from "next/image";
import Button from "@/components/buttons/Button";
import ScoutUniformDesktop from "@/components/cards/ScoutUniformDesktop";
import ScoutUniformMobile from "@/components/cards/ScoutUniformMobile";
import MarkesaffischCardDesktop from "@/components/cards/MarkesaffischCardDesktop";
import MarkesaffischCardMobile from "@/components/cards/MarkesaffischCardMobile";
import SpecificaMarken from "@/components/cards/SpecificaMarkenCard";
import ScoutmarkenIntro from "@/components/cards/ScoutmarkenIntro";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSS - Scoutmärken",
  description:
    "Scoutmärken berättar din historia. Om äventyr, kunskaper och upplevelser. Lär dig vad märkena betyder och hur de bärs på scoutskjortan.",
};

const ScoutmarkenPage = () => {
  return (
    <main id="main-content">
      <section className="grid place-items-center font-body">
        <div className="flex justify-center lg:justify-start items-center flex-wrap container pb-0">
          <div className="flex justify-center sm:justify-start pt-6 pb-4 md:pt-0 md:pb-0">
            <Image
              src="/Icons/yellow-anchor-icon.svg"
              height={30}
              width={30}
              alt=""
              className="h1-icon"
            />
            <h1 className="heading-1">Scoutmärken</h1>
          </div>
          <div className="grid place-items-center ml-4">
            <p className="border border-accent bg-yellow-200 font-body font-normal text-center pr-4 pl-4 pt-1 pb-1 text-base rounded-md">
              Varje märken berättar en historia
            </p>
          </div>
        </div>
        <ScoutmarkenIntro />
        <SpecificaMarken />
        <article className="w-full container pt-0 pb-0">
          <h2 className="heading-2 text-center mb-6 xl:text-left">
            Märkesaffisch för din åldersgrupp
          </h2>
          <MarkesaffischCardMobile />
          <MarkesaffischCardDesktop />
          <div className="md:hidden w-full flex justify-center items-center">
            <Image
              src="/images/Body/blue_seperator.png"
              height={100}
              width={1000}
              alt=""
            />
          </div>
        </article>
        <article className="container pb-0">
          <ScoutUniformMobile />
          <ScoutUniformDesktop />
          <div className="card flex flex-col sm:flex-row lg:justify-around items-center border border-accent bg-yellow-200 rounded-sm mt-6 mb-6">
            <p className="paragraph text-primary text-center sm:text-left mb-6 mr-2 sm:mb-0">
              Anvisningar för placering av de nya märkena på scoutskjortan.
            </p>
            <Button
              ariaLabel=""
              href="/pdf/nya-maerkessystemet.pdf"
              variant="ternaryBlue"
              text="Ladda ner PDF"
              download={true}
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default ScoutmarkenPage;
