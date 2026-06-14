import Button from "@/components/buttons/Button";
import ScoutUniformDesktop from "@/components/cards/ScoutUniformDesktop";
import ScoutUniformMobile from "@/components/cards/ScoutUniformMobile";
import MarkesaffischCardDesktop from "@/components/cards/MarkesaffischCardDesktop";
import MarkesaffischCardMobile from "@/components/cards/MarkesaffischCardMobile";
import SpecificaMarken from "@/components/cards/SpecificaMarkenCard";
import ScoutmarkenIntro from "@/components/cards/ScoutmarkenIntro";
import type { Metadata } from "next";
import ScoutBadgesWater from "@/components/cards/ScoutBadgesWater";
import Icons from "@/components/features/Icons";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('scoutmarken')
  return {
    title: t('metaTitle'),
    description: t('metaDescription')
  }
}

const ScoutmarkenPage = () => {
  const t = useTranslations('scoutmarken')
  return (
    <main id="main-content">
      <section className="grid place-items-center font-body">
        <div className="container flex justify-center lg:justify-start items-center pb-2 flex-wrap gap-4">
          <h1 className="heading-1">
            <Icons name="anchor" variant="text-accent h1-icon" />
            {t(`title`)}
          </h1>
          <p className="border border-accent bg-yellow-200 font-body font-normal text-center pr-4 pl-4 pt-1 pb-1 text-base rounded-md">
            {t(`subTitle`)}
          </p>
        </div>
        <ScoutmarkenIntro />
        <SpecificaMarken />
        <article className="pt-0 pb-0">
          <h2 className="heading-2 text-center mb-6 xl:text-left">
            {t(`ageBadges.title`)}
          </h2>
          <MarkesaffischCardMobile />
          <MarkesaffischCardDesktop />
        </article>
        <ScoutBadgesWater />
        <article className="container pb-0">
        <h2 className="heading-2 text-center pb-6 pt-6">{t(`placements.title`)}</h2>
          <ScoutUniformMobile />
          <ScoutUniformDesktop />
          <div className="card flex flex-col sm:flex-row lg:justify-around items-center border border-accent bg-yellow-200 rounded-sm mt-6 mb-6">
            <p className="paragraph text-primary text-center sm:text-left mb-6 mr-2 sm:mb-0">
              {t(`placements.text`)}
            </p>
            <Button
              ariaLabel=""
              href="/pdf/nya-maerkessystemet.pdf"
              variant="ternaryBlue"
              text={t(`placements.pdfBtn`)}
              download={true}
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default ScoutmarkenPage;