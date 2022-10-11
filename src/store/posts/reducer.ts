import { LoadConversationAction } from './actions';
import c from '../constants';
import { Post } from '../../api/types';

type PostActions = LoadConversationAction;

interface PostsState {
  posts: Array<Post>;
}

const INITIAL_STATE: PostsState = {
  posts: []
};

export const postsReducer = (state = INITIAL_STATE, action: PostActions) => {
  switch (action.type) {
    case c.GET_POSTS : {
      const posts = action.payload;
      return {
        ...state,
        posts: [...state.posts, ...posts]
      };
    }
    default:
      return state;
  }
};
