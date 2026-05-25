import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome";
import HomeHero from "@/components/header/homeHero";
export default function Home() {
  return (
    <div className="">
      <HomeHero img="/images/Hero/home_hero.png" />
      <main className="">
        <AgeGroupCardHome />
      </main>
    </div>
  );
}