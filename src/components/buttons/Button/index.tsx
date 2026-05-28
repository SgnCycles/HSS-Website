import { ButtonProps } from "@/types/common.types"
import Link from "next/link"


export default function Button({ ariaLabel, href, variant, text }: ButtonProps) {
  const variantClasses = {
    primaryBrown: "font-bold bg-brown-900 hover:bg-brown-900/70 text-white border-accent hover:border-accent/50",
    secondary: "sm:ps-[50px] sm:pe-[50px] font-bold inline-6/7 bg-primary hover:bg-primary-hover text-accent hover:text-accent-hover border-accent hover:border-accent/50",
    primaryBlue: "font-semibold bg-primary hover:bg-primary-hover text-accent hover:text-accent-hover border-accent hover:border-accent/50",
  }
  return ( 
    <Link 
      className={` ${variantClasses[variant]} text-center px-[64px] w-full sm:w-max transition-all duration-300 border-2 inline-flex items-center justify-center rounded-sm py-2 min-h-[70px]`}
      href={href}
      aria-label={ariaLabel}
    >
      {text}
    </Link>
  )
} 
