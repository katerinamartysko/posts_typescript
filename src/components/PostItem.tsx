import React, { FC } from 'react';
import { Post } from '../api/types';
import MyButton from '../ui/button/MyButton';
import '../App.css'

interface Props {
  post: Post;
  remove: (postId: number) => void
}

export const PostItem: FC<Props> = ({ post, remove }) => {
  return (
    <div className="root">
      <div className="content">
        <strong>{post.id} {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
      <div>
      <MyButton>
        ОТКРЫТЬ
      </MyButton>
      <MyButton onClick={() => remove(post.id)}>
        УДАЛИТЬ
      </MyButton>
      </div>
    </div>
  );
};
