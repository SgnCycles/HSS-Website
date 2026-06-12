import Button from "@/components/buttons/Button";
import FaqCard from "@/components/Faq";
import Image from "next/image";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
 title: "HSS - Vanliga frågor",
 description: "Vanliga frågor om scouting - lär dig mer om hur verksamheten fungerar, vad scouter gör, hur du blir medlem och hur trygghet och gemenskap skapas.",
};

const VanligaFragorPage = () => {

const t = useTranslations("vanliga-fragor")
  return (
    <main
      className="md:bg-[url(/images/Backgrounds/blueWavyBoat2.png)] bg-top bg-no-repeat bg-cover"
      id="main-content"
    >
      <article className="container">
        <div className="flex justify-center lg:justify-start pb-6">
          <Image
            src="/Icons/yellowquestion.svg"
            height={25}
            width={25}
            alt=""
            className="h1-icon"
          />
          <h1 className="heading-1">{t('faq_title')}</h1>
        </div>
        <p className="paragraph">
         {t('faq_description')}
        </p>
        <FaqCard />
        <section className="bg-[#EEEEEE] border border-grey-300 card mt-6">
          <h4 className="heading-3">Hittade du inte svaret?</h4>
          <p className="paragraph">
            {t('contact_description')}
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