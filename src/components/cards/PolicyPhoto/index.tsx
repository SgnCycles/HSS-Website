import Image from "next/image";
import Button from "@/components/buttons/Button";
import { useTranslations } from "next-intl";

const PolicyPhoto = () => {
  const t = useTranslations(`policy`) 
  const p = useTranslations(`policy.photo`) 
  return (
    <section className="relative bg-yellow-100">
      <article className="container">
        <div className="flex justify-center md:justify-start">
          <Image
            src="/Icons/camera-icon.svg"
            alt=""
            width={30}
            height={30}
            className="h2-icon"
          />
          <h2 className="heading-2">{p('title')}</h2>
        </div>
        <p className="paragraph-light">
          {p('paragraph1')}
          <br />
          {p('paragraph2')}
        </p>

        <div className="text-end">
          <Button
            ariaLabel=""
            href="mailto:info@hss-scout.org"
            variant="primaryBlue"
            text={t('contactKey')}
          />
        </div>
      </article>
    </section>
  );
};

export default PolicyPhoto;