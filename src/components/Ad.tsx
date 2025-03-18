import Image from "next/image";

const Ad = ({ size }: { size: "sm" | "md" | "lg" }) => {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 flex gap-4 flex-col">
      {/* TITLE  */}
      <div className="flex justify-between w-full items-center font-semibold text-gray-500">
        <span>Sponsored Ads</span>
        <Image
          src="/more.png"
          alt="more"
          width={16}
          height={16}
          className="h-4 w-4 justify-self-end "
        />
      </div>
      <div
        className={`w-full ${size === "lg" ? "min-h-96" : "min-h-45"} relative`}
      >
        <Image
          src="https://images.pexels.com/photos/31128803/pexels-photo-31128803/free-photo-of-bustling-tokyo-street-crossing-with-billboards.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="pic"
          fill
          className="object-cover rounded-lg"
        />
      </div>
      <div className="flex gap-4 items-center flex-1">
        <Image
          src="https://images.pexels.com/photos/31128803/pexels-photo-31128803/free-photo-of-bustling-tokyo-street-crossing-with-billboards.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
          alt="avatar"
          width={40}
          height={40}
          className="w-10 h-10 rounded-full object-cover"
        />
        <span className="font-semibold text-blue-500">First Last</span>
      </div>
      <p className="text-sm">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis
        aut laboriosam, cum odit
      </p>
      <button className="bg-slate-100  px-2 py-1 rounded-lg text-xs text-gray-500 font-semibold">
        Learn More
      </button>
    </div>
  );
};

export default Ad;
