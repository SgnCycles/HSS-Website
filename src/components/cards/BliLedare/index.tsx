import Image from "next/image";
import { bliLedareCardContent } from "@/data/bliLedareCardContent";
import Button from "@/components/buttons/Button";
import { useTranslations } from "next-intl";

const BliLedareHome = () => {
  const tCards = useTranslations("BliLedareCard");
  const t = useTranslations("BliLedarePage");
  return (
    <section className="bg-primary font-body text-background grid place-items-center">
      <article className="container">
        <div className="flex w-full justify-center lg:justify-start items-center pb-0 md:pb-6">
          <Image
            src={`/Icons/party-leader-icon.svg`}
            height={30}
            width={30}
            alt=""
            className="h2-icon"
          />
          <h2 className="heading-2 text-white">
            <span className="text-accent">{t("headingAccent")}</span>{" "}
            <span className="hidden sm:inline-block">
              {t("headingSubtitle")}
            </span>
          </h2>
        </div>
        <p className="paragraph-light text-muted">{t("intro")}</p>
        <div className="flex flex-col justify-between md:flex-row">
          <ul className="cards-column pb-6 md:pb-0 w-full md:pr-6">
            {bliLedareCardContent &&
              bliLedareCardContent.map((card, index) => (
                <li
                  key={index}
                  className="flex border border-muted rounded-md pt-5 pb-5 pr-5 bg-[#1A496F]"
                >
                  <div className="min-w-20 grid place-items-center">
                    <Image
                      src={`/Icons/${card.icon}`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="heading-3 text-white">
                      {tCards(card.titleKey)}
                    </h3>
                    <p className="text-base text-wrap">
                      {tCards(card.subtitleKey)}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
          <div className="flex flex-col justify-between items-center text-center gap-6 font-bold">
            <div className="hidden md:flex">
              <Image
                className="rounded-md"
                src={"/images/Body/home_body2.png"}
                height={300}
                width={300}
                alt=""
              />
            </div>
            <Button
              ariaLabel=""
              href="https://www.scoutnet.se/register/in/group/764"
              variant="primaryBrown"
              text={t("cta")}
              target="_blank"
            />
            <Button
              ariaLabel=""
              href="/bli-ledare"
              variant="primaryBlue"
              text={t("readMore")}
              target="_self"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default BliLedareHome;
