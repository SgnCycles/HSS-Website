import Image from "next/image";
import InstaFeedCard from "../cards/InstaFeedCard";
import Link from "next/link";

export default function UpptäckLivetSomSjöscout() {
  return (
    <main id="main-content">
      <section className=" bg-blue-100">
        <div className="container">
          <Image
            src="/Icons/fe_arrow-down.svg"
            alt=""
            width={35}
            height={35}
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
              <p className="paragraph flex-1 order-1 md:order-2 mb-0">
                Kliv in i vår vardag, läger, segling, knutar och kamratskap. Se
                våra äventyr, vänskap och minnen som vi skapar tillsammans.{" "}
                <span className="paragraph text-accent font-extrabold flex-1">
                  @hss_scout
                </span>
              </p>
              <Link
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
                <h3 className="heading-3 text-accent">
                  Följ oss<span className="pl-1">&#8594;</span>
                </h3>
              </Link>
            </div>
            <div className="w-full order-2 md:order-3">
              <InstaFeedCard />
            </div>
          </div>
          <Image
            src="/Icons/fe_arrow-down.svg"
            alt=""
            width={35}
            height={35}
            className="hidden md:block bottom-0 mx-auto"
          />
        </div>
      </section>
    </main>
  );
}
