"use client"

import { useMediaQuery } from 'usehooks-ts';
import FooterMobile from "@/components/footer/FooterMobile";
import FooterDesktop from "@/components/footer/FooterDesktop";

const FooterHome = () => {

  const isDesktop = useMediaQuery('(min-width: 768px)');
  return (
    <>
      {isDesktop ? <FooterDesktop /> : <FooterMobile />}
    </>
  )
}

export default FooterHome