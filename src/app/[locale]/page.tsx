<<<<<<< HEAD:src/app/[locale]/page.tsx
import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome";
import BliLedareHome from "@/components/cards/BliLedare";
import ActivityFeature from "@/components/cards/ActivityFeature";
=======
import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome"
import BliLedareHome from "@/components/cards/BliLedare"
>>>>>>> feat/048-om-hss-page:src/app/page.tsx

export default function Home() {


  return (
    <div >
      <main >
        <ActivityFeature />
        <AgeGroupCardHome />
        <BliLedareHome />
      </main>
    </div>
  );
}