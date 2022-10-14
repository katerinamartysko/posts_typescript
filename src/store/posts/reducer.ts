import { ChangePageActions, CreatePostActions, DeletePostsActions, GetPostsAction } from './actions';
import { Post } from '../../api/types';
import c from '../constants';

type PostActions = GetPostsAction | DeletePostsActions | CreatePostActions | ChangePageActions

interface PostsState {
  posts: Array<Post>;
  page: number;
}

const INITIAL_STATE: PostsState = {
  posts: [],
  page: 1,
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
    case c.CHANGE_PAGE: {
      const page = action.payload;
      return {
        ...state,
        page
      };
    }
    default:
      return state;
  }
};
