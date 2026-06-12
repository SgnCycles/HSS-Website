import SecurityAndSafetyFeature from "@/components/cards/SecurityAndSafetyFeature";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSS - Trygghet och Säkerhet",
  description:
    "Hässelby Strands Sjöscoutkår prioriterar trygghet, inkludering och säkerhet med utbildade ledare, tydliga rutiner och en öppen scoutmiljö.",
};

const TrygghetOchSäkerhetPage = () => {
  return (
    <>
      <SecurityAndSafetyFeature />
    </>
  );
};

export default TrygghetOchSäkerhetPage;