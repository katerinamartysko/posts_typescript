import React, { FC } from 'react';
import { Post } from '../api/types';
import '../App.css'

interface Props {
  post: Post;
}

export const PostItem: FC<Props> = ({ post }) => {
  return (
    <div className="root">
      <div className="content">
        <strong>{post.id} {post.title}</strong>
        <div>
          {post.body}
        </div>
      </div>
    </div>
  );
};
