import React, { ChangeEvent, FC, MouseEvent, useState } from 'react';
import { Post } from '../api/types';
import { Button } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { AppTheme } from '../utils/them';

const useStyles = makeStyles()((theme: AppTheme) => ({
  button: {
    padding: theme.spacing(0.1),
    marginLeft: theme.spacing(1),
  },
}));
interface Props {
  create: (post: Post) => void;
}

const PostForm: FC<Props> = ({ create }) => {
  const [post, setPost] = useState({ title: '', body: '' });
  const { classes } = useStyles();

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

  return (
    <form>
      <input
        className="myInp"
        value={post.title}
        onChange={(e: ChangeEvent<HTMLInputElement>) => setPost({ ...post, title: e.target.value })}
        type="text"
        placeholder="Название поста"
      />
      <input
        className="myInp"
        value={post.body}
        onChange={e => setPost({ ...post, body: e.target.value })}
        type="text"
        placeholder="Описание поста"
      />
      <Button className={classes.button} variant="outlined" onClick={addNewPost}>
        Создать пост
      </Button>
    </form>
  );
};

export default PostForm;
