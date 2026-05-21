import Image from "next/image";

type FooterContactType = {
  title: string,
  icon: string | null,
  children: any
}

const FooterContact = ({ title, icon, children }: FooterContactType) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-yellow-500 font-bold text-[18px] font-heading md:text-[30px]">{title}</h3>
      <div className="flex flex-row md:items-center">
        {icon === null ? "" : <Image src={`/icons/${icon}`} height={18} width={15} alt={`EnvelopeIcon`} className="md:w-7.25 md:h-5.75"></Image>}
        {children}
      </div>
    </div >
  )
}

export default FooterContact