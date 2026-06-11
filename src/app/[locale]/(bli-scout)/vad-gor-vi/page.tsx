import BorderSingleUp from "@/components/borders/BorderSingleUp"
import BorderTwoDown from "@/components/borders/BorderTwoDown"
import ActivityFeature from "@/components/cards/ActivityFeature"
import HurManBlirScoutFeature from "@/components/cards/HurManBlirScoutFeature"
import Image from "next/image"

const VadGorViPage = () => {
  return (
    <main id="main-content">
      <ActivityFeature />
      <div className="hidden md:block">
        <div className="hidden justify-center lg:flex">
          <Image src="/Icons/caret_down.svg" height={35} width={35} alt="" />
        </div>
        <BorderSingleUp variant="text-primary" />
      </div>
      <HurManBlirScoutFeature />
      <BorderTwoDown foreground="text-primary" background="text-blue-100" />
    </main>
  )
}

export default VadGorViPage