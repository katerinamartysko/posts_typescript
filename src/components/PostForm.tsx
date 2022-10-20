import React, { ChangeEvent, FC, FormEvent, MouseEvent, useState } from 'react';
import { Post } from '../api/types';
import { Button, TextField } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { AppTheme } from '../utils/them';
import Error from './Error';

const useStyles = makeStyles()((theme: AppTheme) => ({
  button: {
    padding: theme.spacing(2),
    margin: theme.spacing(1.6, 1, 0.5, 1),
  },
  myInp: {
    width: '90%',
    padding: theme.spacing(0.5, 1),
  },
}));

interface Props {
  create: (post: Post) => void;
}

const PostForm: FC<Props> = ({ create }) => {
  const { classes } = useStyles();
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState({ title: '', body: '' });

  const addNewPost = (e: MouseEvent) => {
    e.preventDefault();
    const newPost: Post = {
      ...post,
      userId: 1,
      id: Date.now(),
    };
    create(newPost);
    setPost({ title: '', body: '' });
  };

  const submitHandler = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setError(null);

    if (post.body.trim().length === 0) {
      setError('Введите значение');
      return;
    }
    if (post.title.trim().length === 0) {
      setError('Введите значение');
      return;
    }
  };

  const onChangeInput = (event: ChangeEvent<HTMLInputElement>) => {
    setPost({ ...post, title: event.target.value });
  };

  return (
    <form onSubmit={submitHandler}>
      <TextField
        id="outlined-basic"
        label="Название поста"
        variant="outlined"
        className={classes.myInp}
        value={post.title}
        onChange={onChangeInput}
      />
      <TextField
        id="outlined-basic"
        label="Описание поста"
        variant="outlined"
        className={classes.myInp}
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
      />
      <Error error={error} />
      <Button className={classes.button} variant="outlined" onClick={addNewPost}>
        Создать пост
      </Button>
    </form>
  );
};

export default PostForm;
