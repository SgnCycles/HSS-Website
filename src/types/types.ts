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

export interface LogoProps{

  src:string,
  alt:string,
  width:number,
  height:number,
  loading: "eager" | "lazy",
  className?:string
  
}
