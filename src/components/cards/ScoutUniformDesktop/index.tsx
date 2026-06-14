import BadgePlacementFront from "@/components/features/BadgePlacementFront";
import BadgePlacementLeft from "@/components/features/BadgePlacementLeft";
import BadgePlacementRight from "@/components/features/BadgePlacementRight";
import { useTranslations } from "next-intl";

const ScoutUniformDesktop = () => {
  const t = useTranslations('scoutmarken')
  return (
    <div className="hidden sm:grid grid-rows-[1fr_auto] gap-8">
      <div className="grid grid-cols-[4fr_7fr_5fr] w-full">
        <BadgePlacementRight className="font-bold tracking-tighter h-auto object-contain justify-self-end text-[8px] text-shadow-xs text-shadow-white/100" />
        <BadgePlacementFront className="font-bold tracking-tighter h-auto object-contain justify-self-center text-[9px] text-shadow-xs text-shadow-white/100" />
        <BadgePlacementLeft className="font-bold tracking-tighter h-auto object-contain text-[8px] text-shadow-xs text-shadow-white/100" />
      </div>
      <p className="paragraph-light">
        {t(`placements.locations.1.text`)} {t(`placements.locations.2.text`)} {t(`placements.locations.3.text`)}
      </p>
    </div>
  );
};

export default ScoutUniformDesktop;