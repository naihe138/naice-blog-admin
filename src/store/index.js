
import { createStore, applyMiddleware, combineReducers } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunkMiddleware from 'redux-thunk'

import countReducer from './test'
import layoutReducer from './layout'
import articleReducer from './article'
import heroReducer from './hero'
import commentReducer from './comment'
import projectReducer from './project'
import musicReducer from './music'

const reducers = combineReducers({
  countObj: countReducer,
  layout: layoutReducer,
  articleList: articleReducer,
  hero: heroReducer,
  comment: commentReducer,
  project: projectReducer,
  music: musicReducer
});

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(thunkMiddleware)))

export default store;
