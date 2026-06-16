import { useTranslations } from "next-intl";
import Image from "next/image";
import { Link } from "@/i18n/routing";

type FooterLocationType = {
  title: string,
  address: string,
  googleMapslink: string
}

const FooterLocation = ({ title, address, googleMapslink }: FooterLocationType) => {

 const t = useTranslations("footer")

  const addresses = address.split('|')

  return (
    <li>
      <div className="flex md:items-center md:pt-5">
        <Image
          src="/Icons/yellow-address-icon.svg"
          height={18}
          width={15}
          alt=""
          role="presentation"
          className="md:w-5 md:h-[25.51px] w-auto h-auto"
        />
        <h3 className="font-body text-white font-bold pl-1 text-[16px] md:text-[22px]">{title}</h3>
      </div>
      {addresses.map((address, index) => {
        return <p key={index} className="text-grey-300 font-body text-[14px] md:text-[20px]">{address}</p>
      })}
      <Link
        target="_blank"
        aria-label={`google maps ${title}`}
        className="flex items-center gap-1 font-body text-white pr-1 text-[16px] font-bold md:text-[22px]"
        href={googleMapslink}
      >
        <p>{t("find_us")}</p>
        <Image
          src="/Icons/yellow-link-icon.svg"
          height={15}
          width={15}
          alt=""
          role="presentation"
          className="md:w-[18.67px] md:h-[18.67px]"
        />
      </Link>
    </li>
  )
}

export default FooterLocation