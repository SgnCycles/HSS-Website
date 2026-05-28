import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome";
import LanguageSwitcher from "@/components/LanguageButton";
import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations("home");
  return (
    <div className="">
     
      <h1 className="flex justify-center items-center text-5xl">{t("title")}</h1>
   
      <main className="">
        <AgeGroupCardHome />
      </main>
    </div>
  );
}