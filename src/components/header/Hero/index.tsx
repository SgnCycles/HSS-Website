
interface HeroSectionProps{

  img:string,
 
}
export default function Hero({img}:HeroSectionProps){
  return( 
    <div className={`bg-cover bg-no-repeat bg-center w-full h-63.5 md:w-full md:h-187.25 top-27 left[-81] flex items-center justify-center bg-[url(${img})]`}>  
    </div>
    )
}