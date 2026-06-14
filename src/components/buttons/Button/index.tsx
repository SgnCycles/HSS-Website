import { ButtonProps } from "@/types/common.types"
import { Link } from "@/i18n/routing";

export default function Button({ ariaLabel, href, variant, text, download=false, target="_blank" }: ButtonProps) {
  const variantClasses = {
    primaryBrown: "font-bold bg-brown-900 hover:bg-brown-900/70 text-white border-accent hover:border-accent/50",
    secondary: "sm:ps-[50px] sm:pe-[50px] font-bold inline-6/7 bg-primary hover:bg-brown-900/70 text-accent hover:text-accent-hover border-accent hover:border-accent/50",
    primaryBlue: "font-bold bg-primary hover:bg-primary-hover text-accent hover:text-accent-hover border-accent hover:border-accent/50",
    secondaryBlue: "font-bold bg-primary hover:bg-primary-hover text-background hover:text-accent-hover border-[#99AEBF] hover:border-accent/50",
    ternaryBlue: "font-bold bg-primary hover:bg-primary-hover text-accent hover:text-accent-hover border-[#99AEBF] hover:border-accent/50",
  }
  return ( 
    <Link 
      className={` ${variantClasses[variant]} max-h-min text-center px-[64px] w-full sm:w-max transition-all duration-300 border inline-flex items-center justify-center rounded-sm py-2 min-h-[65px]`}
      href={href}
      aria-label={ariaLabel}
      download={download}
      target={target}
    >
      {text}
    </Link>
  )
} 