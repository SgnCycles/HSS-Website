import Image from "next/image";
import Button from "@/components/buttons/Button";

const PolicyLifejackets = () => {
  return (
    <section>
      <article className="flex flex-col md:flex-row container">
        <div className="flex flex-col justify-between">
          <div className="flex justify-center md:justify-start pb-6">
            <Image
              src="/Icons/check-icon.svg"
              alt=""
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
            Grundregeln är att flytväst alltid ska bäras på bryggor och i båtar.
            Scouter utan godkänd simkunnighet (200 m) ska ha räddningsväst
            (minst 90 N), medan simkunniga scouter kan använda seglarväst (minst
            45 N).
          </p>
          <p className="paragraph-light">
            Policyn innehåller också specifika krav på grenrem och avråder från
            uppblåsbara flytvästar på grund av praktiska säkerhetsrisker.
          </p>
        </div>
        <div className="pl-6 grid place-items-center">
          <Image
            src="/images/Body/policy_lifejacket.png"
            alt=""
            width={300}
            height={300}
            className="rounded-sm w-full h-auto mb-6"
          />
          <Button
            ariaLabel="read pdf"
            href="/pdf/HSS-Flytvastpolicy-2025-Beslutad.pdf"
            variant="primaryBlue"
            text="Läs hela  PDF"
          />
        </div>
      </article>
    </section>
  );
};

export default PolicyLifejackets;