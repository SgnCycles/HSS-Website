import { defineRouting } from "next-intl/routing";
import { createNavigation } from "next-intl/navigation";

export const routing = defineRouting({
  locales: ["sv", "en"],
  defaultLocale: "sv",
});

export const { useRouter, usePathname, Link } = createNavigation(routing);