import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { postsReducer } from './posts/reducer';

const rootReducer = combineReducers({
  posts: postsReducer,
});

export const store = configureStore({
  reducer: rootReducer,
});

export type State = ReturnType<typeof store.getState>;
