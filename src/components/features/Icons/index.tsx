import Image from "next/image";
import { FaAnchor, FaCompass, FaShieldAlt, FaHandHoldingHeart, FaAward, FaHome, FaHandsHelping, FaInstagram, FaArrowRight, FaArrowLeft, FaGraduationCap, FaHeart } from "react-icons/fa";
import { FaFire, FaSailboat } from "react-icons/fa6";
// import { GiKnot } from "react-icons/gi";
import { IoBookOutline, IoCloseOutline, IoHandLeft, IoHelpBuoy, IoHelpCircle, IoInformationCircle, IoKey, IoMap, IoMenuOutline, IoPeople, IoToday } from "react-icons/io5";
// import { MdOutlineEmail } from "react-icons/md";
// import { RiMapPin2Fill, RiSafariLine } from "react-icons/ri";

const iconList = {
  // safari: RiSafariLine,
  compass: FaCompass,
  anchor: FaAnchor,
  buoy: IoHelpBuoy,
  key: IoKey,
  map: IoMap,
  shield: FaShieldAlt,
  heartHands: FaHandHoldingHeart,
  info: IoInformationCircle,
  question: IoHelpCircle,
  parent: IoHandLeft,
  badge: FaAward,
  boat: FaSailboat,
  house: FaHome,
  policy: IoBookOutline,
  group: IoPeople,
  leader: FaHandsHelping,
  fire: FaFire,
  instagram: FaInstagram,
  // email: MdOutlineEmail,
  // mapPin: RiMapPin2Fill,
  arrowRight: FaArrowRight,
  arrowLeft: FaArrowLeft,
  graduationCap: FaGraduationCap,
  heart: FaHeart,
  // ropeKnot: GiKnot,
  hamburgerMenu: IoMenuOutline,
  closeMenu: IoCloseOutline,
  calendar: IoToday,
} as const;

export type IconsProps = {
  name: keyof typeof iconList | string,
  size?: number | string,
  variant?: string
}

export default function Icons({ name, size = 24, variant = "text-primary" }: IconsProps) {
  const IconComponent = iconList[name as keyof typeof iconList] || null;

  if (IconComponent === null) {
    const sizeNum: number = parseInt(size.toString());
    return (
      <Image src={name} alt={name} width={sizeNum} height={sizeNum} className="lg:mr-3"></Image>
    )
  }
  else {
    return (
      <figure className="inline-grid place-items-center">
        <IconComponent size={size} className={variant} />
      </figure>
    )
  }
}
