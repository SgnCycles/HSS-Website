import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome"
import BliLedareHome from "@/components/cards/BliLedare";
import Hero from "@/components/header/Hero";

export default function Home() {
  return (
    <>
    <Hero img="/images/Hero/home_hero.png"/>   
    <div className=""> 
      <main className="">     
        <AgeGroupCardHome />
        <BliLedareHome />
      </main>
    </div>
    </>
    
  );
}