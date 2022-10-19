import React, { FC } from 'react';
import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { makeStyles } from 'tss-react/mui';
import { AppTheme } from '../utils/them';
import { Post } from '../api/types';
import '../App.css';

const useStyles = makeStyles()((theme: AppTheme) => ({
  root: {
    color: theme.palette.text.secondary,
  },
  button: {
    marginBottom: theme.spacing(1),
  },
}));

interface Props {
  post: Post;
  remove: (postId: number) => void;
}

export const PostItem: FC<Props> = ({ post, remove }) => {
  const navigate = useNavigate();
  const { classes } = useStyles();
  return (
    <div className="root">
      <div className="content">
        <strong>
          <Typography>
            {post.id}.{post.title}
          </Typography>
        </strong>
        <Typography variant="subtitle1">{post.body}</Typography>
      </div>
      <div className="postButton">
        <Button variant="outlined" className={classes.button} onClick={() => navigate(`/posts/${post.id}`)}>
          ОТКРЫТЬ
        </Button>
        <Button variant="outlined" className={classes.button} onClick={() => remove(post.id)}>
          УДАЛИТЬ
        </Button>
      </div>
    </div>
  );
};
