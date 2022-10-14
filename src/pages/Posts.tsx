import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PostService from '../api/PostService';
import { useFetching } from '../hooks/useFetching';
import { changePage, createPost, deletePost, getPosts } from '../store/posts/actions';
import { getPageCount } from '../utils/pages';
import { State } from '../store/store';
import { Filter, Post } from '../api/types';
import { usePosts } from '../hooks/usePosts';
import PostForm from '../components/PostForm';
import PostList from '../components/PostList';
import PostFilter from '../components/PostFilter';
import Loader from '../components/ui/Loader/Loader';
import MyModal from '../components/ui/modal/MyModal';
import MyButton from '../components/ui/button/MyButton';
import Pagination from '../components/ui/pagination/Pagination';
import '../App.css';

const Posts = () => {
  const dispatch = useDispatch();
  const posts = useSelector((state: State) => state.posts.posts);
  const page = useSelector((state: State) => state.posts.page);
  const [limit] = useState<number>(10);
  const [modal, setModal] = useState<boolean>(false);
  const [totalPages, setTotalPages] = useState<number>(0);
  const [filter, setFilter] = useState<Filter>({ sort: null, query: null });
  const sortedAndSearchPosts = usePosts(posts, filter.sort, filter.query);

  const [fetchPosts, isPostsLoading, postError] = useFetching(async (limit: number, page: number) => {
    const response = await PostService.getAll(limit, page);
    dispatch(getPosts(response.data));
    const totalCount = response.headers['x-total-count'];
    setTotalPages(getPageCount(Number(totalCount), limit));
  });

  useEffect(() => {
    fetchPosts(limit, page);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [page]);

  const removePost = (postId: number): void => {
    dispatch(deletePost(postId));
  };

  const newCreate = (newPost: Post): void => {
    dispatch(createPost(newPost));
    setModal(false);
  };
  const handleChangePage = (page: number): void => {
    dispatch(changePage(page));
  };

  return (
    <div>
      <MyButton style={{ marginTop: 32, marginLeft: 8 }} onClick={() => setModal(true)}>
        Создать пользователя
      </MyButton>

      <MyModal visible={modal} setVisible={setModal}>
        <PostForm create={newCreate} />
      </MyModal>
      <hr style={{ margin: '16px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && <h1 className="error">Произошла ошибка {postError}</h1>}
      <PostList remove={removePost} posts={sortedAndSearchPosts} title="ПОСТЫ" />

      {isPostsLoading &&
        <div className="loader">
          <Loader />
        </div>
      }
      <Pagination
        page={page}
        changePage={handleChangePage}
        totalPages={totalPages}
      />
    </div>
  );

};

export default Posts;
