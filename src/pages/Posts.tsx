import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../api/PostService';
import { useFetching } from '../hooks/useFetching';
import { createPost, deletePost, getPosts } from '../store/posts/actions';
import { getPageCount } from '../utils/pages';
import PostList from '../components/PostList';
import Loader from '../ui/Loader/Loader';
import { State } from '../store/store';
import { Post } from '../api/types';
import '../App.css';
import PostForm from '../components/PostForm';
import MyModal from '../ui/modal/MyModal';
import MyButton from '../ui/button/MyButton';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: State) => state.posts.posts);
  const [limit] = useState<number>(10);
  const [modal, setModal] = useState<boolean>(false);

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

  const removePost = (postId: number) => {
    dispatch(deletePost(postId));
  };

  const newCreate = (newPost: Post) => {
    dispatch(createPost(newPost));
    setModal(false);
  };

  return (
    <div>
      <MyButton style={{ marginTop: 32, marginLeft: 8 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>
      <MyModal visible={modal} setVisible={setModal}>
      <PostForm create={newCreate}/>
      </MyModal>
      {postError && <h1 className="error">Произошла ошибка {postError}</h1>}
        <PostList remove={removePost} posts={posts} title="ПОСТЫ ПРО JS" />
      {isPostsLoading &&
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 56 }}><Loader /></div>
      }
    </div>
  );

};

export default Posts;
