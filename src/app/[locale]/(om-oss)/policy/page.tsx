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
<<<<<<< HEAD
      <section className="bg-blue-100">
        <div className="container">
          <div className="flex">
            <Image
              src="/Icons/anchor-icon.svg"
              alt=""
              width={30}
              height={30}
              className="h1-icon"
            />
            <h1 className="heading-1">HSS Trygga möten policy</h1>
          </div>
          <p className="paragraph-light">
            Scouterna centralt initierade arbetet med Trygga Möten 2005 för att
            stärka ledare i att agera när barn och unga far illa. Målet är att
            ha en bred kunskap om potentiella risker för att förebygga
            diskriminering och övergrepp. Hässelby Strands Sjöscoutkår arbetar
            fortsatt aktivt för att alla medlemmar ska känna sig trygga i
            verksamheten, och styrelsen har därför antagit denna policy den 12
            oktober 2025.
          </p>
          <div className="text-end">
            <Button
              ariaLabel="read pdf"
              href="/pdf/Bilaga-20251012-HSS-Trygga-moten-policy-Beslutad.pdf"
              variant={"primaryBlue"}
              text="Läs hela  PDF"
            />
          </div>
        </div>
      </section>
=======
      <PolicyIntro />
>>>>>>> main
      <BorderSingleDown variant="text-blue-100" />
      <PolicyLifejackets />
      <BorderSingleDown variant="text-white bg-yellow-100" />
<<<<<<< HEAD
      <section className="relative bg-yellow-100">
        <div className="container">
          <div className="flex">
            <Image
              src="/Icons/camera-icon.svg"
              alt=""
              width={30}
              height={30}
              className="h2-icon"
            />
            <h2 className="heading-2">Våra fotopolicy</h2>
          </div>
          <p className="paragraph-light">
            Vi fotograferar våra aktiviteter och använder bilderna på vår
            hemsida och i sociala medier för att göra reklam för vår verksamhet.
            Vi publicerar aldrig namn på våra scouter. Genom att vara medlem i
            HSS samtycker man till detta. Om ditt barn av någon anledning inte
            får vara med på bild så kontakta ledarna så att de får kännedom om
            det.<br></br>
            Om ditt barn av någon anledning inte får vara med på bild så
            kontakta ledarna så att de får kännedom om det.
          </p>

          <div className="text-end">
            <Button
              ariaLabel={"mail button"}
              href={"mailto:info@hss-scout.org"}
              variant={"primaryBlue"}
              text={"Kontakta oss"}
            />
          </div>
        </div>
      </section>
=======
      <PolicyPhoto />
>>>>>>> main
      <BorderSingleDown variant="text-yellow-100" />
      <PolicyInfo />
      <PolicyGdpr />
      <section className="container">
        <div className="card bg-yellow-100 border border-accent">
          <p className="paragraph-light">
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
          <h3 className="heading-3">Hajker och läge</h3>
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