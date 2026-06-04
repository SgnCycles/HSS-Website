import Image from "next/image";
import { instaFeed } from "@/data/upptäckLivetSomSjöscout";

export default function InstaFeedCard() {
  return (
    <div className="flex md:gap-4 gap-2">
      {instaFeed.map((post) => {
        return (
          <div
            key={post.id}
            className="relative flex-1 min-w-0 transition-transform hover:scale-95 duration-100 cursor-pointer">
            <Image
              src={post.img}
              alt=""
              width={432}
              height={560}
              className="object-cover w-full h-27 md:h-125"
            />
          </div>
        );
      })}
    </div>
  );
}
