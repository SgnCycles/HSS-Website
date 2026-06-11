import { MenuItemsType } from "../types/types"

export const navItems: MenuItemsType[] = [
  {
    titleKey: "becomeScout.title",
    content: [
      {
        textKey: "becomeScout.whatWeDo",
        href: "/vad-gor-vi",
        icon: "key",
        mobileIcon: "key",
      },
      {
        textKey: "becomeScout.ageGroups",
        href: "/aldersgrupper",
        icon: "group",
        mobileIcon: "group",
      },
      {
        textKey: "becomeScout.becomeLeader",
        href: "/bli-ledare",
        icon: "parent",
        mobileIcon: "parent",
      },
    ],
  },
  {
    titleKey: "parentsInfo.title",
    content: [
      {
        textKey: "parentsInfo.safety",
        href: "/trygghet-och-sakerhet",
        icon: "shield",
        mobileIcon: "shield",
      },
      {
        textKey: "parentsInfo.engage",
        href: "/engagera-dig-som-vuxen",
        icon: "heartHands",
        mobileIcon: "heartHands",
      },
      {
        textKey: "parentsInfo.goodToKnow",
        href: "/bra-att-veta",
        icon: "info",
        mobileIcon: "info",
      },
      {
        textKey: "parentsInfo.faq",
        href: "/vanliga-fragor",
        icon: "question",
        mobileIcon: "question",
      },
    ],
  },
  {
    titleKey: "forMembers.title",
    content: [
      {
        textKey: "forMembers.scoutBadges",
        href: "/scoutmarken",
        icon: "/Icons/brandHss.png",
        mobileIcon: "/Icons/brand-blue-logo.svg",
      },
      {
        textKey: "forMembers.yearInHss",
        href: "/aret-i-hss",
        icon: "calendar",
        mobileIcon: "calendar",
      },
    ],
  },
  {
    titleKey: "aboutUs.title",
    content: [
      {
        textKey: "aboutUs.whoAreWe",
        href: "/vilka-ar-vi",
        icon: "/Icons/hss_logo_light.svg",
        mobileIcon: "/Icons/hss-icon.svg",
      },
      {
        textKey: "aboutUs.ourBoats",
        href: "/vara-batar",
        icon: "boat",
        mobileIcon: "boat",
      },
      {
        textKey: "aboutUs.ourPremises",
        href: "/vara-lokaler",
        icon: "house",
        mobileIcon: "house",
      },
      {
        textKey: "aboutUs.policy",
        href: "/policy",
        icon: "policy",
        mobileIcon: "policy",
      },
    ],
  },
];