import * as types from '../action/action-type';

const userReducer = function (state = {}, action) {
  switch (action.type) {
    case types.GETARTICLE:
      return Object.assign({}, state, action.data);
    default: return state
  }
}

export default userReducer;