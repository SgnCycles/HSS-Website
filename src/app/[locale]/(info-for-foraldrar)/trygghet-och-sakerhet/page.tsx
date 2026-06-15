import SecurityAndSafetyFeature from "@/components/cards/SecurityAndSafetyFeature";
import type { Metadata } from "next";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("security-and-safety-page");
  return {
    title: `${t("metaTitle")}`,
    description: `${t("metaDescription")}`,
  };
}

const TrygghetOchSäkerhetPage = () => {
  return (
    <>
      <SecurityAndSafetyFeature />
    </>
  );
};

export default TrygghetOchSäkerhetPage;