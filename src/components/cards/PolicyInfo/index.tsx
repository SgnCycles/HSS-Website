import Image from "next/image";

const PolicyInfo = () => {
  return (
    <section className="container">
      <article>
        <div className="flex justify-center md:justify-start">
          <Image
            src="/Icons/document-icon.svg"
            alt=""
            width={30}
            height={30}
            className="h2-icon"
          />
          <h2 className="heading-2"><span className="hidden sm:flex">Så hanterar vi dina uppgifter</span><span className="flex sm:hidden">GDPR</span></h2>
        </div>
        <p className="paragraph-light">
          HSS värnar om din integritet. Här förklarar vi vilka uppgifter vi
          samlar in, varför vi gör det och hur länge de sparas.
        </p>
        <h4 className="heading-4">Scoutnet — medlemsregistret</h4>
        <p className="paragraph-light">
          Scoutnet är Scouternas gemensamma medlemsregister. Där samlar vi in
          uppgifter om varje medlem för att veta vilka våra medlemmar är, nå ut
          med information, registrera närvaro, hantera fakturering och se
          avdelnings- och patrulltillhörighet.
        </p>
      </article>
    </section>
  );
};

export default PolicyInfo;