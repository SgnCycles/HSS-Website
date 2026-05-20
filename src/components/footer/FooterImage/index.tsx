import Image from "next/image";

const FooterImage = () => {
  return (
    <div>
      <Image src={`/images/Footer/footer.png`} height={527} width={1722} alt={`footerImage`} className="w-full h-auto"></Image>
    </div>
  )
}

export default FooterImage