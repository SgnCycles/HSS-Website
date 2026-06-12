import BorderSingleUp from "@/components/borders/BorderSingleUp";
import BorderTwoDown from "@/components/borders/BorderTwoDown";
import ActivityFeature from "@/components/cards/ActivityFeature";
import HurManBlirScoutFeature from "@/components/cards/HurManBlirScoutFeature";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
 title: "HSS - Vad gör vi",
 description:
   "Scouterna ger barn och unga äventyr, gemenskap och personlig utveckling i en inkluderande verksamhet byggd på mångfald, respekt och allas lika värde.",
};

const VadGorViPage = () => {
  return (
    <main id="main-content">
      <ActivityFeature />
      <div className="hidden md:block">
        <BorderSingleUp variant="text-primary" />
      </div>
      <HurManBlirScoutFeature />
      <BorderTwoDown foreground="text-primary" background="text-blue-100" />
    </main>
  );
};

export default VadGorViPage;