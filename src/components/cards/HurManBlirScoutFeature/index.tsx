import Link from "next/link"
import HurManBlirScoutSteps from "../HurManBlirScoutSteps"
import Button from "@/components/buttons/Button"
import Image from "next/image"

const HurManBlirScoutFeature = () => {
  return(
    <div className="full-bleed bg-primary">
      <div className="container">
        <div className="section flex md:ml-6">
          <Image className="h-auto w-auto mt-auto mb-auto md:h-10" src={"/icons/yellow-two-people-icon.svg"} height={50} width={50} alt="" />
          <h2 className="heading-2 text-white">Hur man blir <span className="text-accent">scout?</span></h2>
        </div>
        <p className="paragraph-light text-white">Det är enkelt att komma igång! Fyra steg och du är en del av vår kårfamilj.</p>
        <div className="md:flex">
          <div className="section">
            <HurManBlirScoutSteps />
          </div>
          <div className="section gap-4 flex flex-col items-center">
            <div className="card border border-accent flex flex-col justify-center bg-[#00000033] items-center text-white mt-4">
              <ul className="border-b">
                <div className="flex">
                  <h3 className="heading-3 text-white">Terminavgift inkluderar</h3>
                </div>
                <div className="flex">
                  <Image className="h-auto w-auto mb-4 mr-1.5 md:h-5" src={"/icons/yellow-check-icon.svg"} height={50} width={50} alt="" />
                  <li className="paragraph-light">Veckomöten & aktiviteter</li>
                </div>
                <div className="flex">
                  <Image className="h-auto w-auto mb-4 mr-1.5 md:h-5" src={"/icons/yellow-check-icon.svg"} height={50} width={50} alt="" />
                  <li className="paragraph-light">Försäkring via Scouterna</li>
                </div>
                <div className="flex">
                  <Image className="h-auto w-auto mb-4 mr-1.5 md:h-5" src={"/icons/yellow-check-icon.svg"} height={50} width={50} alt="" />
                  <li className="paragraph-light">Tillgång till båtar & utrustning</li>
                </div>
              </ul>
              <div className="flex gap-2">
                <p>Har du frågor?</p>
                <Link className="underline" href="/vanliga-fragor">Besök FAQ</Link>
              </div>
            </div>
            <Button ariaLabel="link" variant="primaryBrown" href="/aldersgrupper" text="Läs mer om åldersgrupper" />
            <Link href={"https://www.scoutnet.se/register/in/group/764"} target="_blank" className="font-bold bg-primary hover:bg-primary-hover text-accent hover:text-accent-hover border-accent hover:border-accent/50 text-center px-[42px] w-[80%] sm:w-max transition-all duration-300 border inline-flex items-center justify-center rounded-sm py-2 min-h-[70px]">Ansök om att bli scout! →</Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HurManBlirScoutFeature