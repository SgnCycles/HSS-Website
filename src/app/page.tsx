import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome"
import BliLedareHome from "@/components/cards/BliLedare";
import HomeHero from "@/components/header/HomeHero";


export default function Home() {
  return (
    <>
    <HomeHero img="/images/Hero/home_hero.png"/>   
    <div className=""> 
      <main className="">     
        <AgeGroupCardHome />
        <BliLedareHome />
      </main>
    </div>
    </>
    
  );
}