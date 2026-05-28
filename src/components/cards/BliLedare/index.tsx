import Image from "next/image";
import { bliLedareCardContent } from "@/data/bliLedareCardContent";

const BliLedareHome = () => {
  return (
    //TODO: a background wavy image will be applied later
    <article className="bg-primary font-body text-background p-6 md:grid md:place-items-center md:pt-20 md:pb-20">
      <div className="md:grid md:place-items-center w-full">
        <div className="flex w-full justify-center items-center">
          <Image
            src={`/Icons/party-leader-icon.svg`}
            height={30}
            width={30}
            alt=""
          />
          <h2 className="font-heading text-[22px] md:text-[40px] font-extrabold pl-2 md:text-5xl">
            <span className="text-accent">Bli ledare - </span>vi utbildar dig!
          </h2>
        </div>
        <p className="text-muted text-base md:text-xl pt-4 pb-4">
          Du behöver inga förkunskaper. Vi skickar dig på Scouternas
          ledarutbildning och du får stöd av erfarna ledare från dag ett.
        </p>
        <div className="flex flex-col md:flex-row">
          <ul className="flex flex-col gap-6 md:gap-2 pb-6 md:pb-0">
            {bliLedareCardContent &&
              bliLedareCardContent.map((card, index) => (
                <li
                  key={index}
                  className="flex border border-muted rounded-md pt-4 pb-4 bg-[#1A496F]"
                >
                  <div className="w-[30%] md:w-[20%] grid place-items-center">
                    <Image
                      src={`/Icons/${card.icon}`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-lg font-semibold">
                      {card.title}
                    </h3>
                    <p className="text-sm text-balance md:text-wrap">
                      {card.subtitle}
                    </p>
                  </div>
                </li>
              ))}
          </ul>
          {/* TODO: buttons will be replaced with button components later */}
          <div className="flex flex-col justify-between items-center text-center gap-6 font-bold md:pl-8">
            <div className="hidden md:block">
              <Image
                className="rounded-md"
                src={"/images/Body/home_body2.png"}
                height={300}
                width={300}
                alt=""
              />
            </div>
            <a
              className="w-full border border-accent bg-primary-hover text-accent rounded-sm p-4 text-lg cursor-pointer"
              href="https://www.scoutnet.se/register/in/group/764"
              target="_blank"
            >
              Anmäll ditt intresse <span className="pl-1">&#8594;</span>
            </a>
            <a
              className="border border-accent rounded-sm p-4 w-[70%] text-base text-accent cursor-pointer"
              href="/bli-ledare"
            >
              Mer information här
            </a>
          </div>
        </div>
      </div>
    </article>
  );
};

export default BliLedareHome;
