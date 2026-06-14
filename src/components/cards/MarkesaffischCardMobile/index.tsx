import { markesAffischCardContent } from "@/data/scoutmarkenCardContent";
import { useTranslations } from "next-intl";
import Image from "next/image";

const MarkesaffischCardMobile = () => {
  const t = useTranslations('scoutmarken')
  return (
    <ul className="text-center sm:hidden">
      {markesAffischCardContent &&
        markesAffischCardContent.map((badge) => (
          <li key={badge.id} className={`${badge.secondary} mb-6`}>
            <h3
              className={`ml-0 mr-0 font-heading text-[18px] md:text-[20px] font-bold pt-4 ${badge.heading} text-[18px] md:text-[20px]`}
            >
              {badge.title} {t(`ageBadges.${badge.id}.age`)}
            </h3>
            <div className="grid place-items-center">
              <p className="paragraph-light text-center w-[90%]">
              {t(`ageBadges.${badge.id}.text`)}
              </p>
            </div>
            {badge.mobileImage &&
              badge.mobileImage.map((image, index) => (
                <div className="w-full" key={index}>
                  <Image
                    className="w-full h-auto"
                    src={image}
                    height={1200}
                    width={800}
                    alt={`${badge.title} märken`}
                  />
                </div>
              ))}
          </li>
        ))}
    </ul>
  );
};

export default MarkesaffischCardMobile;