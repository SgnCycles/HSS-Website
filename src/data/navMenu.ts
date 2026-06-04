import { MenuItemsType } from "../types/types"

export const navItems:MenuItemsType[] = [
  {
    title: "Bli scout",
    content: [
      {
        text: "Vad gör vi?",
        href: "/vad-gor-vi",
        // icon: "/Icons/yellow-key.svg",
        icon: "key",
        // mobileIcon: "/Icons/key-icon.svg",
        mobileIcon: "key"
      },
      {
        text: "Åldersgrupper",
        href: "/aldersgrupper",
        // icon: "/Icons/yellow_children.svg",
        icon: "group",
        // mobileIcon: "/Icons/children-icon.svg",
        mobileIcon: "group"
      },
      {
        text: "Bli ledare",
        href: "/bli-ledare",
        // icon: "/Icons/yellow-hand.svg",
        icon: "leader",
        mobileIcon: "/Icons/hand-icon.svg",
      },
    ],
  },

  {
    title: "Info för föräldrar",
    content: [
      {
        text: "Trygghet & säkerhet",
        href: "/trygghet-och-sakerhet",
        // icon: "/Icons/yellow-shield-cross-icon.svg",
        icon: "buoy",
        mobileIcon: "/Icons/shield-plus.svg",
      },
      {
        text: "Engagera dig som vuxen",
        href: "/engagera-dig-som-vuxen",
        // icon: "/Icons/hand-heart-yellow.svg",
        icon: "parent",
        mobileIcon: "/Icons/hand-heart-icon.svg",
      },
      {
        text: "Bra att veta",
        href: "/bra-att-veta",
        // icon: "/Icons/info.svg",
        icon: "info",
        mobileIcon: "/Icons/infoblue.png",
      },
      {
        text: "Vanliga frågor",
        href: "/vanliga-fragor",
        // icon: "/Icons/yellowquestion.svg",
        icon: "question",
        mobileIcon: "/Icons/question-icon.svg",
      },
    ],
  },
  {
    title: "För medlemmar",
    content: [
      {
        text: "Scoutmärken",
        href: "/scoutmarken",
        // icon: "/Icons/yellow-brand.svg",
        icon: "badge",
        mobileIcon: "/Icons/brand-blue-logo.svg",
      },
      {
        text: "Året i HSS",
        href: "/aret-i-hss",
        // icon: "/Icons/brandHss.png",
        icon: "calendar",
        mobileIcon: "/Icons/hss-icon.svg",
      },
    ],
  },
  {
    title: "Om oss",
    content: [
      {
        text: "Vilka är vi?",
        href: "/vilka-ar-vi",
        icon: "/Icons/brandHss.png",
        mobileIcon: "/Icons/hss-icon.svg",
      },
      {
        text: "Våra båtar",
        href: "/vara-batar",
        // icon: "/Icons/yellow-boat.svg",
        icon: "boat",
        mobileIcon: "/Icons/boat-icon.svg",
      },
      {
        text: "Våra lokaler",
        href: "/vara-lokaler",
        icon: "mapPin",
        // icon: "/Icons/yellow_house.svg",
        mobileIcon: "/Icons/house-icon.svg",
      },
      {
        text: "Policy",
        href: "/policy",
        // icon: "/Icons/yellow-police.svg",
        icon: "policy",
        mobileIcon: "/Icons/shield-star-icon.svg",
      },
    ],
  },
];