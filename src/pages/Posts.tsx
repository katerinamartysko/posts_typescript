import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../api/PostService';
import { useFetching } from '../hooks/useFetching';
import { getPosts } from '../store/posts/actions';
import { getPageCount } from '../utils/pages';
import PostList from '../components/PostList';
import { State } from '../store/store';
import Loader from '../ui/Loader/Loader';
import '../App.css';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: State) => state.posts.posts);
  const [limit] = useState<number>(10);
  const [, setTotalPages] = useState<number>(0);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit: number, page: number) => {
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
      {postError && <h1 className="error">Произошла ошибка {postError}</h1>}
      <div className="posts">
        <PostList posts={posts} title="ПОСТЫ ПРО JS" />
      </div>
      {isPostsLoading &&
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}><Loader /></div>
      }
    </div>
  );

};

export default Posts;
