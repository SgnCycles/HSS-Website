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

export type bliLedareCardContentType = {
  title: string,
  subtitle: string,
  icon: string,
}

export type engageraDigCardContentType = {
    title: string,
    icon: string,
}

export type MenuItemsType = {
  titleKey: string;
  content: { textKey: string; href: string; icon: string; mobileIcon: string }[];
}

export type pageHeaderImageType = {
  path: string,
  image: string,
}

export type SecurityAndSafetyCardContentType = {
    title: string,
    icon: string,
    info: string
}

export type SecurityAndSafetyCheckType = {
    info: string,
    icon: string
}

export type SecurityAndSafetyInfoType = {
    title: string,
    info: string
}

export type ActivityCardType = {
    icon: string,
    title: string,
    info: string
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

