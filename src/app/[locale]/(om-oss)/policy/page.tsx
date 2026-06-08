import Button from "@/components/buttons/Button";
import Image from "next/image";
import { registerInfo } from "@/data/registerInformation";
import { collectedInformation } from "@/data/collectedInformation";
const PolicyPage = () => {
  return (
    <main>
      <section>
        <article className="container">
          <div className="flex">
            <Image
              src={"/Icons/anchor-icon.svg"}
              alt={""}
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
              ariaLabel={"read pdf"}
              href={""}
              variant={"primaryBlue"}
              text={"Läs hela  PDF"}
            />
          </div>
          <Image
            src={"/Icons/caret_down.svg"}
            alt={""}
            width={30}
            height={30}
            className="mx-auto"
          />
          <div className="flex flex-col md:flex-row">
            <div>
              <div className="flex">
                <Image
                  src={"/Icons/check-icon.svg"}
                  alt={""}
                  width={30}
                  height={30}
                  className="h2-icon"
                />
                <h2 className="heading-2">HSS flytväst policy</h2>
              </div>
              <p className="paragraph-light">
                Det finns tydliga riktlinjer för vilken typ av flytväst som ska
                användas i kårens verksamhet.
              </p>
              <p className="paragraph-light">
                Grundregeln är att flytväst alltid ska bäras på bryggor och i
                båtar. Scouter utan godkänd simkunnighet (200 m) ska ha
                räddningsväst (minst 90 N), medan simkunniga scouter kan använda
                seglarväst (minst 45 N).
              </p>
              <p className="paragraph-light">
                Policyn innehåller också specifika krav på grenrem och avråder
                från uppblåsbara flytvästar på grund av praktiska
                säkerhetsrisker.
              </p>
            </div>
            <div className="">
              <Image
                src={"/images/Body/policy_body1.png"}
                alt={""}
                width={300}
                height={300}
                className="rounded-sm w-full h-auto"
              />
              <Button
                ariaLabel={"read pdf"}
                href={""}
                variant={"primaryBlue"}
                text={"Läs hela  PDF"}
              />
            </div>
          </div>

          <div>
            <div className="flex">
              <Image
                src={"/Icons/camera-icon.svg"}
                alt={""}
                width={30}
                height={30}
                className="h2-icon"
              />
              <h2 className="heading-2">Våra fotopolicy</h2>
            </div>
            <p className="paragraph-light">
              Vi fotograferar våra aktiviteter och använder bilderna på vår
              hemsida och i sociala medier för att göra reklam för vår
              verksamhet. Vi publicerar aldrig namn på våra scouter. Genom att
              vara medlem i HSS samtycker man till detta. Om ditt barn av någon
              anledning inte får vara med på bild så kontakta ledarna så att de
              får kännedom om det.
            </p>
            <p className="paragraph-light">
              Om ditt barn av någon anledning inte får vara med på bild så
              kontakta ledarna så att de får kännedom om det.
            </p>
            <div className="text-end">
              <Button
                ariaLabel={"contact"}
                href={"mailto:info"}
                variant={"primaryBlue"}
                text={"Kontakta oss"}
              />
            </div>
            <Image
              src={"/Icons/caret_down.svg"}
              alt={""}
              width={30}
              height={30}
              className="mx-auto"
            />
          </div>
          <div>
            <div className="flex">
              <Image
                src={"/Icons/document-icon.svg"}
                alt={""}
                width={30}
                height={30}
              />
              <h2 className="heading-2">Så hanterar vi dina uppgifter</h2>
            </div>
            <p className="paragraph-light">
              HSS värnar om din integritet. Här förklarar vi vilka uppgifter vi
              samlar in, varför vi gör det och hur länge de sparas.
            </p>

            <h4 className="heading-4">Scoutnet — medlemsregistret</h4>
            <p className="paragraph-light">
              Scoutnet är Scouternas gemensamma medlemsregister. Där samlar vi
              in uppgifter om varje medlem för att veta vilka våra medlemmar är,
              nå ut med information, registrera närvaro, hantera fakturering och
              se avdelnings- och patrulltillhörighet.
            </p>
          </div>
          <div className="bg-blue-100 border card border-blue-500 rounded-sm">
            <h4 className="heading-4">Uppgifter vi registrerar</h4>
            <ul>
              {registerInfo.map((info) => {
                return (
                  <li key={info.id} className="list-disc list-decimal">
                    <p className="paragraph-light">{info.infoContent}</p>
                  </li>
                );
              })}
            </ul>
            <div className="text-end">
              <Button
                ariaLabel={"contact"}
                href={"mailto:info"}
                variant={"primaryBlue"}
                text={"Läs hela GDPR"}
              />
            </div>
          </div>
          <div className="card bg-yellow-100 border border-accent">
            <p className="paragraph-light">
              🔒 Endast ledare och styrelse inom HSS har tillgång till
              registret. Information kan inte laddas ned från hemsidan.
              Relevanta uppgifter delas med kommunen för bidragsrapportering.
            </p>
          </div>

          <div>
            <div className="flex">
              <Image
                src={"/Icons/blue-tent-icon.svg"}
                alt={""}
                width={30}
                height={30}
                className="h3-icon"
              />
              <h3 className="heading-3">Hajker och läge</h3>
            </div>
            <p>
              Inför hajker och läger samlar ledarna in kompletterande uppgifter
              via mejl eller webbformulär. Detta för att kunna planera och
              genomföra aktiviteten på ett säkert sätt.
            </p>
          </div>
          <div className="bg-blue-100 card border border-blue-500">
            <h3 className="heading-3">Uppgifter som samlas in</h3>
            <ul>
              {collectedInformation.map((item) => {
                return <li className="list-disc"><p className="paragraph-light">{item.information}</p></li>;
              })}
            </ul>
          </div>
        </article>
      </section>
    </main>
  );
};

export default PolicyPage;
