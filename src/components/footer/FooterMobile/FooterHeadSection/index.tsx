import Link from "next/link"
import Image from "next/image";

const FooterHeadSection = () => {
  return (
    <div className="bg-linear-to-t from-blue-200 py-4">
      <div className="text-center px-4">
        <h3 className="font-heading text-blue-900 font-extrabold text-[18px]">Hässelby Strands Sjöscoutkår</h3>
        <p className="font-body text-[15px]">En stolt del av Scouterna sedan 1959.
          Vi ger barn och ungdomar äventyr, sjömanskap och gemenskap vid Hässelby Strand.</p>
      </div>
      <div className="flex justify-center p-4">
        <Image src={`/images/Logo/scouterna_logo.png`} height={113} width={170} alt={`ScouternaLogoImage`} className=""></Image>
      </div>
      <div className="flex justify-around text-blue-900 text-[14px]">
        <Link target="_blank" href="https://www.scoutshop.se/">Scoutshop</Link>
        <Link target="_blank" href="https://www.scouternasfolkhogskola.se/">Scouternas folkhögskola</Link>
        <Link target="_blank" href="https://www.scoutnet.se/f/login">Scoutnet</Link>
      </div>
    </div>
  )
}

export default FooterHeadSection