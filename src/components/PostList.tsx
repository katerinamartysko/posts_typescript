import React, { FC } from 'react';
import { PostItem } from './PostItem';
import { Post } from '../api/types';

interface Props {
  posts: Array<Post>;
  title: string;
  remove: (postId: number) => void
}

const PostList: FC<Props> = ({ posts, title, remove }) => {
  if (!posts.length)
    return <h1 className="noPost"> Постов не найдено </h1>;

  return (
    <div className="App">
      <h1 className="title">
        {title}
      </h1>
      {posts.map((post,) => (
        <PostItem key={post.id} remove={remove} post={post}  />
      ))}

    </div>
  );
};

export default PostList;
