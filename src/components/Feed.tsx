import React from "react";
import Post from "./Post";
import Ad from "./Ad";

const Feed = () => {
  return (
    <div className="flex flex-col bg-white rounded-lg shadow-md">
      <Post />
      <Post />
      <Ad size="lg" />
      <Post />
      <Post />
      <Post />
      <Ad size="lg" />
      <Post />
      <Post />
    </div>
  );
};

export default Feed;
