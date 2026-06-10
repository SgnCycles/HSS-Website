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

export default function InstaFeedCard() {
  const [apiData, setApiData] = useState<FeedProps[]>([]);
  const [userName, setUserName] = useState("");

  const url = "https://feeds.behold.so/au47cEddhn57lA49VlAe";

  const fetchInstaData = async () => {
    try {
      const res = await fetch(url, { next: { revalidate: 3600 } });

      if (!res.ok) {
        console.log(`Error Occured ${res.status}`);
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

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 items-center w-full">
      {apiData &&
        apiData?.slice(0, 3).map((post) => {
          return (
            <div
              key={post.id}
              className=" bg-background rounded-md overflow-hidden shadow-md transition hover:-translate-y-1 hover:shadow-xl"
            >
              <Link
                className="shadow-2xl  shadow-black rounded-sm"
                href={post.permalink}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={post.mediaUrl}
                  alt=""
                  width={300}
                  height={400}
                  className="w-full h-auto"
                />
                <div className="flex justify-start items-center">
                  <p className="p-2.5">
                    Likes <span>{post.likeCount}</span>
                  </p>
                  <MessageCircle className="" />{" "}
                  <span className="pl-1.5">{post.commentsCount}</span>
                </div>
              </Link>
              <div className="mt-4 px-2 ">
                <p className="text-sm line-clamp-2">
                  <span className="font-bold">{userName}</span> {post.caption}
                </p>
                <button className="mt-2 text-sm text-grey-500 font-medium pb-3.5">
                  See translation
                </button>
              </div>
            </div>
          );
        })}
    </div>
  );
}
