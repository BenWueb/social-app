import Link from "next/link";
import Image from "next/image";

const FriendRequests = () => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md text-gray-500  gap-4">
      <div className="flex items-center justify-between">
        <span className="font-semibold text-sm">Friend Requests</span>
        <Link href="/" className="text-blue-500 text-xs">
          See all
        </Link>
      </div>
      <div className="flex w-full text-black">
        <div className="flex gap-4 items-center flex-1">
          <Image
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">First Last</span>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/accept.png"
            alt="avatar"
            width={20}
            height={20}
            className=" rounded-full object-cover"
          />{" "}
          <Image
            src="/reject.png"
            alt="avatar"
            width={20}
            height={20}
            className=" rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex w-full text-black">
        <div className="flex gap-4 items-center flex-1">
          <Image
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">First Last</span>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/accept.png"
            alt="avatar"
            width={20}
            height={20}
            className=" rounded-full object-cover"
          />{" "}
          <Image
            src="/reject.png"
            alt="avatar"
            width={20}
            height={20}
            className=" rounded-full object-cover"
          />
        </div>
      </div>
      <div className="flex w-full text-black">
        <div className="flex gap-4 items-center flex-1">
          <Image
            src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt="avatar"
            width={40}
            height={40}
            className="w-10 h-10 rounded-full object-cover"
          />
          <span className="font-semibold">First Last</span>
        </div>
        <div className="flex gap-2 items-center">
          <Image
            src="/accept.png"
            alt="avatar"
            width={20}
            height={20}
            className=" rounded-full object-cover"
          />{" "}
          <Image
            src="/reject.png"
            alt="avatar"
            width={20}
            height={20}
            className=" rounded-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default FriendRequests;
