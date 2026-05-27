import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome"
import BliLedareHome from "@/components/cards/BliLedare";
import UpptäckLivetSomSjöscout from "@/components/UpptäcklivetSomSjöscout";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <AgeGroupCardHome />
        <BliLedareHome />
        <UpptäckLivetSomSjöscout />
      </main>
    </div>
  );
}