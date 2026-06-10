import { BlirScoutStepsContent } from "@/data/blirScoutStepsContent";

const HurManBlirScoutSteps = () => {
  return (
    <div>
      {BlirScoutStepsContent &&
        BlirScoutStepsContent.map((entry, index) => (
          <ul key={index} className="grid grid-cols-4 grid-rows-2 gap-2 m-2">
            <div className="flex justify-center mt-auto">
              <div className="bg-primary z-20 border-accent border-3 text-accent rounded-[50%] w-12.5 h-12.5 text-[26px] flex justify-center items-center">
                {entry.step}
              </div>
            </div>
            <div className="relative col-start-1 row-start-2 text-center">
              <div className="absolute left-[50%] -bottom-2 h-[150%] z-10 bg-accent w-px mr-auto ml-auto"></div>
            </div>
            <div className="col-span-3 row-span-2 col-start-2 row-start-1">
              <h3 className="text-[18px] font-heading font-semibold text-white">
                {entry.title}
              </h3>
              <li className="text-[14px] mt-2 font-body paragraph-light text-white">
                {entry.info}
              </li>
            </div>
          </ul>
        ))}
    </div>
  );
};

export default HurManBlirScoutSteps;
