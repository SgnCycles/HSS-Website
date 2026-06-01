import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome";
import BliLedareHome from "@/components/cards/BliLedare";
import ActivityFeature from "@/components/cards/ActivityFeature";
export default function Home() {

  return (
    <div className="">
      <main className="">
        <ActivityFeature />
        <AgeGroupCardHome />
        <BliLedareHome />
      </main>
    </div>
  );
}