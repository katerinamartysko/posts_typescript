import React, { useEffect, useState } from 'react';
import { useFetching } from '../hooks/useFetching';
import PostService from '../api/PostService';
import { useDispatch } from 'react-redux';
import { getPosts } from '../store/posts/actions';

const Posts = () => {
  const dispatch = useDispatch();
  const [limit] = useState(10);

  const [fetchPosts] = useFetching(async (limit: number, page: number) => {
    const response = await PostService.getAll(limit, page);
    dispatch(getPosts(response.data));
  });

  useEffect(() => {
    fetchPosts(limit, 1);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>Posts</h1>
    </div>
  );

};

export default Posts;
