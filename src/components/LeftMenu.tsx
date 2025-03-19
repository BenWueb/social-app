import Image from "next/image";
import ProfileCard from "./ProfileCard";
import Ad from "./Ad";

function LeftMenu({ type }: { type: "home" | "profile" }) {
  return (
    <div className="flex flex-col gap-6">
      {type === "home" && <ProfileCard />}
      <ul className="flex flex-col justify-center align-center bg-white p-4 rounded-lg shadow-md text-gray-500  gap-6 ">
        <li className="flex items-center gap-4 text-sm cursor-pointer ">
          <Image
            src="/posts.png"
            alt="posts"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          My Posts
        </li>
        <li className="flex items-center gap-4 text-sm cursor-pointer ">
          <Image
            src="/activity.png"
            alt="activity"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          Activity
        </li>
        <li className="flex items-center gap-4 text-sm cursor-pointer ">
          <Image
            src="/market.png"
            alt="market"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          Marketplace
        </li>
        <li className="flex items-center gap-4 text-sm cursor-pointer ">
          <Image
            src="/events.png"
            alt="events"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          Events
        </li>
        <li className="flex items-center gap-4 text-sm cursor-pointer ">
          <Image
            src="/albums.png"
            alt="albums"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          Albums
        </li>
        <li className="flex items-center gap-4 text-sm cursor-pointer ">
          <Image
            src="/videos.png"
            alt="videos"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          Videos
        </li>
        <li className="flex items-center gap-4 text-sm cursor-pointer ">
          <Image
            src="/news.png"
            alt="news"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          News
        </li>
        <li className="flex items-center gap-4 text-sm cursor-pointer ">
          <Image
            src="/courses.png"
            alt="courses"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          Courses
        </li>
        <li className="flex items-center gap-4 text-sm cursor-pointer ">
          <Image
            src="/lists.png"
            alt="lists"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          Lists
        </li>
        <li className="flex items-center gap-4 text-sm cursor-pointer ">
          <Image
            src="/settings.png"
            alt="settings"
            width={20}
            height={20}
            className="w-5 h-5"
          />
          Settings
        </li>
      </ul>
      <Ad size="sm" />
    </div>
  );
}

export default LeftMenu;
