import React from "react";
import FriendRequests from "./FriendRequests";
import Birthdays from "./Birthdays";
import Ad from "./Ad";
import UserInformationCard from "./UserInformationCard";
import UserMediaCard from "./UserMediaCard";

const RightMenu = ({ userId }: { userId?: string }) => {
  return (
    <div className="flex flex-col gap-6">
      {userId && (
        <>
          <UserInformationCard />
          <UserMediaCard />
        </>
      )}
      <FriendRequests />
      <Birthdays />
      <Ad size="md" />
    </div>
  );
};

export default RightMenu;
