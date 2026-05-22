"use client"

import { useMediaQuery } from 'usehooks-ts';
import FooterMobile from "@/components/footer/FooterMobile";
import FooterDesktop from "@/components/footer/FooterDesktop";
import { useEffect, useState } from 'react';

const FooterHome = () => {

  const [mounted, setMounted] = useState(false);

  const isDesktop = useMediaQuery('(min-width: 768px)');

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <>
      {isDesktop ? <FooterDesktop /> : <FooterMobile />}
    </>
  )
}

export default FooterHome