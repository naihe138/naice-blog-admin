import * as types from '../action/action-type';

const projectReducer = function (state = {}, action) {
  switch (action.type) {
    case types.GETPROJECT:
      return Object.assign({}, state, action.data);
    default: return state
  }
}

export default projectReducer;