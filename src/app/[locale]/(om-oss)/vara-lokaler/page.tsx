import Button from "@/components/buttons/Button"
import Image from "next/image"
import Link from "next/link"

const VaraLokalerPage = () => {
  return (
    <main id="main-content">
      <section className="container flex flex-col justify-center items-center pb-0">
        <div className="flex justify-center">
          <Image className="h2-icon" src="/Icons/house-heart-icon.svg" height={30} width={30} alt="" />
          <h1 className="heading-2">Våra lokaler</h1>
        </div>
        <p className="paragraph-light text-center">Upptäck våra lokaler vid vattnet och ute i skogen.</p>
        <div className="">
          <h2 className="heading-3">Myset</h2>
          <div className="text-base font-body flex gap-2 pl-2 pr-2 justify-center rounded-md w-fit border bg-secondary border-accent text-center self-center mt-2 mb-2">
            <p>Vår scoutstuga i skogen</p>
          </div>
          <p className="paragraph-light">I Lövstaskogarna mellan Lövsta och Gåseborg ligger Myset. En varm, fräsch och välutrustad scoutstuga med plats för upp till 40 personer. Perfekt för läger, hajker och kårmästerskap.</p>
          <h3 className="heading-4">📍Koordinater</h3>
          <p className="paragraph-light">59.3971277, 17.7698322</p>
        </div>
        <Button
          ariaLabel="Google Maps"
          href=""
          variant="primaryBlue"
          text="Hitta hit →"
        />
        <div className="w-screen mt-5">
          <Image src="/images/Body/varaLokaler_body1.png" height={324} width={400} alt="Myset" className="h-auto w-auto" />
        </div>
      </section>
      <section className="bg-blue-100">
        <div className="container">
          <h3 className="heading-4">Storlek:</h3>
          <p className="paragraph-light">170 kvm</p>
          <h3 className="heading-4">Kapacitet:</h3>
          <p className="paragraph-light">~40 golvplatser</p>
          <p className="paragraph-light">· 30 madrasser</p>
          <p className="paragraph-light">· 4 sängar</p>
          <h3 className="heading-4">Uppvärmning:</h3>
          <p className="paragraph-light">El · vedspis · brasa · element</p>
          <h3 className="heading-4">Max personer:</h3>
          <p className="paragraph-light">Servering för upp till 30</p>
        </div>
      </section>
      <section>
        <div className="container">
          <div className="flex">
            <Image className="h3-icon" src="/Icons/egg-cooking-icon.svg" height={30} width={30} alt="" />
            <h3 className="heading-3">Fullt utrustad kök</h3>
          </div>
          <p className="paragraph-light">El- och vedspis, diskmaskin, mikrovågsugn, stort kylskåp och kaffebryggare. Rinnande kall- och varmvatten från egen brunn 4 meter från huset.</p>
          <div className="flex">
            <Image className="h3-icon" src="/Icons/bonfire-icon.svg" height={30} width={30} alt="" />
            <h3 className="heading-3">Mysig samlingsrum</h3>
          </div>
          <p className="paragraph-light">Stort samlingsrum med öppen brasa, nya ventilationssystemet och element. Riktigt varmt och hemtrevligt även på vintern.</p>
          <div className="flex">
            <Image className="h3-icon" src="/Icons/forest-icon.svg" height={30} width={30} alt="" />
            <h3 className="heading-3">Skogsmiljö</h3>
          </div>
          <p className="paragraph-light">Beläget i Lövstaskogarna nära Kyrkhamn. Naturen runt stugan bjuder på friluftsliv, hajker och äventyr direkt utanför dörren.</p>
        </div>
      </section>
      <section className="">
        <div className="container flex flex-col justify-center">
          <h2 className="heading-3">Boka Myset</h2>
          <p className="paragraph-light">Vi hyr gärna ut till scoutkårer, skolklasser och andra grupper.</p>
          <Link target="_blank" href="" className="paragraph-light underline underline-offset-2 text-blue-900">Se planlösning →</Link>
          <Button
            ariaLabel="skicka bokningsförfrågan"
            href=""
            variant="primaryBlue"
            text="Skicka bokningsförfrågan →"
          />
          <div className="w-screen mt-5 self-center">
            <Image src="/images/Body/varaLokaler_body2.png" height={324} width={400} alt="Myset" className="object-cover h-60 w-auto" />
          </div>
        </div>
      </section>
      <section className="container flex flex-col justify-center items-center pb-0">
        <div className="">
          <h2 className="heading-3">Ruffen</h2>
          <div className="text-base font-body flex gap-2 pl-2 pr-2 justify-center rounded-md w-fit border bg-secondary border-accent text-center self-center mt-2 mb-2">
            <p>Scoutkårens klubbhus</p>
          </div>
          <p className="paragraph-light">Scoutkårens nuvarande klubbhus ligger nere vid vattnet i Hässelby Strand.</p>
          <p className="paragraph-light">Huset används som samlingslokal för sjöscouterna och är nära båtar och bryggor. Byggnaden ägs enligt den historiska texten av det intilliggande Hässelbyverket, som stött ungdomsverksamheten positivt.</p>
          <p className="paragraph-light">HSS bedriver sjöscouting sedan 1959 och använder Ruffen som bas för möten, segling och lägerförberedelser.</p>
        </div>
      </section>
      <section className="bg-blue-100">
        <div className="container">
          <h3 className="heading-3">Om stugan</h3>
          <h3 className="heading-4">Aktivt sedan:</h3>
          <p className="paragraph-light">År 1959</p>
          <h3 className="heading-4">Läge:</h3>
          <p className="paragraph-light">Nere vid vattnet <br></br>Hässelby Strand, nära bryggor och båtar</p>
          <h3 className="heading-4">Användning:</h3>
          <p className="paragraph-light">Möten & lägerförberedelser <br></br>Alla avdelningar håller till här</p>
        </div>
      </section>
      <section>
        <div className="w-screen">
          <Image src="/images/Body/varaLokaler_body3.png" height={324} width={400} alt="Myset" className="h-auto w-auto" />
        </div>
        <div className="container">
          <div>
            <div className="flex">
              <Image className="" src="/Icons/location-icon.svg" height={21} width={16} alt="h3-icon" />
              <h3 className="heading-4">Adress</h3>
            </div>
            <p className="paragraph-light">Hässelby strandväg,
              <br></br>165 65 Hässelby, Stockholm</p>
          </div>
          <div>
            <h3 className="heading-4">📍Koordinater</h3>
            <p className="paragraph-light">59.36328435188759, 17.822173946489528</p>
          </div>
          <Button
            ariaLabel="Google Maps"
            href=""
            variant="primaryBlue"
            text="Hitta hit →"
          />
        </div>
      </section>
    </main >
  )
}

export default VaraLokalerPage