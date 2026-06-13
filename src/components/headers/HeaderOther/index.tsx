"use client";
import Nav from "@/components/headers/Nav";
import { usePathname } from "next/navigation";
import { pageHeaderImage } from "../../../data/pageBackgrounds";
import { useTranslations } from "next-intl";

const HeaderOther = () => {
  const pathname = usePathname();
  const strippedPath = pathname.replace(/^\/(sv|en)/, "") || "/";
  const findPage = pageHeaderImage.find((page) => strippedPath === page.path);
  const headerImage = findPage?.image ?? "vilkaArVi_hero.jpg";

  const t = useTranslations('vad-gor-vi')

  return (
    <header
      className="h-72 w-full md:h-125 flex flex-col items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, #00355F 0%, rgba(0,53,95,0.8) 10%, rgba(0,53,95,0.2) 30%, transparent 100%), url(/images/Hero/${headerImage})`,
        backgroundPosition: "bottom",
      }}
    >
      <Nav />
      {(pathname === "/vad-gor-vi" ||
        pathname === "/sv/vad-gor-vi" ||
        pathname === "/en/vad-gor-vi") && (
        <h1 className="bottom-0 heading-1 text-center text-shadow-black text-white pb-6 mt-auto">
          {t('pageTitle')}{" "}<br className="md:hidden"></br>
          <span className="text-accent">{t('pageTitle2')}</span>
        </h1>
      )}
    </header>
  );
};

export default HeaderOther;
