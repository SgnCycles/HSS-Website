import { useTranslations } from "next-intl";
import CloseButton from "../buttons/CloseButton";
import { Link } from "@/i18n/routing";

export default function GDPR({ handelGdpr }: { handelGdpr: () => void }) {
  const t = useTranslations(`policy.gdpr.popUp`)
  return (
    <div className="bg-background fixed inset-0 w-screen mx-auto overflow-y-auto z-50">
      <div className="container">
        <p className="paragraph-light ">
          {t(`paragraph1`)}
        </p>
        <p className="paragraph-light">
          {t(`paragraph2`)}
        </p>
        <p className="paragraph-light">
          {t(`paragraph3`)}
        </p>
        <p className="paragraph-light">
          {t(`paragraph4`)}
        </p>
        <p className="paragraph-light">
          {t(`paragraph5`)}
        </p>
        <p className="paragraph-light">
          {t(`paragraph6`)}
        </p>
        <p className="paragraph-light">
          {t(`paragraph7`)} <Link rel="noopener noreferrer" target="_blank" className="text-blue-500 transition-all duration-100 hover:text-accent" href="mailto:scoutnet@scouterna.se?subject=GDPR">scoutnet@scouterna.se</Link> 
        </p>
        <p className="paragraph-light">
          {t(`paragraph8`)}
        </p>
        <p className="paragraph-light">
          {t(`paragraph9`)}
        </p>
        <div className="flex justify-end">
          <CloseButton
            ariaLabel=""
            text={t(`closeBtn`)}
            onClick={handelGdpr}
          />
        </div>
      </div>
    </div>
  );
}
