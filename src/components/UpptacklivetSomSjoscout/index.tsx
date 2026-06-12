import Image from "next/image";
import Link from "next/link";
import InstaFeedCard from "../cards/InstaSection";

export default function UpptäckLivetSomSjöscout() {
  return (
    <section className=" bg-blue-100">
      <div className="container">
        <div className="flex flex-col items-start w-full md:max-w-6xl mx-auto gap-6">
          <div className="self-center lg:self-baseline pb-0">
            <h2 className="flex heading-2 items-center justify-between">
              <Image
                src="/Icons/yellow-instagram-icon.svg"
                alt=""
                width={41}
                height={41}
                className="h2-icon"
              />
              <span className="font-bold md:heading-2 hidden sm:flex items-center">
                Upptäck livet som sjöscout
              </span>
              <span className="flex sm:hidden">Livet som sjöscout</span>
            </h2>
          </div>
          <div className="flex flex-col md:flex-row items-center gap-6 w-full order-1 md:order-2">
            <p className="paragraph flex-1 order-1 md:order-2 mb-0">
              Kliv in i vår vardag, läger, segling, knutar och kamratskap. Se
              våra äventyr, vänskap och minnen som vi skapar tillsammans.
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
                Följ oss<span className="pl-1">&#8594;</span>
              </p>
            </Link>
          </div>
          <div className="w-full order-2 md:order-3">
            <InstaFeedCard />
          </div>
        </div>
      </div>
    </section>
  );
}
