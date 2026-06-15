import Image from "next/image";
import { aboutUs } from "@/data/vilkaArViCardContent";
import { useTranslations } from "next-intl";

const AboutUsCardDesktop = () => {
  const t = useTranslations('vilka-ar-vi')
  return (
    <section className="pt-0 ">
      <div  className="hidden lg:flex flex-col justify-center">
        {aboutUs && aboutUs.map((info) => (
          <p key={info.id} className="paragraph-light">
            {t(`about-us.${info.id}.text`)}
          </p>
        ))}
        <div className="flex flex-row gap-5 md:gap-2">
          {aboutUs && aboutUs.map((info) => (
            <div key={info.id} className="relative flex overflow-hidden w-full aspect-4/3">
              <Image
                src={info.image}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                alt={t(`about-us.${info.id}.imgAlt`)}
                className="z-1 lg:rounded-md w-[-webkit-fill-available] md:rounded-md object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsCardDesktop;