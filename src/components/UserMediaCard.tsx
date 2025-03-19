import Link from "next/link";
import React from "react";
import Image from "next/image";

const UserMediaCard = () => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md text-gray-500  gap-3 ">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm">User Media</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-3">
        <Image
          src="https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-scenic-beach-landscape-with-rocky-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          height={120}
          width={80}
          className="h-[120px] w=[80px] rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-scenic-beach-landscape-with-rocky-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          height={120}
          width={80}
          className="h-[120px] w=[80px] rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-scenic-beach-landscape-with-rocky-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          height={120}
          width={80}
          className="h-[120px] w=[80px] rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-scenic-beach-landscape-with-rocky-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          height={120}
          width={80}
          className="h-[120px] w=[80px] rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-scenic-beach-landscape-with-rocky-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          height={120}
          width={80}
          className="h-[120px] w=[80px] rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-scenic-beach-landscape-with-rocky-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          height={120}
          width={80}
          className="h-[120px] w=[80px] rounded-md object-cover"
        />
        <Image
          src="https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-scenic-beach-landscape-with-rocky-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt=""
          height={120}
          width={80}
          className="h-[120px] w=[80px] rounded-md object-cover"
        />
      </div>
    </div>
  );
};

export default UserMediaCard;
