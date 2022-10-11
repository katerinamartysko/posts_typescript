import { Post } from '../../api/types';
import { PayloadAction } from '../types';
import c from '../constants';

export type LoadConversationAction = PayloadAction<c.GET_POSTS, Array<Post>>;

export const getPosts = (posts: Array<Post>): LoadConversationAction => ({
  type: c.GET_POSTS,
  payload: posts,
});
