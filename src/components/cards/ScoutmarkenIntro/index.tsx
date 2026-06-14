import Button from "@/components/buttons/Button";
import { useTranslations } from "next-intl";

const ScoutmarkenIntro = () => {
  const t = useTranslations('scoutmarken')
  return (
    <article className="container pb-0 pt-0">
      <p className="paragraph-light">
        {t(`intro.1.text`)}
      </p>
      <div className="pb-6 md:hidden">
        <Button
          ariaLabel=""
          href="https://media.scoutcontent.se/uploads/2025/08/Markbart-2025.pdf"
          variant="primaryBlue"
          text={t(`readMoreBtn`)}
        />
      </div>
      <p className="paragraph-light mb-6 sm:hidden">
        {t(`intro.2.text`)}
      </p>
      <div className="hidden sm:flex justify-around mb-6 flex-row section">
        <div className="pb-6 hidden md:flex">
          <Button
            ariaLabel=""
            href="https://media.scoutcontent.se/uploads/2025/08/Markbart-2025.pdf"
            variant="primaryBlue"
            text={t(`readMoreBtn`)}
          />
        </div>
        <div className="grid place-items-center">
          <p className="paragraph-light">
            {t(`intro.2.text`)}
          </p>
        </div>
      </div>
    </article>
  );
};

export default ScoutmarkenIntro;