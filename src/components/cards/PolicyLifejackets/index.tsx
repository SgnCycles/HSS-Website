import Image from "next/image";
import Button from "@/components/buttons/Button";
import { useTranslations } from "next-intl";

const PolicyLifejackets = () => {
  const t = useTranslations('policy')
  return (
    <section>
      <article className="flex flex-col md:flex-row container">
        <div>
          <div className="flex justify-center md:justify-start">
            <Image
              src="/Icons/check-icon.svg"
              alt=""
              width={30}
              height={30}
              className="h2-icon"
            />
            <h2 className="heading-2">{t(`lifejacket.title`)}</h2>
          </div>
          <p className="paragraph-light">
            {t(`lifejacket.paragraph1`)}
          </p>
          <p className="paragraph-light">
            {t(`lifejacket.paragraph2`)}
          </p>
          <p className="paragraph-light">
            {t(`lifejacket.paragraph3`)}
          </p>
        </div>
        <div className="">
          <Image
            src="/images/Body/policy_body1.png"
            alt=""
            width={300}
            height={300}
            className="rounded-sm w-full h-auto mb-6"
          />
          <Button
            ariaLabel=""
            href="/pdf/HSS-Flytvastpolicy-2025-Beslutad.pdf"
            variant="primaryBlue"
            text={t('pdfButton')}
          />
        </div>
      </article>
    </section>
  );
};

export default PolicyLifejackets;