import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";

const Navbar = () => {
  return (
    <>
      {/* LEFT */}
      <div className="flex items-center justify-between h-24">
        <div className="md:hidden lg:block w-[20%]">
          <Link href="/" className="text-xl font-bold text-blue-600 ">
            SOCIAL
          </Link>
        </div>
        {/* CENTER */}
        <div className="hidden md:flex w-[50%]">
          {/* LINKS */}
          <div className="flex gap-6 text-gray-500 ">
            <Link href="/" className="flex gap-2 items-center">
              <Image
                src="/home.png"
                alt="Homepage"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Home</span>
            </Link>
            <Link href="/friends" className="flex gap-2 items-center">
              <Image
                src="/friends.png"
                alt="Friends Page"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Friends</span>
            </Link>
            <Link href="/stories" className="flex gap-2 items-center ">
              <Image
                src="/stories.png"
                alt="Stories Page"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span>Stories</span>
            </Link>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
          <MobileMenu />
        </div>
      </div>
    </>
  );
};

export default Navbar;
