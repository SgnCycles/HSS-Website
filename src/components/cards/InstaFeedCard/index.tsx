import Image from "next/image";
import { instaFeed } from "@/data/upptäckLivetSomSjöscout";

export default function InstaFeedCard() {
  return (
    <div className="flex md:gap-4 gap-2">
      {instaFeed.map((post) => {
        return (
          <div
            key={post.id}
            className="relative w-27 h-57 md:w-108 md:h-140 max-w-6xl"
          >
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
