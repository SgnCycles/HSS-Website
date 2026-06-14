import { SecurityAndSafetyCardContentType, SecurityAndSafetyCheckType, SecurityAndSafetyInfoType } from "@/types/types";

export const securityAndSafetyCardContent:SecurityAndSafetyCardContentType[] = [
  {
    titleKey: "leader-screening.title",
    icon: "/Icons/party-leader-icon.svg",
    infoKey: "leader-screening.info"
  },
  {
    titleKey: "life-jackets-required.title",
    icon: "/Icons/check-icon.svg",
    infoKey: "life-jackets-required.info"
  },
  {
    titleKey: "safety-training.title",
    icon: "/Icons/two-people-icon.svg",
    infoKey: "safety-training.info"
  },
  {
    titleKey: "safe-community.title",
    icon: "/Icons/dialog-icon.svg",
    infoKey: "safe-community.info"
  },
]

export const securityAndSafetyCheckContent:SecurityAndSafetyCheckType[] = [
  {
    icon: "/Icons/checkbox-icon.svg",
    infoKey: "checks.background-checks"
  },
  {
    icon: "/Icons/checkbox-icon.svg",
    infoKey: "checks.safety-training"
  },
  {
    icon: "/Icons/checkbox-icon.svg",
    infoKey: "checks.incident-reporting"
  },
  {
    icon: "/Icons/checkbox-icon.svg",
    infoKey: "checks.parent-visits"
  }
]

export const securityAndSafetyInfoContent:SecurityAndSafetyInfoType[] = [
  {
    titleKey: "safe-transparent-routines.title",
    infoKey: "safe-transparent-routines.info"
  },
  {
    titleKey: "inclusive-modern-scouting.title",
    infoKey: "inclusive-modern-scouting.info"
  },
  {
    titleKey: "open-communication.title",
    infoKey: "open-communication.info"
  }
]

export const securityAndSafetyPopupContent:SecurityAndSafetyInfoType[] = [
  {
    titleKey: "leaderScreening.title",
    infoKey: "leaderScreening.info"
  },
  {
    titleKey: "safeRoutines.title",
    infoKey: "safeRoutines.info"
  },
  {
    titleKey: "inclusiveScouting.title",
    infoKey: "inclusiveScouting.info"
  },
  {
    titleKey: "openCommunication.title",
    infoKey: "openCommunication.info"
  },
]