export type ageGroupCardContentType = {
  title: string,
  ageGroup: string,
  ageRange: string,
  subtitle: string,
  info: string,
  info_block_one: string,
  info_block_two: string,
  info_block_three: string,
  info_block_four: string,
  info_block_five: string,
  info_block_six: string,
  meetings: string,
  colourSchemeBorder: string,
  colourSchemeBorderSecondary: string,
  colourSchemePrimary: string,
  colourSchemeSecondary: string,
  colourSchemeTertiary: string,
  colourSchemeAccent: string,
  colourSchemeAccentSecondary: string,
  colourSchemeAccentSurface: string,
  colourSchemeHover: string,
  colourSchemeActive: string,
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
  title: string;
  content: { text: string; href: string; icon: string; mobileIcon: string }[];
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
  title: string,
  subTitle: string,
  subIcon: string,
  info: string,
  infoDescFirst: string,
  infoDescSecond: string,
  icon: string
}