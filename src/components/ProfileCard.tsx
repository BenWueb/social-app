import Image from "next/image";

const ProfileCard = () => {
  return (
    <div className="flex flex-col justify-center align-center bg-white p-4 rounded-lg shadow-md text-gray-500  gap-3 ">
      <div className="relative w-full min-h-16">
        <Image
          src="https://images.pexels.com/photos/31128803/pexels-photo-31128803/free-photo-of-bustling-tokyo-street-crossing-with-billboards.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="city"
          fill
          className="object-cover rounded-md"
        />
        <Image
          src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
          alt="avatar"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover absolute -bottom-5 mx-auto left-0 right-0 "
        />
      </div>
      <header className="text-center mt-2 font-bold ">
        Edward Gabriel May
      </header>
      <div className="flex text-gray-500 align-center justify-center gap-2 ">
        <span className="text-xs">...</span>
        <span className="text-xs">500 followers</span>
      </div>
      <button className="bg-blue-500 text-white px-3 py-2 rounded-md text-xs w-[50%] mx-auto">
        My Profile
      </button>
    </div>
  );
};

export default ProfileCard;
