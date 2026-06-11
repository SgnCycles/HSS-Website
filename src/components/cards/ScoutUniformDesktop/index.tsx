import { scoutUniformCardContent } from "@/data/scoutmarkenCardContent";
import Image from "next/image";

const ScoutUniformDesktop = () => {
  return (
    <>
      {scoutUniformCardContent && (
        <div className="hidden sm:flex sm:flex-col">
          <h2 className="heading-2">{scoutUniformCardContent[0].title}</h2>
          <p className="paragraph-light">
            {scoutUniformCardContent[0].subtitle}
            {scoutUniformCardContent[0].second_subtitle}
            {scoutUniformCardContent[0].third_subtitle}
          </p>
          <div className="w-full grid place-items-center">
            <Image
              src={scoutUniformCardContent[0].desktopImage}
              height={1000}
              width={1000}
              alt="Scoutkläder"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default ScoutUniformDesktop;