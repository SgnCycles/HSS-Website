import { instaFeedProps } from "@/types/upptäckLivetSomSjöscout"
import { instaFeed } from "@/data/upptäckLivetSomSjöscout"
import Image from "next/image"

export default function InstaFeedCard(){


return(

  <div className="flex w-full md:gap-6 gap-2 justify-center items-center">

    {instaFeed.map((feed)=>{

      return <Image src={feed.img} alt="" width={432} height={432} key={feed.id} className="w-30.25 h-27 md:w-full md:h-108 transition-transform hover:scale-90 duration-150"/>
    })}

  </div>
)

}