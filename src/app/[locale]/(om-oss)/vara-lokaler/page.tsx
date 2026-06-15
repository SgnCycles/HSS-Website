import VaraLokalerDesktop from "@/components/cards/VaraLokalerDesktop";
import VaraLokalerMobile from "@/components/cards/VaraLokalerMobile";
import Image from "next/image";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("VaraLokalerPage");
  return {
    title: `${t("metaTitle")}`,
    description: `${t("metaDescription")}`,
  };
}

const VaraLokalerPage = () => {
  const t = useTranslations("VaraLokalerPage")
  return (
    <main id="main-content">
      <section className="container flex flex-col justify-center items-center pb-0 lg:items-start">
        <div className="flex justify-center pb-6">
          <Image
            className="h1-icon"
            src="/Icons/house-heart-icon.svg"
            height={30}
            width={30}
            alt=""
          />
          <h1 className="heading-1">{t("title")}</h1>
        </div>
        <p className="paragraph-light text-center">{t("info")}</p>
      </section>
      <section>
        <VaraLokalerMobile />
        <VaraLokalerDesktop />
      </section>
    </main>
  );
};

export default VaraLokalerPage;