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
    <div className="flex items-center rounded-lg border border-background bg-primary p-1 mr-14">
      <button
        type="button"
        onClick={() => switchLanguage("sv")}
        className={`px-3 py-1 text-sm font-medium transition-colors rounded-md cursor-pointer ${
          locale === "sv"
            ? "bg-background text-primary"
            : "text-background hover:bg-white/10"
        }`}
      >
        SV
      </button>

      <button
        type="button"
        onClick={() => switchLanguage("en")}
        className={`px-3 py-1 text-sm font-medium transition-colors rounded-md cursor-pointer ${
          locale === "en"
            ? "bg-background text-primary"
            : "text-background hover:bg-white/10"
        }`}
      >
        EN
      </button>
    </div>
  );
}
