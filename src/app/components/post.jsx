import React from "react";

const Post = ({ id, posts }) => {
  // создадим функцию для проверки того, есть ли такой пост в нашей базе постов posts (получить post по id)
  // передаем аргумент id для его проверки
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  // создаем переменную для искомого поста
  const post = getPostById(id);

  return <h3>{post ? post.label : `Post with id: ${id} not founded`}</h3>;
};

export default Post;
