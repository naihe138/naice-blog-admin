/**
 * @file
 * @author 何文林
 * @date 2017/7/7
 */
import { combineReducers } from 'redux';

// Reducers
import planlist from './planlist';
import user from './user-reduser'
// Combine Reducers
var reducers = combineReducers({
  planlist: planlist,
  user: user
});

export default reducers;
