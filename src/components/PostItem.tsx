import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import MyButton from './ui/button/MyButton';
import { Post } from '../api/types';
import '../App.css';

interface Props {
  post: Post;
  remove: (postId: number) => void;
}

export const PostItem: FC<Props> = ({ post, remove }) => {
  const navigate = useNavigate();
  return (
    <div className="root">
      <div className="content">
        <strong>
          <div className="postTitle">
            {post.id}.{post.title}
          </div>
        </strong>
        <div>{post.body}</div>
      </div>
      <div className="postButton">
        <MyButton onClick={() => navigate(`/posts/${post.id}`)}>ОТКРЫТЬ</MyButton>
        <MyButton onClick={() => remove(post.id)}>УДАЛИТЬ</MyButton>
      </div>
    </div>
  );
};
