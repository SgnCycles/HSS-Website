import { activityCardContent } from "@/data/activityCardContent"
import Image from "next/image"

const ActivityCard = () => {
  return(
    <ul className="flex flex-col lg:grid lg:grid-cols-2 section">
      {activityCardContent && activityCardContent.map((card, index) => (
        <li key={index} className="rounded-md border ml-4 mr-4 bg-secondary border-accent pr-2 pl-2 min-h-27.5 lg:pt-2 lg:pb-2 lg:ml-0 lg:mr-0">
          <div className="flex">
            <Image className="w-auto h-auto mr-[10px]" src={card.icon} alt="" width={20} height={20}/>
            <div className="lg:flex lg:items-center lg:min-h-14">
              <h2 className="text-base font-heading font-semibold text-primary heading-3 text-[18px] md:text-[20px]">{card.title}</h2>
            </div>
          </div>
          <p className="paragraph-light">{card.info}</p>
        </li>
      ))}
    </ul>
  )
}

export default ActivityCard