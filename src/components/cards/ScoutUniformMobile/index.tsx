import { scoutUniformCardContent } from "@/data/scoutmarkenCardContent";
import { useTranslations } from "next-intl";

const ScoutUniformMobile = () => {
  const t = useTranslations('scoutmarken')
  return (
    <div className="sm:hidden">
      {scoutUniformCardContent.map((ages) => {
        const ImageComponent = ages.image;
        
        return (
          <div key={ages.id}>
            <p className="paragraph-light">
              {t(`placements.locations.${ages.id}.text`)}
            </p>
            <div className="w-full h-auto">
              <ImageComponent className={`font-bold tracking-tighter w-full h-auto p-4 ${
                ages.id === 2 ? "text-[9px]" : ages.id === 3 ? "text-[5px]" : "text-[6px]"
              }`} />
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default ScoutUniformMobile;