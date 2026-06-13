import { scoutUniformCardContent } from "@/data/scoutmarkenCardContent";
import Image from "next/image";

const ScoutUniformMobile = () => {
  return (
    <>
      {scoutUniformCardContent && (
        <div className="sm:hidden">
          <h2 className="heading-2 text-center pb-6 pt-6">{scoutUniformCardContent[0].title}</h2>
          <div className="grid place-items-center">
            <p className="paragraph-light">
              {scoutUniformCardContent[0].subtitle}
            </p>
          </div>
          <div className="w-full">
            <Image
              src={scoutUniformCardContent[0].image_mobile_subtitle}
              height={100}
              width={1000}
              alt="Scoutkläder"
            />
          </div>
          <div className="grid place-items-center">
            <p className="paragraph-light">
              {scoutUniformCardContent[0].second_subtitle}
            </p>
          </div>
          <div className="w-full">
            <Image
              src={scoutUniformCardContent[0].image_mobile_second_subtitle}
              height={100}
              width={1000}
              alt="Scoutkläder"
            />
          </div>
          <div className="grid place-items-center">
            <p className="paragraph-light">
              {scoutUniformCardContent[0].third_subtitle}
            </p>
          </div>
          <div className="w-full">
            <Image
              src={scoutUniformCardContent[0].image_mobile_third_subtitle}
              height={100}
              width={1000}
              alt="Scoutkläder"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ScoutUniformMobile;