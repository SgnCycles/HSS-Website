import Image from "next/image";
import { bliLedareCardContent } from "@/data/bliLedareCardContent";
import Button from "@/components/buttons/Button";

const BliLedareHome = () => {
  return (
    //TODO: a background wavy image will be applied later
    <section className="bg-primary font-body text-background grid place-items-center">
      <article className="container">
        <div className="flex w-full justify-center md:justify-start items-center pb-6">
          <Image
            src={`/Icons/party-leader-icon.svg`}
            height={30}
            width={30}
            alt=""
          />
          <h2 className="font-heading text-[24px] md:text-[30px] font-extrabold pl-2 text-nowrap">
            <span className="text-accent">Bli ledare - </span>vi utbildar dig!
          </h2>
        </div>
        <p className="paragraph-light text-muted">
          Du behöver inga förkunskaper. Vi skickar dig på Scouternas
          ledarutbildning och du får stöd av erfarna ledare från dag ett.
        </p>
        <div className="flex flex-col justify-between md:flex-row">
          <ul className="cards-column pb-6 md:pb-0 w-full md:pr-6">
            {bliLedareCardContent &&
              bliLedareCardContent.map((card, index) => (
                <li
                  key={index}
                  className="flex border border-muted rounded-md pt-5 pb-5 pr-5 bg-[#1A496F]"
                >
                  <div className="w-[30%] sm:w-[20%] grid place-items-center">
                    <Image
                      src={`/Icons/${card.icon}`}
                      height={30}
                      width={30}
                      alt=""
                    />
                  </div>
                  <div>
                    <h3 className="font-heading text-[18px] md:text-[20px] font-semibold">
                      {card.title}
                    </h3>
                    <p className="text-base text-wrap">
                      {card.subtitle}
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
              text="Anmäl ditt intresse"
              target="_blank"
            />
            <Button
              ariaLabel=""
              href="/bli-ledare"
              variant="primaryBlue"
              text="Mer information här"
              target="_blank"
            />
          </div>
        </div>
      </article>
    </section>
  );
};

export default BliLedareHome;