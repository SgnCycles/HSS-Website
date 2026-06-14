import BadgePlacementFront from "@/components/features/BadgePlacementFront";
import BadgePlacementLeft from "@/components/features/BadgePlacementLeft";
import BadgePlacementRight from "@/components/features/BadgePlacementRight";

export type AgeCardBadgesProps = {
  id: number,
  title: string,
  mobileImage: string[],
  desktopImage: string,
  border: string,
  primary: string,
  secondary: string,
  heading: string,
  icon: string,
}

export const markesAffischCardContent: AgeCardBadgesProps[] = [
  {
    id: 1,
    title: "Spårarscouter",
    mobileImage: ["/images/Scoutmarken/Mobile/spararscouter_mobile1.png", "/images/Scoutmarken/Mobile/spararscouter_mobile2.png"],
    desktopImage: "/images/Scoutmarken/Desktop/spararscouter_desktop.png",
    border: 'border-sjohumlor-secondary',
    primary: 'bg-sjohumlor-primary',
    secondary: 'bg-sjohumlor-secondary',
    heading: 'text-sjohumlor-primary',
    icon: 'sjohumlor.png',
  },
  {
    id: 2,
    title: "Upptäckarscouter",
    mobileImage: ["/images/Scoutmarken/Mobile/upptackarscouter_mobile1.png", "/images/Scoutmarken/Mobile/upptackarscouter_mobile2.png", "/images/Scoutmarken/Mobile/upptackarscouter_mobile3.png" ],
    desktopImage: "/images/Scoutmarken/Desktop/upptackarscouter_desktop.png",
    border: 'border-kaparna-secondary',
    primary: 'bg-kaparna-primary',
    secondary: 'bg-kaparna-secondary',
    heading: 'text-kaparna-primary',
    icon: 'kaparna.png',
  },
  {
    id: 3,
    title: "Ävetyrarscouter",
    mobileImage: ["/images/Scoutmarken/Mobile/aventyrarscout_mobile1.png", "/images/Scoutmarken/Mobile/aventyrarscout_mobile2.png", "/images/Scoutmarken/Mobile/aventyrarscout_mobile3.png"],
    desktopImage: "/images/Scoutmarken/Desktop/aventyrarscout_desktop.png",
    border: 'border-konvojen-secondary',
    primary: 'bg-konvojen-primary',
    secondary: 'bg-konvojen-secondary',
    heading: 'text-konvojen-primary',
    icon: 'konvojen.png',
  },
  {
    id: 4,
    title: "Utmanarscouter",
    mobileImage: ["/images/Scoutmarken/Mobile/utmanarscouter_mobile1.png", "/images/Scoutmarken/Mobile/utmanarscouter_mobile2.png", "/images/Scoutmarken/Mobile/utmanarscouter_mobile3.png", "/images/Scoutmarken/Mobile/utmanarscouter_mobile4.png", "/images/Scoutmarken/Mobile/utmanarscouter_mobile5.png"],
    desktopImage: "/images/Scoutmarken/Desktop/utmanarscouter_desktop.png",
    border: 'border-utmanare-secondary',
    primary: 'bg-utmanare-primary',
    secondary: 'bg-utmanare-secondary',
    heading: 'text-utmanare-primary',
    icon: 'utmanare.png',
  },
]

export type UniformProps = {
  id: number,
  image: React.ComponentType<{ className: string }>
}

export const scoutUniformCardContent: UniformProps[] = [
  {
    id: 1,
    image: BadgePlacementLeft
  },
  { id: 2,
    image: BadgePlacementFront
  },
  { 
    id: 3,
    image: BadgePlacementRight
  }
]