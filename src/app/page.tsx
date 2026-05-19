import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome";
import Logo from "@/components/header/Logo";

export default function Home() {
  return (
    <div className="">
      <main className="relative">
        <Logo src="/images/Logo/logo.png" width={214} height={203} loading="eager" alt="brand-logo" className="absolute w-[57px] h-auto top-[6px] left-[10px]
        sm:w-[214px] sm:top-[37px] sm:left-[270px]"/>
        <AgeGroupCardHome />
      </main>
    </div>
  );
}