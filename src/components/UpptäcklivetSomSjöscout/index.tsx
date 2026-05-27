import Image from "next/image";
import InstaFeedCard from "../cards/InstaFeedCard";
import Link from "next/link";

export default function UpptäckLivetSomSjöscout() {
  return (
    <section className="w-full relative flex flex-col justify-center gap-6 items-center pb-25 md:pt-30 px-4">
      <Image
        src="/Icons/fe_arrow-down.svg"
        alt=""
        width={59}
        height={59}
        className="hidden md:block absolute top-10 flex justify-center items-center"
      />
      {/* <Image src="/images/Backgrounds/lightblueInstaSection.png" alt="" width={393} height={448} className="absolute w-[393px] h-[448px] -z-10 md:w-full md:h-auto"/>  */}
      <div className="flex flex-col items-start w-full md:max-w-6xl  mx-auto  gap-6">
        <h2 className="flex gap-2 pt-4">
          <Image
            src="/Icons/yellow-instagram-icon.svg"
            alt=""
            width={41}
            height={41}
            className="w-10 h-10 md:w-10.25 md:h-10.25"
          />
          <span className="text-primary md:text-4xl text-xl font-heading font-extrabold">
            Upptäck livet som sjöscout
          </span>
        </h2>
        <div className="flex flex-col md:flex-row items-center gap-6">
          <Link
            href="https://www.instagram.com/hss_scout/"
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
          <div className="text-[#363636] font-medium flex flex-col">
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
      <Image
        src="/Icons/fe_arrow-down.svg"
        alt=""
        width={59}
        height={59}
        className="hidden md:block absolute bottom-0 flex justify-center items-center"
      />
    </section>
  );
}
