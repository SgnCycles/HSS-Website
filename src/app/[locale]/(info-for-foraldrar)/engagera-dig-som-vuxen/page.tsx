import Button from "@/components/buttons/Button";
import { engageraDigCardContent } from "@/data/engageraDigCardContent";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSS - Engagera dig",
  description:
    "Som förälder behöver du inget fast uppdrag – även tillfällig hjälp är värdefull för kårens verksamhet och barnens scoutupplevelse.",
};

const EngageraDigSomVuxenPage = () => {
  return (
    <main
      id="main-content"
      className="md:bg-[url(/images/Backgrounds/boatBackground1.png)] bg-no-repeat bg-top-right bg-size-[auto_200px]"
    >
      <section className="container">
        <article>
          <div className="flex w-full justify-center items-center md:justify-start pb-6">
            <Image
              src={`/Icons/engagera-icon.svg`}
              height={30}
              width={30}
              alt=""
              className="h1-icon"
            />
            <h1 className="heading-1">
              Engagera dig{" "}
              <span className="hidden sm:inline-block">som vuxen</span>
            </h1>
          </div>
          <p className="paragraph-light">
            Som förälder behöver du inte ta på dig ett fast uppdrag. Även
            tillfällig hjälp är ovärderlig för kårens vardag.
          </p>
          <div className="flex justify-center items-center">
            <ul className="cards-column pb-6 md:w-[70%]">
              {engageraDigCardContent &&
                engageraDigCardContent.map((card, index) => (
                  <li
                    key={index}
                    className="flex border border-[#1E7BC4] rounded-md p-4 bg-blue-100 min-h-17"
                  >
                    <div className="min-w-20 grid place-items-center">
                      <span className="text-3xl md:text-4xl">{card.icon}</span>
                    </div>
                    <div className="grid place-items-center">
                      <p className="paragraph-light font-medium mb-0">
                        {card.title}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </article>
        <article className="card sm:bg-yellow-200 md:border sm:border-accent">
          <h2 className="heading-3 text-center md:text-left">
            Vet du inte var du passar in?
          </h2>
          <p className="paragraph-light text-center md:text-left">
            Hör av dig så berättar vi mer om vad som behövs just nu. Alla bidrag
            räknas, stora som små.
          </p>
          <div className="flex justify-end">
            <Button
              ariaLabel=""
              href="mailto:info@hss-scout.org"
              variant="primaryBlue"
              text="Kontakta oss"
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default EngageraDigSomVuxenPage;