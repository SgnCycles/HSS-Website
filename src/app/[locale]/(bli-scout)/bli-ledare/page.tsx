import BliLedareMainSection from "@/components/cards/BliLedareMainSection";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "HSS - Bli Ledare",
  description:
    "Bli scoutledare i HSS. Inga förkunskaper krävs. Få utbildning, stöd och möjligheten att utveckla ditt ledarskap samtidigt som du gör skillnad för barn och unga.",
};

const BliLedarePage = () => {
  return (
    <main id="main_section">
      <section className="bg-background font-body text-background grid place-items-center">
        <BliLedareMainSection />
      </section>
    </main>
  );
};

export default BliLedarePage;