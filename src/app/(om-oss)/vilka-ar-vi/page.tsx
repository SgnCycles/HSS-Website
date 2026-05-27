import Image from "next/image"
import Link from "next/link"

const VilkaArViPage = () => {
  return (
    <>
      <article className="flex flex-col items-center">
        <div className="flex flex-row items-center p-2.5 gap-2.5">
          <Image src={`/images/Logo/logo.png`} height={30} width={30} alt="logo" className="h-max" />
          <h1 className="font-heading text-[25px] font-semibold text-blue-900">Om HSS</h1>
        </div>
        <div className="flex gap-2 pl-2 pr-2 justify-center rounded-md w-fit border bg-secondary border-accent mb-5">
          <p className="font-body">Scoutkåren bildades 1959</p>
        </div>
        <div className="font-body p-5 pt-0">
          <p>Hässelby Strands Sjöscoutkår (HSS) är en traditionsrik ideell ungdomsverksamhet med fokus på scouting och båtliv.
            Vi är religiöst och politisk obundna, och medlem i Svenska Scoutförbundet, som med ca 65.000 medlemmar är en av Sveriges största ungdomsorganisationer.</p>
        </div>
        <Image src={`/images/Body/vilkaViAr_body1.png`} height={276} width={393} alt="vilkaViAr" />
        <p className="font-body p-5">Målet med vår verksamhet är att ge barn och ungdomar möjligheten att uppleva naturen, båtlivet, sjömanskapet, utmaningarna och – framförallt – kamratskapet. Grundidén är Learning by doing. Inom scouterna finns ingen avbytarbänk!</p>
        <Image src={`/images/Body/vilkaViAr_body2.png`} height={276} width={393} alt="vilkaViAr" />
        <p className="font-body p-5">Scoutkåren bildades 1959 och bedriver verksamheten i en trevlig lokal (kallad Ruffen) vid Mälarens strand i Hässelby. Kåren har omkring 130 glada medlemmar, äger fem segelbåtar, tio optimistjollar, två 2-kronor, snabb följebåt och en stor scoutstuga.</p>
        <Image src={`/images/Body/vilkaViAr_body3.png`} height={276} width={393} alt="vilkaViAr" />
      </article>
      <article className="flex flex-col bg-yellow-200 p-5">
        <h2 className="font-heading text-[20px] font-semibold text-blue-900">Se andra dokument</h2>
        <Link target="_blank" href="/pdf/Stadgar-Hasselby-Strands-Sjoscoutkar-beslutad-2025-10-22-signerade.pdf" className="font-body underline underline-offset-2 text-blue-900">Stadgar för Hässelby Strands Sjöscoutkår →</Link>
        <Link target="_blank" href="/pdf/Verksamhetsplan-for-perioden-2025-09-01-2026-12-31.pdf" className="font-body underline underline-offset-2 text-blue-900">Verksamhetsplan för perioden 2025-2026 →</Link>
        <Link target="_blank" href="/pdf/HSS-karstamma-2025-10-22-protokoll-signerat" className="font-body underline underline-offset-2 text-blue-900">HSS Kår stämma för 2025 →</Link>
      </article>
      <article>
        <div className="flex flex-row items-center p-5 gap-2.5 pb-0">
          <Image src={`/Icons/yellow-anchor-icon.svg`} height={30} width={30} alt="anchor" className="h-max" />
          <h2 className="font-heading text-[25px] font-semibold text-blue-900">Historien om HSS</h2>
        </div>
        <div className="p-5">
          <p>HSS grundades år 1959 och växte snabbt tack vare ett starkt engagemang från både ledare, föräldrar och scouter. Tillsammans hjälptes man åt att bygga upp verksamheten genom aktiviteter, insamlingar och ideellt arbete.
            <br></br><br></br>
            Kårens första båt, Igelknäcken (“Inga-Lunda”), blev starten på HSS starka sjöscouttradition. Med tiden kunde fler båtar köpas in tack vare basarer, lotterier och ett stort gemensamt engagemang.
            Under 1960-talet fortsatte kåren att växa. Fler barn och ungdomar hittade till scoutinglivet, och segling på Mälaren blev en självklar del av verksamheten. Nya båtar sjösattes och sjölivet blev en viktig del av gemenskapen.
            <br></br><br></br>
            Behovet av en egen samlingsplats på land växte också fram. Genom många ideella krafter byggdes scoutstugan Myset, som invigdes 1968. Än idag används den som en plats för läger, gemenskap och minnen.
            <br></br><br></br>
            Sedan starten har HSS varit en sjöscoutkår präglad av gemenskap, samarbete och äventyr. Det är en tradition som fortfarande lever vidare idag.
          </p>
        </div>
        <div className="flex flex-col items-center">
          <Image src={`/images/Body/vilkaViAr_historia_body1.png`} height={276} width={393} alt="historia" />
          <Image src={`/images/Body/vilkaViAr_historia_body2.png`} height={276} width={393} alt="historia" />
          <Image src={`/images/Body/vilkaViAr_historia_body3.png`} height={276} width={393} alt="historia" />
          <Image src={`/images/Backgrounds/blueWavyLine.png`} height={29} width={350} alt="wavy-line" />
        </div>
      </article >
    </>
  )
}

export default VilkaArViPage