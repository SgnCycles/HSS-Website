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
  const [like, setLike] = useState(false)
  

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

  const handelLike=()=>{
    setLike((prev)=> !prev)
   
  }

  

  return (

    <div className="flex flex-col items-center w-full h-auto">
      {apiData  && apiData.map((post) => {
        return (
          <div key={post.id} className="shadow-2xl shadow-black rounded-sm">
           
            <Image src={post.mediaUrl} alt="" width={300} height={400} className="mt-6"/>
            <div className="flex justify-start mt-3"><Heart className="mr-4 cursor-pointer" onClick={handelLike} fill={like? "#ef4444" : "none"} stroke={like? "#ef4444" : "currentColor"}/><MessageCircle className="" /> <div><Share className=""/></div></div>
            <p className="mt-2">Likes</p>
            <div className="flex justify-between items-center mt-4"><p className="">{post.caption}</p><button className="text-grey-500 font-medium">See translation</button></div>
          </div>
        )
      })}
    </div>

  )

}