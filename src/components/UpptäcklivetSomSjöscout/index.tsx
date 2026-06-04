import Image from "next/image";
import InstaFeedCard from "../cards/InstaFeedCard";
import Link from "next/link";

export default function UpptäckLivetSomSjöscout() {
  return (
    <section className="w-full bg-blue-100">
      <div className="container">
        <Image
          src="/Icons/fe_arrow-down.svg"
          alt=""
          width={59}
          height={59}
          className="hidden md:block top-10 mx-auto"
        />
        <div className="flex flex-col items-start w-full md:max-w-6xl mx-auto gap-6">
          <h2 className="flex heading-2 items-center justify-between">
            <Image
              src="/Icons/yellow-instagram-icon.svg"
              alt=""
              width={41}
              height={41}
              className="h2-icon"
            />
            <span className="heading-3 font-bold md:heading-1">
              Upptäck livet som sjöscout
            </span>
          </h2>

          <div className="flex flex-col md:flex-row items-center gap-6 w-full order-1 md:order-2">
            <p className="paragraph flex-1 order-1 md:order-2">
              Kliv in i vår vardag, läger, segling, knutar och kamratskap. Se
              våra äventyr, vänskap och minnen som vi skapar tillsammans.
            </p>

            <Link
              href="https://www.instagram.com/hss_scout/"
              rel="noopener noreferrer"
              className="flex w-fit gap-3 justify-center items-center bg-primary px-6 py-3 rounded-sm order-3 md:order-1"
            >
              <Image
                src="/Icons/skill-icons_instagram.svg"
                alt=""
                width={40}
                height={40}
                className="w-10 h-10"
              />
              <div className="flex flex-col ">
                <h3 className="heading-3 text-accent whitespace-nowrap">
                  Följ oss på instagram
                </h3>
                <p className="paragraph text-background flex-1">@hss_scout</p>
              </div>
              <Image
                src="/Icons/yellowArrow.svg"
                alt=""
                width={23}
                height={23}
                className="transition-transform w-8 h-8 animate-pulse duration-100"
              />
            </Link>
          </div>

          <div className="w-full order-2 md:order-3">
            <InstaFeedCard />
          </div>
        </div>
        <Image
          src="/Icons/fe_arrow-down.svg"
          alt=""
          width={59}
          height={59}
          className="hidden md:block bottom-0 mx-auto"
        />
      </div>
    </section>
  );
}
