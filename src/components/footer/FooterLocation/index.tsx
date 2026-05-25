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
      <div className="flex flex-row md:items-center md:pt-5">
        <Image src="/Icons/yellow-address-icon.svg" height={18} width={15} alt="AddressIcon" className="md:w-5 md:h-[25.51px]"></Image>
        <h3 className="font-body text-white font-bold pl-1 text-[16px] md:text-[22px]">{title}</h3>
      </div>
      {addresses.map((address, index) => {
        return <p key={index} className="text-grey-300 font-body text-[14px] md:text-[20px]">{address}</p>
      }
      )}
      <div className="flex flex-row md:items-center">
        <Link target="_blank" className="font-body text-white pr-1 text-[16px] font-bold md:text-[22px]" href={googleMapslink}>Hitta hit</Link>
        <Image src="/Icons/yellow-link-icon.svg" height={18} width={15} alt="LinkIcon" className="md:w-[18.67px] md:h-[18.67px]"></Image>
      </div>
    </div >
  )
}

export default FooterLocation