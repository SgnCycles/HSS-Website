"use client"
interface HeroProps{


  img:string,
  isHome?:string
}


export default function Hero({img , isHome}:HeroProps){


  return(

    <div className={`bg-cover  bg-no-repeat w-full ${isHome==="true"? "h-[288px] md:h-screen flex items-center justify-center" : "h-[144px] md:h-[374px] flex items-center justify-center"}`}  style={{backgroundImage: `url(${img})`,backgroundPosition:"left bottom"}}>
      {isHome==="true" ? 
      (<> <div className="hidden md:flex flex-col text-center relative">
           <h1 className="font-heading font-extrabold text-[64px] leading-none text-center">
           <span className="block text-white">Välkommen till </span>
           <span className="block text-accent">Hässelby Strand Sjöscoutkår</span>
           </h1></div>
           <div className="hidden px-32 mt-3 md:flex justify-between items-center bg-cover w-full h-[258px] absolute bottom-0"  style={{backgroundImage: "url('/images/Backgrounds/homewavy.svg')"}}>
           <p><span className="block font-bold font-body text-background">Vi är en stolt sjöscoutkår som ger barn och ungdomar en trygg plats</span> 
           <span className="block font-bold font-body text-background">att växa, lära sig sjömanskap och skapa livslånga vänner.</span></p>
           <button className="pt-[19px] pr-[64px] pb-[22px] pl-[64px] bg-primary rounded-sm rounded-lg rounded-lg text-accent border-accent border-2">Bli Scout </button>
           </div>
           </>)
           : <div className="text-6xl">Hello</div>}

      
    </div>
  )
}