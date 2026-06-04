import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome";
import BliLedareHome from "@/components/cards/BliLedare";
import ActivityFeature from "@/components/cards/ActivityFeature";
import BorderTwoDown from "@/components/borders/BorderTwoDown";
import BorderSingleUp from "@/components/borders/BorderSingleUp";

export default function Home() {


  return (
    <main className="">
      <ActivityFeature />
      <AgeGroupCardHome />
      <BorderSingleUp variant="text-primary" />
      <BliLedareHome />
      <BorderTwoDown foreground="text-primary" background="text-blue-100" />
    </main>
  );
}