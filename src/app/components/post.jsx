import React from "react";

const Post = ({ id, posts, history }) => {
  // создадим функцию для проверки того, есть ли такой пост в нашей базе постов posts (получить post по id)
  // передаем аргумент id для его проверки
  const getPostById = (id) => {
    return posts.find((post) => post.id.toString() === id);
  };
  // создаем переменную для искомого поста
  const post = getPostById(id);

  // создадим функцию - обработчик нажатия на кнопку сохранить для перехода на список постов
  const handleSave = () => {
    history.replace("/posts");
  };
  return (
    <>
      <h3>{post ? post.label : `Post with id: ${id} not founded`}</h3>
      <button
        onClick={() => {
          handleSave();
        }}
      >
        Сохранить
      </button>
    </>
  );
};

export default Post;
