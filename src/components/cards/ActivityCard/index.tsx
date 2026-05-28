import { activityCardContent } from "@/data/activityCardContent"
import Image from "next/image"

const ActivityCard = () => {
  return(
    <ul className="flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-3">
      {activityCardContent && activityCardContent.map((card, index) => (
        <li key={index} className="rounded-lg border ml-4 mr-4 bg-secondary border-accent pr-2 pl-2 min-h-27.5 lg:pt-2 lg:pb-2 lg:ml-0 lg:mr-0">
          <div className="flex gap-2 pl-4 pt-4">
            <Image className="w-auto h-auto" src={card.icon} alt="" width={20} height={20}/>
            <div className="lg:flex lg:items-center lg:min-h-14">
              <h2 className="text-base font-heading font-semibold text-primary lg:text-[22px]">{card.title}</h2>
            </div>
          </div>
          <p className="text-[15px] pl-4 pb-4 font-body sm:text-[18px]">{card.info}</p>
        </li>
      ))}
    </ul>
  )
}

export default ActivityCard