export type ArrowAnimationProps = {
  isOpen?: boolean,
}

const ArrowAnimation = ({ isOpen = false }: ArrowAnimationProps) => {
  return (
    <figure 
      role="presentation"
      className={`group z-50 scale-50 cursor-pointer inline-block overflow-visible transition-transform duration-300 ${
        isOpen ? "translate-y-0 xl:translate-y-4" : ""
      }`}
    >
      <svg 
        className="w-auto h-10"
        id="arrow" 
        data-name="Component 2 – 1" 
        xmlns="http://www.w3.org/2000/svg" 
        viewBox="0 0 34.323 41.016"
      >
        <g 
          id="Group_1" 
          data-name="Group 1" 
          className={`transition-transform duration-300 ease-out translate-x-0 translate-y-3 group-hover:translate-y-5 ${
            isOpen ? "translate-y-5" : ""
          }
            `}
        >
          <path 
            id="Path_1" 
            data-name="Path 1" 
            d="M8.86,9a2.86,2.86,0,0,0-2.022,4.883l14.3,14.3a2.86,2.86,0,0,0,4.045,0l14.3-14.3A2.86,2.86,0,0,0,37.463,9Z" 
            transform="translate(-6 -9)" 
            fill="#0b81dd" 
            fillRule="evenodd"
          />
        </g>

        <g 
          id="Group_2" 
          data-name="Group 2" 
          className="transition-transform duration-300 ease-out translate-x-0 translate-y-0"
        >
          <path 
            id="Path_1-2" 
            data-name="Path 1" 
            d="M8.855,9a2.855,2.855,0,0,0-2.019,4.874L21.114,28.152a2.855,2.855,0,0,0,4.038,0L39.428,13.874A2.855,2.855,0,0,0,37.41,9Z" 
            transform="translate(-6 -9)" 
            fill="#f7b309" 
            fillRule="evenodd"
          />
        </g>
      </svg>
    </figure>
  )
}

export default ArrowAnimation;
