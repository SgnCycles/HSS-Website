import Image from "next/image";
import BorderSingleDown from "@/components/borders/BorderSingleDown";
import PolicyIntro from "@/components/cards/PolicyIntro";
import PolicyLifejackets from "@/components/cards/PolicyLifejackets";
import PolicyPhoto from "@/components/cards/PolicyPhoto";
import PolicyInfo from "@/components/cards/PolicyInfo";
import PolicyGdpr from "@/components/cards/PolicyGdpr";
import PolicyGatheredInfo from "@/components/cards/PolicyGatheredInfo";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSS - Policy",
  description:
    "Hässelby Strands Sjöscoutkårs policyer för trygghet, flytvästar, fotografering och personuppgifter skapar en säker och trygg scoutverksamhet.",
};

const PolicyPage = () => {

  return (
    <main id="main-content">
      <PolicyIntro />
      <BorderSingleDown variant="text-blue-100" />
      <PolicyLifejackets />
      <BorderSingleDown variant="text-white bg-yellow-100" />
      <PolicyPhoto />
      <BorderSingleDown variant="text-yellow-100" />
      <PolicyInfo />
      <PolicyGdpr />
      <section className="container">
        <div className="card bg-yellow-100 border border-accent">
          <p className="paragraph-light mb-0">
            🔒 Endast ledare och styrelse inom HSS har tillgång till registret.
            Information kan inte laddas ned från hemsidan. Relevanta uppgifter
            delas med kommunen för bidragsrapportering.
          </p>
        </div>
      </section>
      <section className="container">
        <div className="flex">
          <Image
            src="/Icons/blue-tent-icon.svg"
            alt=""
            width={30}
            height={30}
            className="h3-icon"
          />
          <h3 className="heading-3">Hajker och läger</h3>
        </div>
        <p className="paragraph-light">
          Inför hajker och läger samlar ledarna in kompletterande uppgifter via
          mejl eller webbformulär. Detta för att kunna planera och genomföra
          aktiviteten på ett säkert sätt.
        </p>
      </section>
      <PolicyGatheredInfo />
    </main>
  );
};

export default PolicyPage;