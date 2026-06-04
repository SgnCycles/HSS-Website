import { ReactNode } from "react";

export type BorderHeroProps = {
  children?: ReactNode
};

export default function BorderHero({ children }: BorderHeroProps) {
  return (
    <div className="relative hidden  w-full max-h-auto md:grid grid-cols-1 grid-rows-1 overflow-hidden">
      <div className="col-start-1 row-start-1 w-full h-full pointer-events-none select-none">
        <svg 
          className="w-full h-full" 
          viewBox="0 0 1728 259" 
          fill="none" 
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <path 
            d="M-48.8366 52.8656C0.435654 -34.427 561.726 54.3861 792.613 64.9694C1023.5 75.5526 1233.88 -21.9437 1552.88 4.59768C1871.89 31.1391 1743.89 39.1223 1743.89 39.1223C1743.89 39.1223 1853.43 245.228 1743.89 245.228C1634.35 245.228 1283.3 245.228 981.572 245.228C679.844 245.228 227.253 245.228 3.44439 245.228C-220.364 245.228 -14.8457 188.692 -14.8457 188.692C-14.8457 188.692 -98.1089 140.158 -48.8366 52.8656Z" 
            fill="#E6F2FB" 
            fillOpacity="0.5"
          />
          <path 
            d="M-47.6016 91.542C1.6625 15.9127 555.916 93.0044 793.708 102.029C1031.5 111.053 1234.9 26.728 1553.85 49.7232C1872.8 72.7184 1744.82 79.6349 1744.82 79.6349C1744.82 79.6349 1854.35 258.203 1744.82 258.203C1635.3 258.203 1284.31 258.203 982.636 258.203C680.958 258.203 228.442 258.203 4.67073 258.203C-219.101 258.203 -13.6164 209.22 -13.6164 209.22C-13.6164 209.22 -96.8657 167.171 -47.6016 91.542Z" 
            fill="#00355F" 
            fillOpacity="0.5"
          />
        </svg>
      </div>
      <div className="col-start-1 row-start-1 z-10 flex items-end xl:items-center justify-center w-full h-full">
        <div className="container px-6 pt-25 w-full">
          {children}
        </div>
      </div>
    </div>
  )
}
