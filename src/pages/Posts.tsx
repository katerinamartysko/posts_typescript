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
import Pagination from '../components/ui/pagination/Pagination';
import { AppTheme } from '../utils/them';
import { Box, Button, Modal } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import '../App.css';

const useStyles = makeStyles()((theme: AppTheme) => ({
  button: {
    padding: theme.spacing(0.5),
    marginTop: theme.spacing(2),
    marginLeft: theme.spacing(1),
  },
  style: {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    background: '#FFFFFF',
    border: '2px solid #000',
    padding: 4,
  },
}));

const Posts = () => {
  const { classes } = useStyles();
  const dispatch = useDispatch();

  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const posts = useSelector((state: State) => state.posts.posts);
  const page = useSelector((state: State) => state.posts.page);

  const [limit] = useState<number>(10);
  const [, setModal] = useState<boolean>(false);
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
      <div>
        <Button onClick={handleOpen} className={classes.button} variant="outlined">
          Создать пользователя
        </Button>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
        >
          <Box className={classes.style}>
            <PostForm create={newCreate} />
          </Box>
        </Modal>
      </div>
      <hr style={{ margin: '16px 0' }} />
      <PostFilter filter={filter} setFilter={setFilter} />

      {postError && <h1 className="error">Произошла ошибка {postError}</h1>}
      <PostList remove={removePost} posts={sortedAndSearchPosts} title="ПОСТЫ" />

      {isPostsLoading && (
        <div className="loader">
          <Loader />
        </div>
      )}
      <Pagination page={page} changePage={handleChangePage} totalPages={totalPages} />
    </div>
  );
};

export default Posts;
