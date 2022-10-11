import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import PostService from '../api/PostService';
import { useFetching } from '../hooks/useFetching';
import { getPosts } from '../store/posts/actions';
import { getPageCount } from '../utils/pages';

const Posts = () => {
  const dispatch = useDispatch();
  const [limit] = useState(10);
  const [, setTotalPages] = useState<number>(0);

  const [fetchPosts] = useFetching(async (limit: number, page: number) => {
    const response = await PostService.getAll(limit, page);
    dispatch(getPosts(response.data));
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(Number(totalCount), limit));
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
