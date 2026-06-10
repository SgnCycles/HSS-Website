import { activityCardContent } from "@/data/activityCardContent";
import Image from "next/image";

const ActivityCard = () => {
  return (
    <ul className="flex flex-col lg:grid lg:grid-cols-2 section">
      {activityCardContent &&
        activityCardContent.map((card, index) => (
          <li key={index} className="border card bg-secondary border-accent ">
            <div className="flex">
              <Image
                className="w-auto h-auto mr-2.5"
                src={card.icon}
                alt=""
                width={20}
                height={20}
              />
              <div className="lg:flex lg:items-center lg:min-h-14">
                <h3 className="text-primary heading-3">{card.title}</h3>
              </div>
            </div>
            <p className="paragraph-light">{card.info}</p>
          </li>
        ))}
    </ul>
  );
};

export default ActivityCard;