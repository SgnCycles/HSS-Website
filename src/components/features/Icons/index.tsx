import { FaAnchor, FaCompass, FaShieldAlt, FaHandHoldingHeart, FaInfoCircle, FaQuestionCircle, FaAward, FaHome, FaFileContract, FaUserFriends, FaHandsHelping, FaInstagram, FaArrowRight, FaArrowLeft, FaGraduationCap, FaHeart } from "react-icons/fa";
import { FaFire, FaSailboat } from "react-icons/fa6";
import { GiKnot } from "react-icons/gi";
import { IoBookOutline, IoClose, IoCloseOutline, IoHandLeft, IoHelpBuoy, IoHelpBuoyOutline, IoHelpCircle, IoInformation, IoInformationCircle, IoKey, IoMap, IoMenu, IoMenuOutline, IoPeople, IoToday } from "react-icons/io5";
import { MdOutlineEmail } from "react-icons/md";
import { RiKey2Line, RiMapPin2Fill, RiParentFill, RiSafariLine } from "react-icons/ri";



const iconList = {
  safari: RiSafariLine,
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
  email: MdOutlineEmail,
  mapPin: RiMapPin2Fill,
  arrowRight: FaArrowRight,
  arrowLeft: FaArrowLeft,
  graduationCap: FaGraduationCap,
  heart: FaHeart,
  ropeKnot: GiKnot,
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
  const IconComponent = iconList[name as keyof typeof iconList] || RiSafariLine;

  return (
    <figure className="inline-grid place-items-center">
      <IconComponent size={size} className={variant} />
    </figure>
  );
}
