import React from "react";
import Image from "next/image";

const Comments = () => {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center w-full bg-white gap-4">
        <Image
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="avatar"
          height={40}
          width={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex w-full items-center bg-slate-100 rounded-lg pr-2">
          <input
            type="text"
            placeholder="Write a comment..."
            className=" flex-1 rounded-lg p-2 outline-none"
          />
          <Image
            src="/emoji.png"
            alt="emoji"
            height={16}
            width={16}
            className="h-4 w-4 "
          />
        </div>
      </div>
      {/* COMMENTS */}
      <div className="flex gap-4 ">
        <Image
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="profile"
          height={40}
          width={40}
          className="w-10 h-10 rounded-full"
        />
        <div className="flex flex-col gap-2 flex-1">
          <span>Dustin Davis</span>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corrupti
            provident officia ad?
          </p>
          <div className=" flex gap-2 text-gray-500 items-center text-xs">
            <div className="flex items-center bg-white rounded-xl gap-4 p-2 ">
              <Image
                src="/like.png"
                alt="likes post"
                height={16}
                width={16}
                className="cursor-pointer"
              />
              <span className="">|</span>

              <span className="">123</span>
              <span className="hidden md:inline">Likes</span>
            </div>
            <span>Reply</span>
          </div>
        </div>
        <Image
          src="/more.png"
          alt="more"
          width={16}
          height={16}
          className="h-4 w-4 justify-self-end"
        />
      </div>
    </div>
  );
};

export default Comments;
