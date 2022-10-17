import { Post } from '../../api/types';
import { PayloadAction } from '../types';
import c from '../constants';

export type GetPostsAction = PayloadAction<c.GET_POSTS, Array<Post>>;
export type DeletePostsActions = PayloadAction<c.DELETE_POST, number>;
export type CreatePostActions = PayloadAction<c.CREATE_POST, Post>;
export type ChangePageActions = PayloadAction<c.CHANGE_PAGE, number>;

export const getPosts = (posts: Array<Post>): GetPostsAction => ({
  type: c.GET_POSTS,
  payload: posts,
});

export const deletePost = (postId: number): DeletePostsActions => ({
  type: c.DELETE_POST,
  payload: postId,
});

export const createPost = (newPost: Post): CreatePostActions => ({
  type: c.CREATE_POST,
  payload: newPost,
});
export const changePage = (post: number): ChangePageActions => ({
  type: c.CHANGE_PAGE,
  payload: post,
});
