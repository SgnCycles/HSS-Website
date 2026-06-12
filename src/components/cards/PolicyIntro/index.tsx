import Image from "next/image";
import Button from "@/components/buttons/Button";

const PolicyIntro = () => {
  return (
    <section className="bg-blue-100">
      <article className="container">
        <div className="flex justify-center lg:justify-start pb-6">
          <Image
            src="/Icons/anchor-icon.svg"
            alt=""
            width={30}
            height={30}
            className="h1-icon"
          />
          <h1 className="heading-1">HSS <span className="hidden md:inline-block">Trygga möten</span> policy</h1>
        </div>
        <p className="paragraph-light">
          Scouterna centralt initierade arbetet med Trygga Möten 2005 för att
          stärka ledare i att agera när barn och unga far illa. Målet är att ha
          en bred kunskap om potentiella risker för att förebygga diskriminering
          och övergrepp. Hässelby Strands Sjöscoutkår arbetar fortsatt aktivt
          för att alla medlemmar ska känna sig trygga i verksamheten, och
          styrelsen har därför antagit denna policy den 12 oktober 2025.
        </p>
        <div className="text-end">
          <Button
            ariaLabel="read pdf"
            href="/pdf/Bilaga-20251012-HSS-Trygga-moten-policy-Beslutad.pdf"
            variant="primaryBlue"
            text="Läs hela  PDF"
          />
        </div>
      </article>
    </section>
  );
};

export default PolicyIntro;