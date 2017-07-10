/**
 * @file
 * @author 何文林
 * @date 2017/7/7
 */
import * as types from '../action/action-type';

const userReducer = function (state = {}, action) {
  switch (action.type) {
    case types.LOGIN:
      return Object.assign({}, state, action.user);
    default: return state
  }
}

export default userReducer;