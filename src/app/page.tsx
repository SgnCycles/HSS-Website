import AgeGroupCardHome from "@/components/AgeGroupCardHome";
import Logo from "@/components/Logo";
import Image from "next/image";

export default function Home() {
  return (
    <div className="">
      <main className="">
        <Logo src="/images/Logo/logo.png" alt="logo" width={220} height={203} className="w-32 h-auto sm:w-32 md:w-64" />
        <AgeGroupCardHome />
      </main>
    </div>
  );
}