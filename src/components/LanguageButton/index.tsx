"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <select
      value={locale}
      onChange={(e) => switchLanguage(e.target.value)}
      className="font-body text-sm bg-transparent cursor-pointer"
    >
      <option value="sv">SV</option>
      <option value="en">EN</option>
    </select>
  );
}