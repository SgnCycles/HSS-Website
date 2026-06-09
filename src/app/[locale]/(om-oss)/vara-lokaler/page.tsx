import Image from "next/image"

const VaraLokalerPage = () => {
  return (
    <main id="main-content">
      <section className="container">
        <Image className="h2-icon" src={`/Icons/house-heart-icon.svg`} height={30} width={30} alt="" />
        <h1 className="heading-2">Våra lokaler</h1>
        <p className="paragraph-light">Upptäck våra lokaler vid vattnet och ute i skogen.</p>
        <div className="paragraph-light">
          <h2 className="heading-3">Myset</h2>
          <div className="text-base font-body flex gap-2 pl-2 pr-2 justify-center rounded-md w-fit border bg-secondary border-accent text-center self-center lg:ml-4">
            <p>Vår scoutstuga i skogen</p>
          </div>
          <p>I Lövstaskogarna mellan Lövsta och Gåseborg ligger Myset. En varm, fräsch och välutrustad scoutstuga med plats för upp till 40 personer. Perfekt för läger, hajker och kårmästerskap.</p>
          <h3 className="heading-4">📍Koordinater</h3>
          <p>59.3971277, 17.7698322</p>
        </div>
      </section>
    </main>
  )
}

export default VaraLokalerPage