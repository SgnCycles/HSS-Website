import Image from "next/image";

type FooterContactType = {
  title: string,
  icon: string | null,
  children: any
}

const FooterContact = ({ title, icon, children }: FooterContactType) => {
  return (
    <div className="flex flex-col">
      <h3 className="text-yellow-500 font-bold text-[18px] font-heading">{title}</h3>
      <div className="flex flex-row">
        {icon === null ? "" : <Image src={`/icons/${icon}`} height={18} width={15} alt={`EnvelopeIcon`}></Image>}
        {children}
      </div>
    </div >
  )
}

export default FooterContact