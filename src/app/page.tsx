import AgeGroupCardHome from "@/components/AgeGroupCardHome";
import HomeHero from "@/components/HomeHero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <HomeHero src="/images/Hero/home_hero.png" alt="hero-image" width={1956} height={749} className="object-cover -mt-0.75" />
        <AgeGroupCardHome />
      </main>
    </div>
  );
}