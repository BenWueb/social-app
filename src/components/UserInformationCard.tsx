import Link from "next/link";
import React from "react";
import Image from "next/image";

const UserInformationCard = () => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md text-gray-500  gap-3 ">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm">User Information</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <header className="text-black">
        Elva Weaver <span className="text-gray-50 text-sm">@Iamadev</span>
      </header>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Est iure
        similique ducimus? Eveniet, obcaecati? Quisquam, accusantium!
      </p>
      <div className="flex items-center gap-2 w-full">
        <Image src="/map.png" alt="location pin" height={16} width={16} />
        <small className="">
          Living in <span className="text-gray-500 font-bold">Denver</span>
        </small>
      </div>
      <div className="flex items-center gap-2 w-full">
        <Image src="/school.png" alt="graduation cap" height={16} width={16} />
        <small className="">
          Went to{" "}
          <span className="text-gray-500 font-bold">Edgar High School</span>
        </small>
      </div>
      <div className="flex items-center gap-2 w-full">
        <Image src="/work.png" alt="briefcase" height={16} width={16} />
        <small className="">
          Works at <span className="text-gray-500 font-bold">Apple Inc.</span>
        </small>
      </div>
      <div className="flex justify-between">
        <div className="flex items-center gap-2 w-full">
          <Image src="/link.png" alt="link" height={16} width={16} />
          <Link href="/" className="text-blue-500 text-sm">
            lama.dev
          </Link>
        </div>
        <div className="flex items-center gap-2 w-full">
          <Image src="/date.png" alt="calendar" height={16} width={16} />
          <small className="text-nowrap">Joined November 2024</small>
        </div>
      </div>
      <button className="bg-blue-500  p-2  rounded-lg text-xs text-white font-semibold">
        Following
      </button>
      <span className="text-red-300 self-end text-xs">Block User</span>
    </div>
  );
};

export default UserInformationCard;
