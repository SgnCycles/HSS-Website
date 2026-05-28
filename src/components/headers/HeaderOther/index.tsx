"use client"
import Nav from "@/components/common/Nav"
import { usePathname } from "next/navigation"
import { pageHeaderImage } from "../../../data/pageBackgrounds"

const HeaderOther = () => {
  const pathname = usePathname();
  const findPage = pageHeaderImage.find((page) => pathname === page.path);
  const headerImage = findPage?.image;

  return (
    <header
      className="h-72 w-full md:h-125 flex flex-col justify-between items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `linear-gradient(to bottom, #00355F 0%, rgba(0,53,95,0.8) 10%, rgba(0,53,95,0.2) 30%, transparent 100%), url(/images/Hero/${headerImage})`,
        backgroundPosition: "right",
      }}
    >
      <Nav />
      {pathname === "/vad-gor-vi" ? (
        <h1 className="hidden xl:block w-full font-heading font-extrabold text-xs md:text-[40px] text-center text-shadow-black text-white pb-6">
          Välkommen till HSS
          <span className="text-accent"> och äventyret</span>
        </h1>
      ) : (
        ""
      )}
    </header>
  )
}

export default HeaderOther