import React from "react";

const Post = ({ match, posts }) => {
  // получаем текущий адрес поста из адресной строки (его id)
  const postId = match.params.postId;
  // создадим функцию для проверки того, есть ли такой пост в нашей базе постов posts (получить post по id)
  // передаем аргумент id для его проверки
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  // создаем переменную для искомого поста
  const post = getPostById(postId);

  return <h3>{post ? post.label : `Post with id: ${postId} not founded`}</h3>;
};

export default Post;
