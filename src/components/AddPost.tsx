import Image from "next/image";

const AddPost = () => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md text-gray-500 text-sm">
      {/* INPUT */}
      <div className="flex w-full gap-2">
        <Image
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt=""
          height={60}
          width={60}
          className="w-15 h-15 rounded-full object-cover"
        />
        <div className="w-full flex gap-2 flex-col">
          <div className="flex gap-2">
            <textarea
              name=""
              placeholder="What's on your mind?"
              className="bg-slate-100 rounded-md w-full p-2 outline-none "
            />
            <Image
              src="/emoji.png"
              alt="emoji"
              height={20}
              width={20}
              className="w-5 h-5 cursor-pointer self-end"
            />
          </div>
          <div className="flex gap-4 flex-wrap">
            <div className="flex gap-2  items-center">
              <Image
                src="/addimage.png"
                alt=""
                height={20}
                width={20}
                className="w-5 h-5"
              />
              <span>Photo</span>
            </div>
            <div className="flex gap-2  items-center">
              <Image
                src="/addvideo.png"
                alt=""
                height={20}
                width={20}
                className="w-5 h-5"
              />
              <span>Video</span>
            </div>
            <div className="flex gap-2  items-center">
              <Image
                src="/poll.png"
                alt=""
                height={20}
                width={20}
                className="w-5 h-5"
              />
              <span>Poll</span>
            </div>
            <div className="flex gap-2  items-center">
              <Image
                src="/addevent.png"
                alt=""
                height={20}
                width={20}
                className="w-5 h-5"
              />
              <span>Event</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddPost;
