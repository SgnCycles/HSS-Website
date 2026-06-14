import Button from "@/components/buttons/Button";
import Image from "next/image";
import { useTranslations } from "next-intl";

export default function NotFoundPage() {
  const t = useTranslations("not-found");

  return (
    <main id="main-content">
      <section className="container flex flex-col items-center">
        <Image
          src="/Icons/boat-icon.svg"
          height={30}
          width={30}
          alt=""
          className="h1-icon pb-6 mr-0"
        />
          <h1 className="heading-1 text-center pb-6 whitespace-pre-wrap md:whitespace-normal">{t("title")}</h1>
        <Button
          ariaLabel=""
          href="/"
          variant="secondaryBlue"
          text={`${t("cta")}`}
          target="_self"
        />
      </section>
    </main>
  );
}