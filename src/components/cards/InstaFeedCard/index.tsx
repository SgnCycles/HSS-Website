"use client"
import Image from "next/image"
import { useEffect, useState } from "react"
import { Share,MessageCircle, Heart} from "lucide-react"

interface FeedProps{
  id?: string,
  caption?: string,
  mediaUrl:string
}



export default function InstaFeedCard() {

  const [apiData, setApiData] = useState<FeedProps[] >([])

  const url = "https://feeds.behold.so/4FiCVYtO0Wj9jbmn9bBs"

  const fetchInstaData = async () => {

    const res = await fetch(url)

    if(!res.ok){

      console.log(`Error Occured ${res.status}`)
    }

    const data = await res.json()

    setApiData(data.posts)

  }

  useEffect(() => {

    fetchInstaData()

  }, [])

  return (

    <div className="flex flex-col items-center w-full h-auto">
      {apiData  && apiData.map((post) => {
        return (
          <div key={post.id} className="shadow-2xl shadow-black rounded-sm">
           
            <Image src={post.mediaUrl} alt="" width={300} height={400} className="mt-6"/>
            <div className="flex justify-start mt-3"><Heart className="mr-4"/> <MessageCircle className="mr-4" /> <Share className="mr-4"/></div>
            <p className="mt-3">{post.caption}</p>
          </div>
        )
      })}
    </div>

  )

}