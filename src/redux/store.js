/**
 * @file
 * @author 何文林
 * @date 2017/7/7
 */
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import reducers from './reducers.js';

const store = createStore(
  reducers,
  applyMiddleware(thunk)
);

export default store;
