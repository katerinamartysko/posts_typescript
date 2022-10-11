import { CreatePostActions, DeletePostsActions, GetPostsAction } from './actions';
import { Post } from '../../api/types';
import c from '../constants';

type PostActions = GetPostsAction | DeletePostsActions | CreatePostActions

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
    case c.CREATE_POST : {
      const newPost = action.payload;
      return {
        ...state,
        posts: [...state.posts, newPost]
      };
    }
    case c.DELETE_POST: {
      const postId = action.payload;
      return {
        ...state,
        posts: state.posts.filter(p => p.id !== postId)
      };
    }
    default:
      return state;
  }
};
