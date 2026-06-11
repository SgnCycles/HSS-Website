import VaraLokalerDesktop from "@/components/cards/VaraLokalerDesktop";
import VaraLokalerMobile from "@/components/cards/VaraLokalerMobile";
import Image from "next/image";

const VaraLokalerPage = () => {
  return (
    <main id="main-content">
      <section className="container flex flex-col justify-center items-center pb-0 lg:items-start">
        <div className="flex justify-center">
          <Image className="h2-icon" src="/Icons/house-heart-icon.svg" height={30} width={30} alt="" />
          <h1 className="heading-2">Våra lokaler</h1>
        </div>
        <p className="paragraph-light text-center">Upptäck våra lokaler vid vattnet och ute i skogen.</p>
      </section>
      <section>
        <VaraLokalerMobile />
        <VaraLokalerDesktop />
      </section>
    </main >
  )
}

export default VaraLokalerPage