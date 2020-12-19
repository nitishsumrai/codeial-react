import { applyMiddleware, createStore } from 'redux';
import thunk from 'redux-thunk';
import {rootReducer} from '../reducers/index';

export default function Store() {
  return createStore(rootReducer,applyMiddleware(thunk));
}
