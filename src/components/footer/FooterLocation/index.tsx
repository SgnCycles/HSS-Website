import Image from "next/image";
import Link from "next/link";

type FooterLocationType = {
  title: string,
  address: string,
  googleMapslink: string
}

const FooterLocation = ({ title, address, googleMapslink }: FooterLocationType) => {

  const addresses = address.split('|')

  return (
    <div>
      <div className="flex flex-row">
        <Image src={`/icons/yellow-address-icon.svg`} height={18} width={15} alt={`AddressIcon`}></Image>
        <h3 className="font-body text-white font-bold pl-1 text-[16px]">{title}</h3>
      </div>
      {addresses.map((address, index) => {
        return <p key={index} className="text-grey-300 font-body text-[14px]">{address}</p>
      }
      )}
      <div className="flex flex-row">
        <Link target="_blank" className="font-body text-white pr-1 text-[16px] font-bold" href={googleMapslink}>Hitta hit</Link>
        <Image src={`/icons/yellow-link-icon.svg`} height={18} width={15} alt={`LinkIcon`}></Image>
      </div>
    </div >
  )
}

export default FooterLocation