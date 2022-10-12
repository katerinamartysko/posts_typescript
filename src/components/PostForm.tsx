import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { Post } from '../api/types';
import MyButton from './ui/button/MyButton';

interface Props {
  create: (post: Post) => void;
}

const PostForm: FC<Props> = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e: MouseEvent) => {
    e.preventDefault();
    const newPost: Post = {
      ...post,
      userId: 1,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  return (
    <form>
      <input
        className="myInp"
        value={post.title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <input
        className="myInp"
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <MyButton onClick={addNewPost}>Создать пост</MyButton>
    </form>
  );
};

export default PostForm;
