import AretiHssCard from "@/components/cards/AretIHssCard";
import { aretIHss } from "@/data/aretIHssContent";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "Året i HSS",
 description: "Året i Hässelby Strands Sjöscoutkår fylls av återkommande aktiviteter och traditioner som skapar gemenskap, äventyr och utveckling för barn och unga.",
};

const AretiHssPage = () => {
  return (
    <main
      id="main-content"
      className="bg-background bg-contain bg-no-repeat lg:bg-[url(/images/Backgrounds/blueWavyBoat2.png)] lg:bg-size-[100%] lg:bg-no-repeat lg:bg-top"
    >
      <section className="container section flex flex-col bg-[url(/images/Backgrounds/boatBackground1.png)] bg-size-[175px] bg-no-repeat bg-right lg:bg-none">
        <div className="flex justify-center lg:justify-start flex-col items-center lg:flex-row">
          <div className="flex flex-row">
            <Image
              className="h2-icon"
              src={`/Icons/yellow-calendar-icon.svg`}
              height={30}
              width={30}
              alt=""
            />
            <h1 className="heading-2">Året i HSS</h1>
          </div>
          <div className="text-base font-body flex gap-2 pl-4 pr-4 pt-1 pb-1 justify-center rounded-md w-fit border bg-secondary border-accent text-center self-center lg:ml-4">
            <p>Återkommande aktiviteter och traditioner</p>
          </div>
        </div>
        {aretIHss &&
          aretIHss.map((content, index) => {
            return <AretiHssCard key={index} {...content} />;
          })}
      </section>
    </main>
  );
};

export default AretiHssPage;