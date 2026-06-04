import { CommonType } from "@/types/common.types"

export default function Border({ variant = "" }: CommonType) {
  return (
    <svg 
      className={`absolute bottom-0 -mb-px z-2 h-auto full-bleed ${variant}`}
      xmlns="http://www.w3.org/2000/svg" 
      width="1920.785" 
      height="152" 
      viewBox="0 0 1920.785 152">
      <path 
        data-name="Border Wave" 
        d="M-96.145,153s.009-63.324,0-64.821C82.976,77,103.49,154.819,536.011,110.57,1008.5,62.231,1526.523-89.9,1824.552,77.766c.2.83,0,75.234,0,75.234Z" 
        transform="translate(96.145 -1)" 
        fill="currentColor"
      />
    </svg>
  )
} 
