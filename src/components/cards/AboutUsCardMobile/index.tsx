import Image from "next/image";
import { aboutUs } from "@/data/vilkaArViCardContent";
import { useTranslations } from "next-intl";

const AboutUsCardMobile = () => {
  const t = useTranslations('vilka-ar-vi')
  return (
    <div className="lg:hidden flex justify-content-center flex-col">
      {aboutUs && aboutUs.map((info) => (
        <div key={info.id} className="flex flex-col justify-center">
          <p className="paragraph-light mt-2">
            {t(`about-us.${info.id}.text`)}
          </p>
          <div className="relative overflow-hidden self-center h-auto ml-0 mr-0 w-screen md:w-full aspect-2/1 md:aspect-7/3">
            <Image
              src={info.image}
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              alt={t(`about-us.${info.id}.imgAlt`)}
              className="z-1 ml-0 mr-0 md:rounded-md object-cover"
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default AboutUsCardMobile;