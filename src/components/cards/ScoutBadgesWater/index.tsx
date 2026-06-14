import BorderSingleDown from "@/components/borders/BorderSingleDown"
import BorderSingleUp from "@/components/borders/BorderSingleUp"
import { scoutBadges } from "@/data/scoutBadges"
import { useTranslations } from "next-intl"
import Image from "next/image"

const ScoutBadgesWater = () => {
  const t = useTranslations('scoutmarken')
  return (
    <section className="bg-blue-100">
      <BorderSingleUp variant="text-blue-100 bg-white" />
      <div className="container section">
      <h2 className="heading-2 text-center">{t(`interest.title`)}</h2>
      <p className="paragraph-light text-center">
        {t(`interest.text`)}
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-15">
        {scoutBadges && scoutBadges.map((badge) =>
        <div key={badge.id} className="grid grid-cols-8 grid-rows-[1fr_auto] text-center gap-2 items-center group">
          <div className="flex flex-col gap-2 ">
            {badge.groups && badge.groups.map((group, index) =>
              <Image key={`${badge.id}-group-${index}`} src={group.age} alt="" width={30} height={30} className="h-auto w-auto" />
            )}
          </div>
          <div className="col-start-2 col-end-8 h-full w-full">
            <Image src={badge.image} alt={badge.name} width={200} height={200} className="w-full h-auto perspective-near perspective-origin-bottom-right transition-all duration-200 origin-bottom-right group-hover:rotate-10"  />
          </div>
          <p className="col-start-2 col-end-8 row-start-2 paragraph text-center">{badge.name}</p>
        </div>
        )}
      </div>
      </div>
      <BorderSingleDown variant="text-blue-100 bg-white" />
    </section>
  )
}

export default ScoutBadgesWater