import Image from "next/image";
import { bliLedareCardContent } from "@/data/bliLedareCardContent";
import Button from "@/components/buttons/Button";
import { useTranslations } from "next-intl";
import InternalButton from "@/components/buttons/InternalButton";

const BliLedareHome = () => {

  const tCards = useTranslations("BliLedareCard");
  const t = useTranslations("BliLedarePage");

  return (
    <section className="bg-primary font-body text-background grid place-items-center">
      <article className="container">
        <div className="flex w-full justify-center lg:justify-start items-center pb-6">
          <Image
            src={`/Icons/party-leader-icon.svg`}
            height={30}
            width={30}
            alt=""
            className="h2-icon"
          />
          <h2 className="heading-2 text-accent">{t("heading1")}<span className="hidden sm:inline-block text-white">{t("heading2")}</span>
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
          <div className="cards-column items-center text-center font-bold">
            <div className="hidden md:flex relative flex-1 md:max-h-85 w-full">
              <Image
                className="rounded-md object-cover"
                src="/images/Body/home_body2.png"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
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
            <InternalButton
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