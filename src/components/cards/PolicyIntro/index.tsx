import Image from "next/image";
import Button from "@/components/buttons/Button";
import { useTranslations } from "next-intl";

const PolicyIntro = () => {
  const t = useTranslations('policy')
  return (
    <section className="bg-blue-100">
      <article className="container">
        <div className="flex justify-center lg:justify-start pb-6">
          <Image
            src="/Icons/anchor-icon.svg"
            alt=""
            width={30}
            height={30}
            className="h1-icon"
          />
          <h1 className="heading-1">HSS <span className="hidden md:inline-block">{t('pageTitle')}</span> policy</h1>
        </div>
        <p className="paragraph-light">
          {t('safeMeetingsParagraph')}
        </p>
        <div className="text-end">
          <Button
            ariaLabel=""
            href="/pdf/Bilaga-20251012-HSS-Trygga-moten-policy-Beslutad.pdf"
            variant="primaryBlue"
            text={t('pdfButton')}
          />
        </div>
      </article>
    </section>
  );
};

export default PolicyIntro;