"use client"
import { usePathname } from "next/navigation"
import HeaderHome from "@/components/headers/HeaderHome"
import HeaderOther from "@/components/headers/HeaderOther"

const Header = () => {
  const pathname = usePathname()
  const isHome = pathname === "/" 

  return (
    isHome ? <HeaderHome /> : <HeaderOther />
  )
}

export default Header