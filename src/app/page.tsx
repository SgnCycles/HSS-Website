import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome"
import BliLedareHome from "@/components/cards/BliLedare";
import VilkaArViPage from "./(om-oss)/vilka-ar-vi/page";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <VilkaArViPage />
        <AgeGroupCardHome />
        <BliLedareHome />
      </main>
    </div>
  );
}