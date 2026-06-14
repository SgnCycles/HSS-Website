import Button from "@/components/buttons/Button";
import Image from "next/image";
import type { Metadata } from "next";
import { useTranslations } from "next-intl";

export const metadata: Metadata = {
  title: "HSS - Engagera dig",
  description:
    "Som förälder behöver du inget fast uppdrag – även tillfällig hjälp är värdefull för kårens verksamhet och barnens scoutupplevelse.",
};

const EngageraDigSomVuxenPage = () => {

  const t = useTranslations("engagera-dig");
  const tActivityList = t.raw("activityList") as {
    id: string,
    icon: string,
    activity: string,
  }[];

  return (
    <main
      id="main-content"
      className="md:bg-[url(/images/Backgrounds/boatBackground1.png)] bg-no-repeat bg-top-right bg-size-[auto_200px]"
    >
      <section className="container">
        <article>
          <div className="flex w-full justify-center items-center lg:justify-start pb-6">
            <Image
              src={`/Icons/engagera-icon.svg`}
              height={30}
              width={30}
              alt=""
              className="h1-icon"
            />
            <h1 className="heading-1">
               {t("titleOne")}{" "}
              <span className="hidden sm:inline-block">{t("titletwo")}</span>
            </h1>
          </div>
          <p className="paragraph-light">
            {t("intro")}
          </p>
          <div className="flex justify-center items-center">
            <ul className="cards-column pb-6 md:w-[70%] mb-6">
              {tActivityList &&
                tActivityList.map((card, index) => (
                  <li
                    key={index}
                    className="flex border border-[#1E7BC4] rounded-md p-4 bg-blue-100 min-h-17"
                  >
                    <div className="min-w-20 grid place-items-center">
                      <span className="text-3xl md:text-4xl">{card.icon}</span>
                    </div>
                    <div className="grid place-items-center">
                      <p className="paragraph-light font-medium mb-0">
                        {card.activity}
                      </p>
                    </div>
                  </li>
                ))}
            </ul>
          </div>
        </article>
        <article className="card sm:bg-yellow-200 md:border sm:border-accent">
          <h2 className="heading-3 text-center md:text-left pb-6">
            {t("sectionTwoTitle")}
          </h2>
          <p className="paragraph-light text-center md:text-left">
            {t("sectionTwoIntro")}
          </p>
          <div className="flex justify-end">
            <Button
              ariaLabel=""
              href="mailto:info@hss-scout.org"
              variant="primaryBlue"
              text={`${t("contactUs")}`}
            />
          </div>
        </article>
      </section>
    </main>
  );
};

export default EngageraDigSomVuxenPage;