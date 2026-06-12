import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale;

  if (!locale || !routing.locales.includes(locale as any)) {
    locale = routing.defaultLocale;
  }

  const files = [
    "home",
    "nav",
    "pages/vad-gor-vi",
    "pages/vanliga-fragor",
    "pages/vara-lokaler",
    "pages/policy",
    "pages/vara-batar",
  ];

  const messages = (
    await Promise.all(
      files.map((file) => import(`../../messages/${locale}/${file}.json`)),
    )
  ).reduce((acc, mod) => ({ ...acc, ...mod.default }), {});

  return { locale, messages };
});
