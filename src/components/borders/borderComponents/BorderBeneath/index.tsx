'use client'
import { VariantType } from "@/types/common.types"

export default function BorderBeneath({ variantBackground = "" }: VariantType) {
  return (
    <svg 
      className={`absolute bottom-0 z-1 mb-2 rotate-180 md:pb-8 lg:pb-9 h-auto full-bleed mask-repeat ${variantBackground}`}
      xmlns="http://www.w3.org/2000/svg" 
      width="1920.201" 
      height="238.682" 
      viewBox="0 0 1920.201 238.682"
    >
      <path 
        data-name="Rectangle 20" 
        d="M2097.1,1144.342s-.039,217.735,0,218.819c-271.477,26.856-631.392-132.246-1146.748-37.661-338.4,81.706-575.758,57.975-773.453,39.292.005.313.016-220.449.016-220.449Z" 
        transform="translate(-176.903 -1144.342)"
        fill="currentColor"
      />
    </svg>
  )
} 
