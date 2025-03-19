import React from "react";
import Image from "next/image";
import Comments from "./Comments";

const Post = () => {
  return (
    <div className="p-4 gap-4 flex flex-col ">
      <div className="flex justify-between items-center">
        <div className="flex gap-4 items-center">
          <Image
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span>Beth</span>
        </div>
        <Image src="/more.png" alt="more" width={16} height={16} />
      </div>
      <div className="flex flex-col gap-4 ">
        <div className="w-full min-h-96 relative ">
          <Image
            src="https://images.pexels.com/photos/31120801/pexels-photo-31120801/free-photo-of-scenic-beach-landscape-with-rocky-island.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
            alt="avatar"
            fill
            className="object-cover rounded-md"
          />
        </div>
        <p className="">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum
          quibusdam omnis provident!
        </p>
      </div>
      {/* INTERACT */}
      <div className="flex items-center justify-between gap-4  w-full">
        <div className="flex gap-8">
          <div className="flex items-center justify-around   bg-slate-100 rounded-xl gap-4 p-2">
            <Image
              src="/like.png"
              alt="like post"
              height={16}
              width={16}
              className="cursor-pointer "
            />
            <span className="text-gray-300">|</span>

            <span className="text-gray-500">123</span>
            <span className="hidden md:inline">Likes</span>
          </div>
          <div className="flex items-center bg-slate-100 rounded-xl gap-4 p-2">
            <Image
              src="/comment.png"
              alt="comment post"
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>

            <span className="text-gray-500">123</span>
            <span className="hidden md:inline">Comments</span>
          </div>
        </div>
        <div className="">
          <div className="flex items-center  bg-slate-100 rounded-xl gap-4 p-2">
            <Image
              src="/share.png"
              alt="share post"
              height={16}
              width={16}
              className="cursor-pointer"
            />
            <span className="text-gray-300">|</span>

            <span className="text-gray-500">123</span>
            <span className="hidden md:inline">Share</span>
          </div>
        </div>
      </div>
      <Comments />
    </div>
  );
};

export default Post;
