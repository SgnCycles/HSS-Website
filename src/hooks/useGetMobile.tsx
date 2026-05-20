  'use client'
  import { useState, useEffect } from "react";
  
  const useIsMobile = (MOBILE_BREAKPOINT = 576) => {
    const [isMobile, setIsMobile] = useState(false)

    useEffect (() => {
      const mediaQueryList = window.matchMedia(`(max-width: ${MOBILE_BREAKPOINT - 1}px)`)
      const onChange = () => {
      setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)
    }

    mediaQueryList.addEventListener("change", onChange)
    setIsMobile(window.innerWidth < MOBILE_BREAKPOINT)

    return () => {
      mediaQueryList.removeEventListener("change", onChange)
    }
    }, [MOBILE_BREAKPOINT])

    return !!isMobile
  }

  export default useIsMobile