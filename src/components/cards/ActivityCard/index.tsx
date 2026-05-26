import { activityCardContent } from "@/data/activityCardContent"
import Image from "next/image"

const ActivityCard = () => {
  return(
    <div className="flex flex-col gap-3 md:grid md:grid-cols-2">
      {activityCardContent && activityCardContent.map((card, index) => (
        <div key={index} className="rounded-md border ml-4 mr-4 bg-secondary border-accent pr-2 pl-2 min-h-27.5 md:ml-0 md:mr-0">
          <div className="flex gap-2 p-1 md:p-4">
            <Image className="w-auto h-auto"
              src={card.icon}
              alt={card.title}
              width={20}
              height={20}
            />
            <h2 className="text-base font-heading font-semibold text-primary lg:text-[22px]">{card.title}</h2>
          </div>
          <p className="text-[15px] p-1 font-body sm:text-[18px] md:p-3">{card.info}</p>
        </div>
      ))}
    </div>
  )
}

export default ActivityCard