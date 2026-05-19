import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome";
import Hero from "@/components/header/Hero";

export default function Home() {
  return (
    <>
    <Hero img="/images/Hero/home_hero.png" isHome="true"/>   
    <div className=""> 
      <main className="">     
        <AgeGroupCardHome />
      </main>
    </div>
    </>
    
  );
}