"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { UserButton } from "@clerk/nextjs";

const LoggedIn = () => {
  const [loggedIn, setLoggedIn] = useState(true);

  return (
    <>
      <div>
        {loggedIn && (
          <div className="flex gap-4 justify-center items-center">
            <Link className="" href="/friends">
              <Image
                src="/people.png"
                width={14}
                height={14}
                alt="friends"
                className="w-4 h-4 "
              />
            </Link>
            <Link className="" href="/messages">
              <Image
                src="/messages.png"
                width={14}
                height={14}
                alt="messages"
                className="w-4 h-4 "
              />
            </Link>
            <Link className="" href="/notifications">
              <Image
                src="/notifications.png"
                width={14}
                height={14}
                alt="notifications"
                className="w-4 h-4 "
              />
            </Link>
            <Link className="" href="/profile">
              <UserButton />
            </Link>
          </div>
        )}

        {/* {!loggedIn && <SignInButton />} */}
      </div>
    </>
  );
};

export default LoggedIn;
