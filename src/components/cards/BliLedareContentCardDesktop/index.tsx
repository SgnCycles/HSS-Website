"use client";
import { useTranslations } from "next-intl";

const BliLedareContentCardDesktop = () => {

  const t = useTranslations("BliLedarePage");

  return (
    <>
      <p className="paragraph-light">{t("details.p1")}</p>
      <p className="paragraph-light">{t("details.p2")}</p>
      <p className="paragraph-light">{t("details.p3")}</p>
      <p className="paragraph-light">{t("details.p4")}</p>
      <p className="paragraph-light">{t("details.p5")}</p>
      <p className="paragraph font-extrabold">{t("details.p6")}</p>
    </>
  );
};

export default BliLedareContentCardDesktop;