import Image from "next/image";
import {
  vilkaArVi,

} from "@/data/vilkaArViCardContent";
import { useTranslations } from "next-intl";

const VilkaArViCardDesktop = () => {
  const t = useTranslations("vilka-ar-vi")
  return (
    <article className="lg:container md:container lg:pt-0 ">
      <div className="hidden lg:flex lg:justify-center md:flex md:flex-col">
        {vilkaArVi &&
          vilkaArVi.map((info) => (
            <p key={info.id} className="paragraph-light">
              {t(`about-us.${info.id}.text`)}
            </p>
          ))}
      </div>
      <div className="hidden lg:flex lg:justify-center lg:gap-5 md:flex md:flex-row md:gap-2">
        {vilkaArVi &&
          vilkaArVi.map((image) => (
            <Image
              key={image.id}
              src={image.image}
              height={276}
              width={393}
              alt="vilka är vi"
              className="lg:rounded-md md:rounded-md md:h-50 md:w-[33.33%] lg:h-auto h-auto w-auto object-cover"
            />
          ))}
      </div>
    </article>
  );
};

export default VilkaArViCardDesktop;