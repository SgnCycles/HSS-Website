"use client";
import { useLocale } from "next-intl";
import { useRouter, usePathname } from "@/i18n/routing";
export default function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    router.replace(pathname, { locale: newLocale, scroll: false });
  };

  return (
    <select
      name="switcher"
      value={locale}
      onChange={(e) => {
        e.stopPropagation();
        switchLanguage(e.target.value);
      }}
      className="font-body border-none cursor-pointer text-background font-medium md:block mr-15"
    >
      <option className="bg-primary  br-sm" value="sv">
        SV
      </option>
      <option className="bg-primary br-sm" value="en">
        EN
      </option>
    </select>
  );
}
