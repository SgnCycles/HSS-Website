import { ReadMoreButtonProps } from "@/types/common.types";

const ReadMoreButton = ({ ariaLabel, variant, text, onClick }: ReadMoreButtonProps) => {
  const variantClasses = {
    primaryBlue: "font-bold bg-primary hover:bg-primary-hover text-accent hover:text-accent-hover border-accent hover:border-accent/50",
    secondaryBlue: "hidden lg:flex justify-center items-center bg-[#2A6491] font-bold text-background text-center px-16 transition-all duration-300 border rounded-sm py-2 hover:bg-primary-hover hover:text-background text-nowrap",
  }
  return ( 
    <button 
      className={` ${variantClasses[variant]} max-h-min text-center px-16 w-full sm:w-max transition-all duration-300 border inline-flex items-center justify-center rounded-sm py-2 min-h-16.25 cursor-pointer`}
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {text}
    </button>
  )
} 

export default ReadMoreButton;