import Image from "next/image";
import InstaFeedCard from "../cards/InstaFeedCard";
import Link from "next/link";
import Border from "../common/Border";

export default function UpptäckLivetSomSjöscout() {
  return (

      <section className="w-full relative flex flex-col justify-center gap-6 items-center pb-25 md:pt-70 pt-10">
        <Image
          src="/Icons/fe_arrow-down.svg"
          alt=""
          width={59}
          height={59}
          className="hidden md:block absolute top-10 mx-auto"
        />
        <Image src="/images/Backgrounds/lightblueInstaSection.png" alt={""} fill className="-z-50 w-full md:h-96"/>
        <div className="w-full h-auto">
          <div className="flex flex-col items-start w-full md:max-w-6xl  mx-auto  gap-6">
            <h2 className="flex items-center gap-2 pt-4 text-primary md:text-4xl text-xl font-heading font-extrabold">
              <Image
                src="/Icons/yellow-instagram-icon.svg"
                alt=""
                width={41}
                height={41}
                className="w-10 h-10 md:w-10.25 md:h-10.25"
              />
                Upptäck livet som sjöscout
            </h2>
            <div className="flex flex-col md:flex-row items-center gap-6">
              <Link
                href="https://www.instagram.com/hss_scout/" rel="noopener noreferrer"
                className="flex gap-3 text-center justify-center items-center bg-primary px-6 py-3 rounded-sm"
              >
                <Image
                  src="/Icons/skill-icons_instagram.svg"
                  alt=""
                  width={72}
                  height={72}
                  className="w-18 h-18"
                />
                <div className="flex flex-col">
                  <span className="block font-body text-accent font-extrabold">
                    Följ oss på instagram{" "}
                  </span>
                  <span className="font-body text-background font-bold ">
                    @hss_scout
                  </span>
                </div>
                <Image
                  src="/Icons/yellowArrow.svg"
                  alt=""
                  width={33}
                  height={33}
                  className="transotion-transform w-8.25 h-8.25 animate-pulse duration-100"
                />
              </Link>
              <div className="text-black font-medium flex flex-col">
                <span>
                  Kliv in i vår vardag, läger, segling, knutar och kamratskap.
                </span>
                <span>
                  Se våra äventyr, vänskap och minnen som vi skapar tillsammans.
                </span>
              </div>
            </div>
            <InstaFeedCard />
          </div>
        </div>
        <Image
          src="/Icons/fe_arrow-down.svg"
          alt=""
          width={59}
          height={59}
          className="hidden md:block absolute bottom-0 mx-auto"
        />
    
      </section>
    
  );
}
