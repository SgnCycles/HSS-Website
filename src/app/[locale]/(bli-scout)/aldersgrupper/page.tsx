import Image from "next/image";
import type { Metadata } from "next";
import AgeGroupPageMobile from "@/components/cards/AgeGroupCardMobile";
import AgeGroupPageDesktop from "@/components/cards/AgeGroupCardDesktop";
import { useTranslations } from "next-intl";
import { getTranslations } from "next-intl/server";

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations("aldersgrupper");
  return {
    title: `${t("metaTitle")}`,
    description: `${t("metaDescription")}`,
  };
}

const AgeGroupPage = () => {
  const t = useTranslations("aldersgrupper");

  return (
    <main
      id="main-content"
      className="md:bg-[url('/images/Backgrounds/blueWavyBoat2.png')] md:bg-no-repeat md:bg-size-[100%_auto]"
    >
      <section className="font-body">
        <article className="md:container md:flex flex-col">
          <div className="container pb-0 pt-0">
            <div className="flex w-full justify-center lg:justify-start items-center pb-6 pt-6 lg:pt-0">
              <Image
                src="/Icons/anchor-icon.svg"
                height={25}
                width={25}
                alt=""
                className="h1-icon"
              />
              <h1 className="heading-1">{t("title")}</h1>
            </div>
            <div className="flex sm:justify-between pb-6">
              <p className="paragraph-light">{t("intro")}</p>
            </div>
          </div>
          <ul className="flex flex-col md:hidden">
            <AgeGroupPageMobile />
          </ul>
          <ul className="hidden md:flex flex-col h-auto justify-center items-center gap-6 pb-6">
            <AgeGroupPageDesktop />
          </ul>
        </article>
      </section>
    </main>
  );
};

export default AgeGroupPage;
