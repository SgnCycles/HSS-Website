"use client";
import Image from "next/image";
import { registerInfo } from "@/data/registerInformation";
import GDPR from "@/components/gdpr";
import { useState } from "react";
import ReadMoreButton from "@/components/buttons/ReadMoreButton";
import { useTranslations } from "next-intl";

const PolicyGdpr = () => {
  const t = useTranslations('policy')
  const [gdpr, setGdpr] = useState<boolean>(false);

  const handelGdpr = () => {
    setGdpr((prev) => !prev);
  };

  return (
    <section>
      <article className="container">
        <div className="bg-blue-100 border card border-blue-500 rounded-sm">
          <h4 className="heading-4 mb-3">{t(`gdpr.title`)}</h4>
          <ul className="pl-5">
            {registerInfo.map((info) => {
              return (
                <li key={info.id} className="list-disc paragraph-light">
                  {t(`gdpr.${info.id}.text`)}
                </li>
              );
            })}
          </ul>
          <div className="flex">
            <Image
              src="/Icons/infoblue.png"
              alt=""
              width={20}
              height={20}
              className="w-8 h-8 mr-2 mt-0.5"
            />
            <p className="paragraph-light">
              {t(`gdpr.paragraph`)}
            </p>
          </div>
          <div className=" flex justify-end">
            <ReadMoreButton
              ariaLabel=""
              variant="primaryBlue"
              text={t(`gdpr.button`)}
              onClick={handelGdpr}
            />
          </div>
        </div>
      </article>
      {gdpr && <GDPR handelGdpr={handelGdpr} />}
    </section>
  );
};

export default PolicyGdpr;
