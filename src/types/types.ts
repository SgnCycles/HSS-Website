import { navItems } from "@/data/navMenu"

export type ageGroupCardContentType = {
    title: string,
    ageGroup: string,
    ageRange: string,
    subtitle: string,
    info: string,
    meetings: string,
    colourSchemePrimary: string,
    colourSchemeSecondary: string,
    icon: string,
    image: string,
    price: string,
    apply: string
}

interface MenuItems{
   title:string,
   content:string[]
}

export interface NavProps{
  items: MenuItems[]
}