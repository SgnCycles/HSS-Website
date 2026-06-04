import { MenuItemsType } from "../types/types"

export const navItems:MenuItemsType[] = [
  {
   titleKey: "becomeScout.title",
    content: [
      {
        textKey: "becomeScout.whatWeDo",
        href: "/vad-gor-vi",
        icon: "/Icons/yellow-key.svg",
        mobileIcon: "/Icons/key-icon.svg",
      },
      {
        textKey: "becomeScout.ageGroups",
        href: "/aldersgrupper",
        icon: "/Icons/yellow_children.svg",
        mobileIcon: "/Icons/children-icon.svg",
      },
      {
        textKey: "becomeScout.becomeLeader",
        href: "/bli-ledare",
        icon: "/Icons/yellow-hand.svg",
        mobileIcon: "/Icons/hand-icon.svg",
      },
    ],
  },

  {
    titleKey: "parentsInfo.title",
    content: [
      {
        textKey: "parentsInfo.safety",
        href: "/trygghet-och-sakerhet",
        icon: "/Icons/yellow-shield-cross-icon.svg",
        mobileIcon: "/Icons/shield-plus.svg",
      },
      {
        textKey: "parentsInfo.engage",
        href: "/engagera-dig-som-vuxen",
        icon: "/Icons/hand-heart-yellow.svg",
        mobileIcon: "/Icons/hand-heart-icon.svg",
      },
      {
        textKey: "parentsInfo.goodToKnow",
        href: "/bra-att-veta",
        icon: "/Icons/info.svg",
        mobileIcon: "/Icons/infoblue.png",
      },
      {
        textKey: "parentsInfo.faq",
        href: "/vanliga-fragor",
        icon: "/Icons/yellowquestion.svg",
        mobileIcon: "/Icons/question-icon.svg",
      },
    ],
  },
  {
    titleKey: "forMembers.title",
    content: [
      {
        textKey: "forMembers.scoutBadges",
        href: "/scoutmarken",
        icon: "/Icons/yellow-brand.svg",
        mobileIcon: "/Icons/brand-blue-logo.svg",
      },
      {
        textKey: "forMembers.yearInHss",
        href: "/aret-i-hss",
        icon: "/Icons/brandHss.png",
        mobileIcon: "/Icons/hss-icon.svg",
      },
    ],
  },
  {
    titleKey: "aboutUs.title",
    content: [
      {
        textKey: "aboutUs.whoAreWe",
        href: "/vilka-ar-vi",
        icon: "/Icons/brandHss.png",
        mobileIcon: "/Icons/hss-icon.svg",
      },
      {
        textKey: "aboutUs.ourBoats",
        href: "/vara-batar",
        icon: "/Icons/yellow-boat.svg",
        mobileIcon: "/Icons/boat-icon.svg",
      },
      {
        textKey: "aboutUs.ourPremises",
        href: "/vara-lokaler",
        icon: "/Icons/yellow_house.svg",
        mobileIcon: "/Icons/house-icon.svg",
      },
      {
        textKey: "aboutUs.policy",
        href: "/policy",
        icon: "/Icons/yellow-police.svg",
        mobileIcon: "/Icons/shield-star-icon.svg",
      },
    ],
  },
];