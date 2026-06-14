import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import InstaSection from "../cards/InstaSection";

export default function UpptäckLivetSomSjöscout() {
  const t = useTranslations("home");
  return (
    <section className=" bg-blue-100">
      <div className="container">
        <div className="flex flex-col items-start w-full md:max-w-6xl mx-auto gap-6">
          <div className="self-center lg:self-baseline pb-0">
            <h2 className="flex heading-2 items-center gap-2">
              <Image
                src="/Icons/yellow-instagram-icon.svg"
                alt=""
                width={41}
                height={41}
                className="h2-icon"
              />
              <span className="font-bold md:heading-2  sm:flex items-center">
                {t("discover_title")}
              </span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 w-full order-1 md:order-2">
            <p className="paragraph flex-1 order-1 md:order-2 mb-0">
              {t("ig_description")}
              <Link
                className="paragraph text-primary font-extrabold flex-1"
                href="https://www.instagram.com/hss_scout/"
                target="_blank"
              >
                @hss_scout
              </Link>
            </p>
            <Link
              target="blank"
              href="https://www.instagram.com/hss_scout/"
              rel="noopener noreferrer"
              className="flex md:justify-around justify-center items-center w-full md:w-55 p-2 bg-primary rounded-sm order-3 md:order-1"
            >
              <Image
                src="/Icons/skill-icons_instagram.svg"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10 pr-2"
              />
              <p className="heading-3 text-accent">
                {t("follow_us")}
                <span className="">&#8594;</span>
              </p>
            </Link>
          </div>
          <div className="w-full order-2 md:order-3">
            <InstaSection />
          </div>
        </div>
      </div>
    </section>
  );
}
