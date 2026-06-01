import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome";
import BliLedareHome from "@/components/cards/BliLedare";
import ActivityFeature from "@/components/cards/ActivityFeature";
import UpptäckLivetSomSjöscout from "@/components/UpptäcklivetSomSjöscout";
import Border from "@/components/common/Border";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <ActivityFeature />
        <AgeGroupCardHome />
        <BliLedareHome />
        <UpptäckLivetSomSjöscout />
      </main>
    </div>
  );
}