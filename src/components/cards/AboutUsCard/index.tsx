import Image from "next/image";
import { aboutUs } from "@/data/vilkaArViCardContent";
import { useTranslations } from "next-intl";

const AboutUsCard = () => {
  const t = useTranslations('vilka-ar-vi')
  return (
    <section className="lg:pt-0 ">
      <div  className="hidden lg:flex lg:justify-center md:flex md:flex-col">
        {aboutUs && aboutUs.map((info) => (
          <p key={info.id} className="paragraph-light">
            {t(`about-us.${info.id}.text`)}
          </p>
        ))}
        <div  className="flex lg:flex-row gap-5 md:flex md:flex-row md:gap-2">
          {aboutUs && aboutUs.map((info) => (
            <div key={info.id} className="relative flex overflow-hidden w-full aspect-4/3">
              <p aria-hidden 
                className="
                  paragraph 
                  absolute
                  h-full 
                  w-full 
                  flex 
                  items-center 
                  justify-center 
                  cursor-default 
                  z-10 
                  rounded-md 
                  text-center 
                  text-white/0 
                  transition-all
                  duration-300
                  hover:text-white
                  hover:backdrop-blur-sm 
                  hover:bg-primary/50 
                "
              >
                {t(`about-us.${info.id}.imgText`)}
              </p>
              <Image
                src={info.image}
                fill
                alt={t(`about-us.${info.id}.imgText`)}
                className="z-1 lg:rounded-md md:rounded-md object-cover"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUsCard;