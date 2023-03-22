import React from "react";
import Post from "./post";
import PostsList from "./postsList";

const Posts = ({ match }) => {
  const postId = match.params.postId;
  const posts = [
    { id: 1, label: "post1" },
    { id: 2, label: "post2" },
    { id: 3, label: "post3" },
  ];
  const display = match.params.display;

  return postId ? (
    <>
      {display ? <h3>{display}</h3>:""}
      <Post id={postId} posts={posts} />
    </>
  ) : (
    <PostsList posts={posts} />
  );
};

export default Posts;
