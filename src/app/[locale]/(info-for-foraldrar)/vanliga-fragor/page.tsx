import Button from "@/components/buttons/Button";
import FaqCard from "@/components/Faq";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "HSS - Vanliga frågor",
 description: "Vanliga frågor om scouting - lär dig mer om hur verksamheten fungerar, vad scouter gör, hur du blir medlem och hur trygghet och gemenskap skapas.",
};

const VanligaFragorPage = () => {
  return (
    <main
      className="md:bg-[url(/images/Backgrounds/blueWavyBoat2.png)] bg-top bg-no-repeat bg-cover"
      id="main-content"
    >
      <article className="container">
        <div className="flex justify-center sm:justify-start pt-6 pb-4 md:pt-0 md:pb-0">
          <Image
            src="/Icons/yellowquestion.svg"
            height={25}
            width={25}
            alt=""
            className="h1-icon"
          />
          <h1 className="heading-1">Vanliga frågor</h1>
        </div>
        <p className="paragraph">
          Här hittar du svar på de vanligaste frågorna om medlemskap, fakturor
          och ledarskap i HSS.
        </p>
        <FaqCard />
        <section className="bg-[#EEEEEE] border border-grey-300 card mt-6">
          <h4 className="heading-3">Hittade du inte svaret?</h4>
          <p className="paragraph">
            Hör av dig till oss direkt. Vi svarar inom ett par dagar och hjälper
            dig rätt.
          </p>
          <div className="flex justify-end">
            <Button
              ariaLabel="mail button"
              href="mailto:info@hss-scout.org"
              variant="primaryBlue"
              text="Maila oss"
            />
          </div>
        </section>
      </article>
    </main>
  );
};

export default VanligaFragorPage;