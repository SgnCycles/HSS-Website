"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import Link from "next/link";

interface FeedProps {
  id?: string;
  caption?: string;
  mediaUrl: string;
  permalink: string;
  likeCount: number;
  commentsCount: number;
  username: string;
}

const placeholders = [
  { src: "/images/Instagram/insta1.png", caption: "Äventyr på vattnet med HSS! 🌊⛵" },
  { src: "/images/Instagram/insta2.png", caption: "Tillsammans skapar vi minnen för livet 🏕️" },
  { src: "/images/Instagram/insta3.png", caption: "Scoutliv på sitt bästa — gemenskap, natur och äventyr! 🌿" },
];

export default function InstaSection() {
  const [apiData, setApiData] = useState<FeedProps[]>([]);
  const [userName, setUserName] = useState("");

  const url = "https://feeds.behold.so/au47cEddhn57lA49VlAe";

  const fetchInstaData = async () => {
    try {
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (!res.ok) {
        console.log(`Error Occured ${res.status}`);
        return;
      }
      const data = await res.json();
      setUserName(data.username);
      setApiData(data.posts);
    } catch (error) {
      console.log("An Error Occured", error);
    }
  };

  useEffect(() => {
    fetchInstaData();
  }, []);

  if (apiData.length === 0) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center w-full">
        {placeholders.map((placeholder, index) => (
          <div key={index} className="bg-background rounded-md overflow-hidden shadow-md">
            <Image src={placeholder.src} alt="" width={300} height={400} className="w-full h-auto" />
            <div className="mt-4 px-2 pb-4.5">
              <p className="text-sm line-clamp-2">
                <span className="font-bold">hss_scout</span> {placeholder.caption}
              </p>
            </div>
          </div>
        ))}
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center w-full">
      {apiData && apiData?.slice(0, 3).map((post) => {
        return (
          <div key={post.id} className="bg-background rounded-md overflow-hidden shadow-md transition hover:-translate-y-1 hover:shadow-xl">
            <Link className="shadow-2xl shadow-black rounded-sm" href={post.permalink} target="_blank" rel="noopener noreferrer">
              <Image src={post.mediaUrl} alt="" width={300} height={400} className="w-full h-auto" />
              <div className="flex justify-start items-center">
                <p className="p-2.5">Likes <span>{post.likeCount}</span></p>
                <MessageCircle />
                <span className="pl-1.5">{post.commentsCount}</span>
              </div>
            </Link>
            <div className="mt-4 px-2 pb-4.5">
              <p className="text-sm line-clamp-2">
                <span className="font-bold">{userName}</span> {post.caption}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}