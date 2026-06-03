"use client"
import Link from "next/link"
import Icons from "@/components/features/Icons";

export type DropdownNavProps = {
  isOpen?: boolean,
  isActive?: boolean,
  closeDropdown: () => void; 
  closeMenu: () => void;     
  content: {
    icon: string
    href: string,
    text: string
  }[]
}

export default function DropdownNav({ 
  isOpen = false, 
  closeDropdown, 
  closeMenu, 
  content 
}: DropdownNavProps) {
  return (
    <ul 
    className={`
      absolute
      justify-self-end
      flex
      flex-col
      transition-all duration-300 ease-out
      bg-primary
      backdrop-blur-xl
      rounded-sm
      p-6
      min-w-65
      ${
        isOpen
          ? "not-sr-only max-h-96 opacity-100 translate-y-0"
          : "sr-only max-h-0 opacity-0 -translate-y-5 -z-10"
      }
    `}
    >
      {content.map((text, idx) => {
        return (
          <li
            key={idx}
            className={`
              group 
              opacity-0 
              flex 
              transition-all 
              delay-50 
              ease-in 
              cursor-pointer 
              border-b-2 
              border-transparent 
              transition-all 
              duration-200 
              ease-in 
              hover:border-blue-100/80
              ${ 
                isOpen 
                  ? "opacity-100 max-h-97 translate-y-0" 
                  : "opacity-0 -translate-y-3 max-w-300 max-h-0 -z-10" 
              }
            `}
          >
            <Link href={text.href} 
              className={`
                group 
                flex 
                items-center 
                text-background 
                font-body 
                font-bold 
                opacity-0 
                py-3  
                cursor-pointer 
                ${ 
                  isOpen 
                    ? "opacity-100 max-h-97 translate-y-0"
                    : "sr-only opacity-0 focus:text-background -translate-y-5 -z-10" 
                }
              `}
              onClick={() => {
              closeDropdown();
              closeMenu();
              }}
            >
              <Icons name={text.icon} variant="text-accent md:mr-4" />
              {text.text}
            </Link>
          </li>
        )
      })}
    </ul>
  );
}