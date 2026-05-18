import { ageGroupCardContent } from "@/data/ageGroupCardContent"
import Image from "next/image";

const AgeGroupCardHome = () => {
 return (
  <div className="flex flex-col justify-center items-center gap-6">
    {ageGroupCardContent && ageGroupCardContent.map((card, index) => (
      <div key={index} className="w-[90%] border border-indigo-700">
        <div className="flex">
          <div>
            <Image src={`/images/Agegroup/${card.icon}`} height={60} width={60} alt={`${card.title} image`}></Image>
          </div>
          <div>
            <h3>{card.title}</h3>
            <span>{`${card.ageGroup} + ${card.ageRange}`}</span>
          </div>
        </div>
        <div>{card.meetings}</div>
      </div>
    ))}
  </div>
 )
}

export default AgeGroupCardHome