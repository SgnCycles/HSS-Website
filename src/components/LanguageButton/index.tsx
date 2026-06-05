"use client";

import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";

export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, {
      locale: newLocale,
      scroll: false,
    });
  };

  return (
    <div aria-label="byt språk" className="mb-1 md: flex items-center rounded-lg border border-background bg-primary md:p-1 p-0.5 px-0.2 xl:mr-10 col-start-2 row-start-1  xl:col-start-3 justify-self-end">
      <button
        aria-label="svenska"
        type="button"
        onClick={() => switchLanguage("sv")}
        className={`px-3 p-0.5 py-1 text-sm font-body font-bold transition-colors rounded-md cursor-pointer  ${locale === "sv" ? "bg-background text-primary" : "text-background hover:bg-transparent"}`}
      >
        SV
      </button>

      <button
        aria-label="engelska"
        type="button"
        onClick={() => switchLanguage("en")}
        className={`px-3 p-0.5 py-1 text-sm font-body font-bold transition-colors rounded-md cursor-pointer ${locale === "en" ? "bg-background text-primary" : "text-background hover:bg-transparent"}`}
      >
        EN
      </button>
    </div>
  );
}