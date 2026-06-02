import Image from "next/image";

const FooterImage = () => {
  return (
    <Image 
      src="/images/Footer/footer.png" 
      height={527} 
      width={1722} 
      alt="Illustration av Hässelby Sjörscoutkårs klubbhus" 
      className="w-full h-auto" 
      priority={false}
    />
  )
}

export default FooterImage