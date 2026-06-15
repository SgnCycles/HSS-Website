"use client";
import Image from "next/image";
import { useEffect, useState } from "react";
import { MessageCircle } from "lucide-react";
import { Link } from "@/i18n/routing";

interface FeedProps {
  id?: string;
  caption?: string;
  mediaUrl: string;
  permalink: string;
  likeCount?: number;
  commentsCount?: number;
  username: string;
}

const placeholders: FeedProps[] = [
  {
    mediaUrl: "/images/Instagram/placeholder_insta1.png",
    caption: "Konvojen har upptäckarscouterna som gäster på bromötet❤️⚜️⛵️☀️",
    permalink: "https://www.instagram.com/hss_scout",
    username: "hss_scout",
  },
  {
    mediaUrl: "/images/Instagram/placeholder_insta2.png",
    caption:
      "Äventyrarscouterna Konvojen har kvällsmöte. Kanske sista resan med Lumbago 💔",
    permalink: "https://www.instagram.com/hss_scout",
    username: "hss_scout",
  },
  {
    mediaUrl: "/images/Instagram/placeholder_insta3.png",
    caption:
      "Idag hade HSS sommaravslutning för hela kåren! Tack till alla som kom☀️🌸⚜️",
    permalink: "https://www.instagram.com/hss_scout",
    username: "hss_scout",
  },
];

const PostCard = ({
  post,
  isPlaceholder,
}: {
  post: FeedProps;
  isPlaceholder: boolean;
}) => (
  <div className="bg-background rounded-md overflow-hidden shadow-md transition hover:-translate-y-1 hover:shadow-xl">
    <Link
      className="shadow-2xl shadow-black rounded-sm"
      href={post.permalink}
      target="_blank"
      rel="noopener noreferrer"
    >
      <Image
        src={post.mediaUrl}
        alt=""
        width={300}
        height={400}
        className="w-full h-75 object-cover"
      />
      {!isPlaceholder && (
        <div className="flex justify-start items-center">
          <p className="p-2.5">
            Likes <span>{post.likeCount}</span>
          </p>
          <MessageCircle />
          <span className="pl-1.5">{post.commentsCount}</span>
        </div>
      )}
    </Link>
    <div className="mt-4 px-2 pb-5.5 ">
      <p className="text-sm line-clamp-2">
        <span className="font-bold">{post.username}</span> {post.caption}
      </p>
    </div>
  </div>
);

export default function InstaSection() {
  const [apiData, setApiData] = useState<FeedProps[]>([]);

  const url = "https://feeds.behold.so/au47cEddhn57lA49VlAe";

  const fetchInstaData = async () => {
    try {
      const res = await fetch(url, { next: { revalidate: 3600 } });
      if (!res.ok) return;
      const data = await res.json();
      setApiData(
        data.posts
          .slice(0, 3)
          .map((post: FeedProps) => ({ ...post, username: data.username })),
      );
    } catch (error) {
      console.log("An Error Occured", error);
    }
  };

  useEffect(() => {
    fetchInstaData();
  }, []);

  const isPlaceholder = apiData.length === 0;
  const posts = isPlaceholder ? placeholders : apiData;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full">
      {posts.map((post, index) => (
        <PostCard
          key={post.id ?? index}
          post={post}
          isPlaceholder={isPlaceholder}
        />
      ))}
    </div>
  );
}
