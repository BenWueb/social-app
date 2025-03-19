import Image from "next/image";

const Birthdays = () => {
  return (
    <div className="flex flex-col bg-white p-4 rounded-lg shadow-md text-gray-500  gap-4 ">
      <span className="font-semibold text-sm">Birthdays</span>
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
          <button className="bg-blue-500 text-white px-2 py-1 rounded-lg text-xs">
            Celebrate
          </button>
        </div>
      </div>
      <div className="bg-slate-100 w-full flex gap-4 rounded-lg p-2 items-center ">
        <Image
          src="/gift.png"
          alt="gift"
          width={20}
          height={20}
          className="w-5 h-5"
        />
        <div className=" text-gray-500 text-xs ">
          <span className="  font-semibold">Upcoming Birthdays</span>
          <p className=" mt-2">See other 16 have upcoming birthdays</p>
        </div>
      </div>
    </div>
  );
};

export default Birthdays;
