import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome";
import BliLedareHome from "@/components/cards/BliLedare";
import ActivityFeature from "@/components/cards/ActivityFeature";
import BorderHero from "@/components/common/BorderHero";

export default function Home() {


  return (
    <main id="main-content" tabIndex={-1} className="focus:outline-none">
      <ActivityFeature />
      <AgeGroupCardHome />
      <BliLedareHome />
      <BorderHero>testing</BorderHero>
    </main>
  );
}