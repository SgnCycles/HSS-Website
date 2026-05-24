import { scoutEquipment, scoutEquipmentStore } from "@/data/braAttVetaContent"
import Image from "next/image"
import Link from "next/link"

const BraAttVetaPage = () => {
  return (
    <article className="grid place-items-center bg-[url(/images/Backgrounds/blueWavyBoat2.png)] bg-cover sm:bg-right font-body pt-6 pb-6">
      <div className="w-[90%] sm:w-[70%] pb-6">
        <div className="w-full flex justify-center sm:justify-start items-center pb-2 sm:pb-6">
          <Image
            src="/Icons/yellow-information.svg"
            height={30}
            width={30}
            alt=""
          />
          <h1 className="font-heading text-primary text-[25px] md:text-[40px] font-extrabold text-nowrap pl-2">
            Bra att veta
          </h1>
        </div>
        <p className="pb-4">
          Vilka kläder och saker behöver man för att bli scout? Det behövs inget
          särskilt för att börja i Scouterna. Men det finns en del saker som kan
          vara bra att ha eller låna efter ett tag.
        </p>
        <ul className="list-disc pl-6 sm:pl-8 pb-6">
          {scoutEquipment &&
            scoutEquipment.map((equipment, index) => (
              <li key={index} className="">{equipment}</li>
            ))}
        </ul>
        <Link
          className="text-primary underline hover:opacity-80 visited:text-purple-600 font-semibold"
          href="https://www.scouterna.se/scout-ledare-kar/jag-ar-scout/scoutklader/"
          target="_blank"
        >
          Läs mer om scoutdräkten här &#62;&#62;
        </Link>
      </div>
      <div className="w-[90%] sm:w-[70%]">
        <div className="w-full flex justify-center sm:justify-start items-center pb-2 sm:pb-6 sm:pt-6">
          <Image
            className="hidden sm:block"
            src="/images/Logo/logo.png"
            height={30}
            width={30}
            alt=""
          />
          <h2 className="font-heading text-primary text-center text-xl md:text-left font-semibold pl-2">
            Vad är det som skiljer HSS från andra scoutkårer?
          </h2>
        </div>
        <div className="w-full flex flex-row pb-6">
          <div className="w-full flex flex-col justify-between sm:pr-4">
            <p className="text-base pb-4">
              Självklart våra supersnygga, praktiska och slitstarka HSS-tröjor!
            </p>
            <ul className="pl-4 pb-6 sm:pl-4">
              {scoutEquipmentStore &&
                scoutEquipmentStore.map((equipment, index) => (
                  <li key={index} className="">{equipment}</li>
                ))}
            </ul>
            <p>
              Tröjorna köps enklast på kårdiscot i november eller på
              sommaravslutningen i juni.
            </p>
            <h3 className="hidden sm:block font-heading text-lg text-primary font-bold">
              Du kan självklart också mejla:
              <a href="mailto:info@hss-scout.org" className="underline"> hsstrojan@hss-scout.org</a>
            </h3>
          </div>
          <div className="md:w-[50%] hidden sm:grid sm:place-items-center">
            <Image
              className="w-full h-auto rounded-md"
              src="/images/Body/braAttVeta_body1.png"
              height={1200}
              width={800}
              alt=""
            />
          </div>
        </div>
      </div>
      <div className="w-full sm:hidden pt-6 pb-6 ">
        <Image
          className="w-full h-auto"
          src="/images/Body/braAttVeta_body1.png"
          height={1200}
          width={800}
          alt=""
        />
      </div>
      <div className="sm:hidden pb-6">
        <h3 className="font-heading text-lg text-primary font-bold">
          Du kan självklart också mejla:
        </h3>
        {/* TODO: button bellow will be replaced with button element when ready */}
        <div className="border border-blue-500 bg-primary rounded-sm p-4 md:p-2 text-[15px] text-accent cursor-pointer mt-4 grid place-items-center font-semibold w-[90%] md:w-[35%] place-self-center md:place-self-end">
          <a href="mailto:info@hss-scout.org">hsstrojan@hss-scout.org</a>
        </div>
      </div>
      <div className="w-[90%] sm:w-[80%] bg-yellow-200 border border-accent rounded-md p-4">
        OBS! Tänk på att när en HSS-tröja har tjänat ut skall den slängas och
        inte lämnas till klädinsamling. HSS-tröjor är till för medlemmar i HSS
        och ingen annan!
      </div>
    </article>
  );
};

export default BraAttVetaPage;
