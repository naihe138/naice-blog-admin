/**
 * @file
 * @author 何文林
 * @date 2017/7/7
 */
import { combineReducers } from 'redux'

// Reducers
import planlist from './planlist'
import user from './user-reduser'
import article from './article-reducer'
import project from './project-reducer'
// Combine Reducers
var reducers = combineReducers({
  planlist: planlist,
  user: user,
  article: article,
  project: project
});

export default reducers;
