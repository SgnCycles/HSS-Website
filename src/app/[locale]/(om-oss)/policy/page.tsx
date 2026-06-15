import Image from "next/image";
import BorderSingleDown from "@/components/borders/BorderSingleDown";
import PolicyIntro from "@/components/cards/PolicyIntro";
import PolicyLifejackets from "@/components/cards/PolicyLifejackets";
import PolicyPhoto from "@/components/cards/PolicyPhoto";
import PolicyInfo from "@/components/cards/PolicyInfo";
import PolicyGdpr from "@/components/cards/PolicyGdpr";
import PolicyGatheredInfo from "@/components/cards/PolicyGatheredInfo";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("policy");
  return {
    title: `${t("metaTitle")}`,
    description: `${t("metaDescription")}`,
  };
}

const PolicyPage = () => {
  const t = useTranslations("policy")
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
            🔒 {t(`paragraph1`)}
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
          <h3 className="heading-3">{t('subTitle')}</h3>
        </div>
        <p className="paragraph-light">
          {t(`paragraph2`)}
        </p>
      </section>
      <PolicyGatheredInfo />
    </main>
  );
};

export default PolicyPage;