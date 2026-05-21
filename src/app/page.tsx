import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome";
import ActivityFeature from "@/components/cards/ActivityFeature";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <ActivityFeature />
        <AgeGroupCardHome />
      </main>
    </div>
  );
}