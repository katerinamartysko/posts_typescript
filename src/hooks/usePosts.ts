import { useMemo } from 'react';
import { KeyofPost, Post } from '../api/types';

export const useSortedPost = (posts: Array<Post>, sort: KeyofPost | null) => {
  return useMemo(() => {
    if (!sort) return posts;
    return [...posts].sort((a, b) => a[sort].localeCompare(b[sort]));
  }, [sort, posts]);
};

export const usePosts = (posts: Array<Post>, sort: KeyofPost | null, query: KeyofPost | null) => {
  const sortedPost = useSortedPost(posts, sort);
  const queryPost = query || '';
  return useMemo(() => {
    return sortedPost.filter(post => post.title.toLowerCase().includes(queryPost.toLowerCase()));
  }, [queryPost, sortedPost]);
};
