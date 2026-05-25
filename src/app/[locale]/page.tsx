import AgeGroupCardHome from "@/components/cards/AgeGroupCardHome";
import LanguageSwitcher from "@/components/LanguageButton";
import { useTranslations } from "next-intl";

export default function Home() {

  const t = useTranslations("home");
  return (
    <div className="">
      <LanguageSwitcher />
      <h1>{t("title")}</h1>
   
      <main className="">
        <AgeGroupCardHome />
      </main>
    </div>
  );
}