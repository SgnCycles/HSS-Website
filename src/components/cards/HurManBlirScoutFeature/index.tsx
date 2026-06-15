import { Link } from "@/i18n/routing";
import HurManBlirScoutSteps from "../HurManBlirScoutSteps";
import Button from "@/components/buttons/Button";
import Image from "next/image";

const HurManBlirScoutFeature = () => {
  return (
    <div className="bg-primary">
      <div className="container">
        <div className="flex justify-center lg:justify-start pb-6">
          <Image
            className="h2-icon"
            src="/Icons/yellow-two-people-icon.svg"
            height={50}
            width={50}
            alt=""
          />
          <h2 className="heading-2 text-white">
            Hur man blir <span className="text-accent">scout?</span>
          </h2>
        </div>
        <p className="paragraph-light text-white">
          Det är enkelt att komma igång! Fyra steg och du är en del av vår
          kårfamilj.
        </p>
        <div className="md:flex justify-between">
          <div className="section">
            <HurManBlirScoutSteps />
          </div>
          <div className="section gap-4 flex flex-col items-center">
            <div className="card border border-accent flex flex-col justify-center bg-[#00000033] items-center text-white mt-4 md:mt-0">
              <ul className="border-b">
                <div className="flex">
                  <h3 className="heading-3 text-white mb-4 m-auto">
                    Terminavgift inkluderar
                  </h3>
                </div>
                <div className="flex items-center">
                  <Image
                    className="h-auto w-auto mb-4 mr-1.5 md:h-5"
                    src="/Icons/yellow-check-icon.svg"
                    height={50}
                    width={50}
                    alt=""
                  />
                  <li className="paragraph-light">Veckomöten & aktiviteter</li>
                </div>
                <div className="flex items-center">
                  <Image
                    className="h-auto w-auto mb-4 mr-1.5 md:h-5"
                    src="/Icons/yellow-check-icon.svg"
                    height={50}
                    width={50}
                    alt=""
                  />
                  <li className="paragraph-light">Försäkring via Scouterna</li>
                </div>
                <div className="flex items-center">
                  <Image
                    className="h-auto w-auto mb-4 mr-1.5 md:h-5"
                    src="/Icons/yellow-check-icon.svg"
                    height={50}
                    width={50}
                    alt=""
                  />
                  <li className="paragraph-light">
                    Tillgång till båtar & utrustning
                  </li>
                </div>
              </ul>
              <div className="flex gap-2 mt-4">
                <p>Har du frågor?</p>
                <Link className="underline" href="/vanliga-fragor">
                  Besök FAQ
                </Link>
              </div>
            </div>
            <Button
              ariaLabel="link"
              variant="primaryBrown"
              href="/aldersgrupper"
              text="Läs mer om åldersgrupper"
              target="_self"
            />
            <Link
              href="https://www.scoutnet.se/register/in/group/764"
              target="_blank"
              className="font-bold bg-primary hover:bg-primary-hover text-accent hover:text-accent-hover border-accent hover:border-accent/50 text-center px-10.5 w-[80%] sm:w-max transition-all duration-300 border inline-flex items-center justify-center rounded-sm py-2 min-h-17.5"
            >
              Ansök om att bli scout!<span className="hidden md:block">→</span>
            </Link>
          </div>
        </div>
      </div >
    </div >
  );
};

export default HurManBlirScoutFeature;