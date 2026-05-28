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

export type MenuItemsType = {
  title: string;
  content: { text: string; href: string; icon: string; mobileIcon: string }[];
}
