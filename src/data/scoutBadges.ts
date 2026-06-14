export type ImageProps = {
  id: number,
  image: string,
  name: string
}

export type BadgeProps = {
  id: number,
  name: string,
  groups?: {
    age: string
  }[]
  image: string
}

export const scoutQualification: ImageProps[] = [
  { id: 1, image: "/badges/sjoscoutmarket.svg", name: "Sjöscoutmärket" },
  { id: 2, image: "/badges/batettan.svg", name: "Båtettan" },
  { id: 3, image: "/badges/battvaan.svg", name: "Båttvåan" },
  { id: 4, image: "/badges/battrean.svg", name: "Båttrean" }
]

export const scoutBadges: BadgeProps[] = [
  {
    id: 1,
    name: "Vara ute: Vatten",
    groups: [
      { age: "/badges/spararscouter.svg" },
      { age: "/badges/aventyrarscouter.svg" }, 
      { age: "/badges/upptackarscouter.svg" }, 
    ],
    image: "/badges/vara-ute-vatten.svg"
  },
  {
    id: 2,
    name: "Vatten",
    groups: [
      { age: "/badges/aventyrarscouter.svg" }, 
      { age: "/badges/upptackarscouter.svg" }, 
    ],
    image: "/badges/vatten.svg"
  },
  {
    id: 3,
    name: "Under ytan",
    groups: [
      { age: "/badges/spararscouter.svg" }, 
      { age: "/badges/upptackarscouter.svg" }, 
    ],
    image: "/badges/under-ytan.svg"
  },
  {
    id: 4,
    name: "Paddla",
    groups: [
      { age: "/badges/spararscouter.svg" },
      { age: "/badges/aventyrarscouter.svg" }, 
      { age: "/badges/upptackarscouter.svg" }, 
    ],
    image: "/badges/paddla.svg"
  },
  {
    id: 5,
    name: "Dykning",
    groups: [
      { age: "/badges/aventyrarscouter.svg" } 
    ],
    image: "/badges/dykning.svg"
  },
  {
    id: 6,
    name: "Isvett",
    groups: [
      { age: "/badges/aventyrarscouter.svg" }, 
      { age: "/badges/upptackarscouter.svg" }, 
    ],
    image: "/badges/isvett.svg"
  },
  {
    id: 7,
    name: "Sjövett",
    groups: [
      { age: "/badges/aventyrarscouter.svg" }, 
      { age: "/badges/upptackarscouter.svg" }, 
    ],
    image: "/badges/sjovett.svg"
  },
  {
    id: 8,
    name: "Livrädda",
    groups: [
      { age: "/badges/aventyrarscouter.svg" } 
    ],
    image: "/badges/livradda.svg"
  },
  {
    id: 9,
    name: "Första repmärket",
    groups: [
      { age: "/badges/spararscouter.svg" }, 
      { age: "/badges/upptackarscouter.svg" }, 
    ],
    image: "/badges/forsta-repmarket.svg"
  },
  {
    id: 10,
    name: "Andra repmärket",
    groups: [
      { age: "/badges/aventyrarscouter.svg" }, 
      { age: "/badges/upptackarscouter.svg" }, 
    ],
    image: "/badges/andra-repmarket.svg"
  },
  {
    id: 11,
    name: "Väder",
    groups: [
      { age: "/badges/aventyrarscouter.svg" }, 
      { age: "/badges/upptackarscouter.svg" } 
    ],
    image: "/badges/vader.svg"
  },
  {
    id: 12,
    name: "Navigera",
    groups: [
      { age: "/badges/aventyrarscouter.svg" },
      { age: "/badges/upptackarscouter.svg" }, 
    ],
    image: "/badges/navigera.svg"
  },
]