import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome";
import BliLedareHome from "@/components/cards/BliLedare";
import ActivityFeature from "@/components/cards/ActivityFeature";
import BorderTwoDown from "@/components/borders/BorderTwoDown";
import BorderSingleUp from "@/components/borders/BorderSingleUp";
import UpptäckLivetSomSjöscout from "@/components/UpptäcklivetSomSjöscout";

export default function Home() {
  return (
    <main id="main-content">
      <ActivityFeature />
      <UpptäckLivetSomSjöscout />
      <BorderSingleUp variant="text-yellow-100" />
      <AgeGroupCardHome />
      <BorderSingleUp variant="text-primary bg-yellow-100" />
      <BliLedareHome />
      <BorderTwoDown foreground="text-primary" background="text-blue-100" />
    </main>
  );
}