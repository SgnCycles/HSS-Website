import { useTranslations } from "next-intl";
import Image from "next/image";

const PolicyInfo = () => {
  const t = useTranslations(`policy.info`)
  return (
    <section className="container">
      <article>
        <div className="flex justify-center lg:justify-start pb-6">
          <Image
            src="/Icons/document-icon.svg"
            alt=""
            width={30}
            height={30}
            className="h2-icon"
          />
          <h2 className="heading-2"><span className="hidden sm:flex">{t('title')}</span><span className="flex sm:hidden">GDPR</span></h2>
        </div>
        <p className="paragraph-light">
          {t('paragraph1')}
        </p>
        <h4 className="heading-4">{t('subTitle')}</h4>
        <p className="paragraph-light mb-0">
          {t('paragraph2')}
        </p>
      </article>
    </section>
  );
};

export default PolicyInfo;