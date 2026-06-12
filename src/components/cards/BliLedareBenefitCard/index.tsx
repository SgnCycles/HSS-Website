import { bliLedareCardContent } from "@/data/bliLedareCardContent";
import Image from "next/image";

const BliLedareBenefitCard = () => {
  return (
    <ul className="cards-column w-full lg:pr-6">
      {bliLedareCardContent &&
        bliLedareCardContent.map((card, index) => (
          <li
            key={index}
            className="flex border border-yellow-500 rounded-md pt-2 pb-2 pr-2 md:pt-5 md:pb-5 md:pr-5 bg-yellow-100 min-h-25"
          >
            <div className="min-w-20 grid place-items-center">
              <Image
                src={`/Icons/${card.icon}`}
                height={40}
                width={40}
                alt=""
              />
            </div>
            <div>
              <h3 className="heading-3">{card.title}</h3>
              <p className="text-base text-wrap text-grey-500">
                {card.subtitle}
              </p>
            </div>
          </li>
        ))}
    </ul>
  );
};

export default BliLedareBenefitCard;