import Image from "next/image";

type FooterContactType = {
  title: string,
  icon: string | null,
  children: any
}

const FooterContact = ({ title, icon, children }: FooterContactType) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-yellow-500 font-bold text-[18px] font-heading md:text-[26px]">{title}</h3>
      <div className="flex items-center md:items-baseline lg:items-center">
        {icon === null
          ? ""
          : <Image
            src={`/Icons/${icon}`}
            height={30}
            width={30}
            className="w-3.75 h-3.75 md:w-4.5 md:h-4.5 lg:w-6.25 lg:h-6.25"
            alt=""
          />
        }
        {children}
      </div>
    </div>
  )
}

export default FooterContact