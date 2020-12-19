import { combineReducers } from 'redux';
import PostsReducer from './posts';

export const rootReducer = combineReducers({ posts: PostsReducer });
