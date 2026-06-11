import { CloseButtonProps } from "@/types/common.types";

const CloseButton = ({ ariaLabel, text, onClick }: CloseButtonProps) => {
  return (
    <button
      type="button"
      className="font-bold bg-primary hover:bg-primary-hover text-accent hover:text-accent-hover border-accent hover:border-accent/50 max-h-min text-center px-16 w-full sm:w-max transition-all duration-300 border inline-flex items-center justify-center rounded-sm py-2 min-h-16.25 cursor-pointer"
      aria-label={ariaLabel}
      onClick={onClick}
    >
      {text}
    </button>
  );
};

export default CloseButton;