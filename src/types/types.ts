export type ageGroupCardContentType = {
  title: string,
  ageGroup: string,
  ageRange: string,
  subtitle: string,
  info: string,
  meetings: string,
  colourSchemeBorder: string,
  colourSchemePrimary: string,
  colourSchemeSecondary: string,
  icon: string,
  image: string,
  price: string,
  apply: string
}

export type markesaffischCardContentType = {
  title: string,
  age: string,
  subtitle: string,
  mobileImage: string[],
  desktopImage: string,
  colourSchemeBorder: string,
  colourSchemePrimary: string,
  colourSchemeSecondary: string
  colourSchemeHeading: string,
  icon: string,
}

export type scoutUniformCardContentType = {
  title: string,
  subtitle: string,
  image_mobile_subtitle: string,
  second_subtitle: string,
  image_mobile_second_subtitle: string,
  third_subtitle: string,
  image_mobile_third_subtitle: string,
  desktopImage: string,
}

export type bliLedareCardContentType = {
  titleKey: string,
  subtitleKey: string,
  icon: string,
}

export type engageraDigCardContentType = {
  title: string,
  icon: string,
}

export type MenuItemsType = {
  titleKey: string;
  content:
  {
    textKey: string;
    href: string;
    icon: string;
    mobileIcon: string
  }[];
}

export type pageHeaderImageType = {
  path: string,
  image: string,
}

export type SecurityAndSafetyCardContentType = {
  titleKey: string,
  icon: string,
  infoKey: string
}

export type SecurityAndSafetyCheckType = {
  infoKey: string,
  icon: string
}

export type SecurityAndSafetyInfoType = {
  titleKey: string,
  infoKey: string
}

export type ActivityCardType = {
 
  icon: string,
  titleKey: string,
  infoKey: string
}

export type ActivityFeatureType = {
  titleKey: string,
  subTitleKey: string,
  subIcon: string,
  infoKey: string,
  infoDescFirstKey: string,
  infoDescSecondKey: string,
  icon: string
}

export type vilkaArViContentType = {
  image: string,
}

export type vilkaArViGamlaBatarContentType = {
  image: string,
}

export type vilkaArViTextContentType = {
  image: string,
  info: string
}

export type FaqProps = {
  id:number,
  title:string,
  content:string
}