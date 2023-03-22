import React from "react";
import Post from "./post";
import PostsList from "./postsList";
import query from "query-string";
import _ from "lodash";

const Posts = ({ match, location }) => {
  const postId = match.params.postId;
  const posts = [
    { id: 1, label: "post1" },
    { id: 2, label: "post2" },
    { id: 3, label: "post3" },
  ];
  // берем строку query-запроса из адресной строки и распарсим ее
  const search = query.parse(location.search);

  // обрежем массив posts на то количество постов, которые передали в query-запрос, начинаем с индекса 0, заканчиваем индексом который мы передали в адресную строку
  const cropPosts = search
    ? _(posts).slice(0).take(search.count).value()
    : posts;

  return postId ? (
    <>
      <Post id={postId} posts={posts} />
    </>
  ) : (
    <PostsList posts={cropPosts} />
  );
};

export default Posts;
