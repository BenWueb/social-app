import Link from "next/link";
import MobileMenu from "./MobileMenu";
import Image from "next/image";
import LoggedIn from "./LoggedIn";
import { ClerkLoading, SignedOut, SignedIn, ClerkLoaded } from "@clerk/nextjs";

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
            <div className="hidden xl:flex justify-center items-center bg-slate-100 rounded-xl p-2">
              <input
                type="text"
                placeholder="search..."
                className="outline-none bg-transparent"
              />
              <Image
                src="/search.png"
                width={14}
                height={14}
                alt="search"
                className="h-4 w-4"
              />
            </div>
          </div>
        </div>
        {/* RIGHT */}
        <div className="w-[30%] flex items-center gap-4 xl:gap-8 justify-end">
          <MobileMenu />
          <ClerkLoading>
            {" "}
            <div className="inline-block border-blue-500 h-8 w-8 animate-spin rounded-full border-4 border-solid  border-e-transparent align-[-0.125em] text-surface motion-reduce:animate-[spin_1.5s_linear_infinite] dark:text-white"></div>
          </ClerkLoading>
          <ClerkLoaded>
            <SignedIn>
              <LoggedIn />
            </SignedIn>
            <SignedOut>
              <div className="flex gap-2 items-center">
                <Image
                  src="/noAvatar.png"
                  width={20}
                  height={20}
                  alt="login"
                  className="h-4 w-4"
                />
                <Link href="/sign-in">Login</Link> <span>/</span>{" "}
                <Link href="/sign-up">Register</Link>
              </div>
            </SignedOut>
          </ClerkLoaded>
        </div>
      </div>
    </>
  );
};

export default Navbar;
