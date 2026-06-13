import { collectedInformation } from "@/data/collectedInformation";
import { useTranslations } from "next-intl";

const PolicyGatheredInfo = () => {
  const t = useTranslations(`policy`)
  return (
    <section className="bg-blue-100 card border border-blue-500 container">
      <h3 className="heading-4 mb-3">{t(`gatheredInfo.title`)}</h3>
      <ul className="pl-5">
        {collectedInformation.map((item) => {
          return (
            <li className="list-disc" key={item.id}>
              <p className="paragraph-light">
                {t(`gatheredInfo.${item.id}.text`)}
              </p>
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export default PolicyGatheredInfo;