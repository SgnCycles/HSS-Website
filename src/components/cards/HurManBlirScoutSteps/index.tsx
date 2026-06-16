"use client";
import { BlirScoutStepsContent } from "@/data/blirScoutStepsContent";
import { useTranslations } from "next-intl";

const HurManBlirScoutSteps = () => {
  
  const t = useTranslations("blirScoutSteps");

  return (
    <div>
      {BlirScoutStepsContent &&
        BlirScoutStepsContent.map((entry, index) => (
          <ul
            key={index}
            className="grid grid-cols-[auto_repeat(3,minmax(0,1fr))] grid-rows-2 gap-2 m-2 ml-0"
          >
            <div className="flex justify-center mt-auto">
              <div className="bg-primary z-20 border-accent border-3 text-accent rounded-[50%] w-12.5 h-12.5 text-[26px] flex justify-center items-center">
                {entry.step}
              </div>
            </div>
            <div className="relative col-start-1 row-start-2 text-center">
              <div className="absolute left-[50%] -bottom-2 h-[150%] z-10 bg-accent w-px mr-auto ml-auto"></div>
            </div>
            <div className="col-span-3 row-span-2 col-start-2 row-start-1 ml-3">
              <h3 className="text-[18px] font-heading font-semibold text-white">
                {t(entry.titleKey)}
              </h3>
              <li className="text-[14px] mt-2 font-body paragraph-light text-white">
                {t(entry.infoKey)}
              </li>
            </div>
          </ul>
        ))}
    </div>
  );
};

export default HurManBlirScoutSteps;
