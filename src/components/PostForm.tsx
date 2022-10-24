import React, { ChangeEvent, FC, FormEvent, useState } from 'react';
import { Post } from '../api/types';
import { Alert, Button, TextField } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { AppTheme } from '../utils/them';

const useStyles = makeStyles()((theme: AppTheme) => ({
  button: {
    padding: theme.spacing(2),
    margin: theme.spacing(1.6, 1, 0.5, 1),
  },
  myInp: {
    width: '90%',
    margin: theme.spacing(0.7, 0),
  },
}));

interface Props {
  create: (post: Post) => void;
}

const PostForm: FC<Props> = ({ create }) => {
  const { classes } = useStyles();
  const [error, setError] = useState<string | null>(null);
  const [post, setPost] = useState({ title: '', body: '' });

  const submitHandler = async (event: FormEvent): Promise<void> => {
    event.preventDefault();
    setError(null);

    const newPost: Post = {
      ...post,
      userId: 1,
      id: Date.now(),
    };

    if (post.body.trim().length === 0 && post.title.trim().length === 0) {
      setError('Введите значение');
      return;
    }
    if (post.body.trim().length === 0) {
      setError('Введите значение для описания');
      return;
    }
    if (post.title.trim().length === 0) {
      setError('Введите значение для заголовка');
      return;
    }

    create(newPost);
    setPost({ title: '', body: '' });
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

      {error !== null && <Alert severity="error">{error}</Alert>}

      <Button className={classes.button} variant="outlined" type="submit">
        Создать пост
      </Button>
    </form>
  );
};

export default PostForm;
