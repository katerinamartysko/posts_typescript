import React, { FC } from 'react';
import { PostItem } from './PostItem';
import { Post } from '../api/types';

interface Props {
  posts: Array<Post>,
  title: string
}

const PostList: FC<Props> = ({ posts, title }) => {
  if (!posts.length)
    return <h1 className="noPost"> Постов не найдено </h1>;

  return (
    <div className="App">
      <h1 style={{ textAlign: 'center' }}>
        {title}
      </h1>
      {posts.map((post,) => (
        <PostItem key={post.id} post={post}  />
      ))}

    </div>
  );
};

export default PostList;
