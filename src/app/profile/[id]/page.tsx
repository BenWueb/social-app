import Feed from "@/components/Feed";
import LeftMenu from "@/components/LeftMenu";
import RightMenu from "@/components/RightMenu";
import Image from "next/image";

const ProfilePage = () => {
  return (
    <div className="flex gap-6 justify-between pt-6">
      <div className="hidden xl:block w-[20%]">
        <LeftMenu type="profile" />
      </div>
      <div className="w-full lg:w-[70%] xl:w-[50%]">
        <div className="flex flex-col gap-6">
          <div className="flex  flex-col items-center justify-center gap-4">
            <div className="relative w-full h-64">
              <Image
                src="https://images.pexels.com/photos/31128803/pexels-photo-31128803/free-photo-of-bustling-tokyo-street-crossing-with-billboards.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
                alt="city"
                fill
                className="object-cover rounded-lg"
              />
              <Image
                src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="avatar"
                width={120}
                height={120}
                className="w-30 h-30 rounded-full object-cover absolute -bottom-15 mx-auto left-0 right-0 ring-4 ring-white"
              />
            </div>
            <header className="mt-15 font-bold text-lg">Elva Weaver</header>
            <div className="flex items-center justify-center gap-10">
              <div className="flex flex-col text-sm items-center justify-center font-semibold">
                <span>142</span>
                <span className="text-xs">Posts</span>
              </div>
              <div className="flex flex-col text-sm items-center justify-center font-semibold">
                <span>1.2k</span>
                <span className="text-xs">Followers</span>
              </div>
              <div className="flex flex-col text-sm items-center justify-center font-semibold">
                <span>1.4k</span>
                <span className="text-xs">Following</span>
              </div>
            </div>
          </div>
          <Feed />
        </div>
      </div>
      <div className="hidden lg:block w-[30%]">
        <RightMenu userId="456" />
      </div>
    </div>
  );
};

export default ProfilePage;
