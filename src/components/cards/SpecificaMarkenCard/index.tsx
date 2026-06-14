"use client"
import Image from "next/image";
import Link from "next/link";
import { useTranslations } from "next-intl";
import { scoutQualification } from "@/data/scoutBadges";

const SpecificaMarken = () => {
  const t = useTranslations('scoutmarken')
  return (
    <article className="container pt-3 flex flex-col gap-6">
      <h2 className="heading-2 text-center xl:text-left">{t(`quali.title`)}</h2>
        <div className="grid grid-cols-3 grid md:grid-cols-4 gap-3 w-full h-full justify-content-end">
          {scoutQualification && scoutQualification.map((quali) =>
            <div key={quali.id} className={`grid grid-rows-[7fr_1fr] gap-2 ${
              quali.id === 1 ? 'row-start-1 row-end-3 col-span-3 md:col-span-1 h-100 md:h-75' : 'h-50 md:h-75 col-span-1 md:col-span-1'
            }`}>
              <div className={`relative  ${
                quali.id === 1 ? 'drop-shadow-xl/70 md:drop-shadow-lg/60' : 'drop-shadow-lg/60'
              }`}>
                <Image src={quali.image} alt={quali.name} fill className="object-contain mask-clip-content" />
              </div>
              <p className="relative text-center heading-4">{quali.name}</p>
            </div>
          )}
        </div>
      <p className="paragraph-light">
        {t(`quali.info`)}
      </p>
      <div className="card paragraph flex flex-col border border-accent sm:p-6 bg-yellow-200">
        <Link
          className="underline text-primary font-semibold cursor-pointer"
          href="https://media.scoutcontent.se/uploads/2021/03/Affisch-A3-Sjo-och-vatten-vit-bakgrund-2020-klar-1.pdf"
          target="_blank"
        >
          {t(`quali.btn`)}
        </Link>
      </div>
      <div className="md:hidden w-full flex justify-center items-center">
        <Image
          src="/images/Body/blue_seperator.png"
          height={100}
          width={1000}
          alt=""
        />
      </div>
    </article>
  );
};

export default SpecificaMarken;