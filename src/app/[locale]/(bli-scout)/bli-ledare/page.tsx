import BliLedareMainSection from "@/components/cards/BliLedareMainSection";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("BliLedarePage");
  return {
    title: `${t("metaTitle")}`,
    description: `${t("metaDescription")}`,
  };
}

const BliLedarePage = () => {
  return (
    <main id="main-content">
      <section className="bg-background font-body text-background grid place-items-center">
        <BliLedareMainSection />
      </section>
    </main>
  );
};

export default BliLedarePage;