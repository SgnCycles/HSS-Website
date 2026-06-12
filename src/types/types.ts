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
  colourSchemeBorderTertiary: string,
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

export type VaraBatarContentType = {
  image: string,
  alt: string
}

export type varaBatarCardContentType = {
  titleKey: string,
  infoKey: string,
  waveImage: string
  boatImage: {
    image: string,
    alt: string
  }[]
}

export type vilkaArViContentType = {
  image: string,
}

export type vilkaArViGamlaBatarContentType = {
  image: string,
}

export type vilkaArViTextContentType = {
  info: string
}

export type FaqProps = {
  id: number,
  title: string,
  content: string
}

export type aretIHssContentType = {
  title: string,
  icon: string,
  months: {
    subtitle: string,
    info: string
  }[]
}

export type historyHSSContentType = {
  info: string
}

export type vilkaArViTextContentMobileType = {
  image: string,
  info: string
}

export type BlirScoutStepsType = {
  title: string,
  info: string,
  step: string
}

export type RegisterInfoProps = {
  id: number,
}

export type CollectedInfoProps = {
  id: number,
  information: string
}