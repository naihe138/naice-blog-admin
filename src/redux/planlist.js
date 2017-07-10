/**
 * @file
 * @author 何文林
 * @date 2017/7/7
 */
import * as types from '../action/action-type';
const data = [
  {
    id: 1,
    title: '明天要去打酱油',
    content: '系呀系呀我们一起打酱油'
  }
]
const initialState = {
  show: false,
  planlist: data
};

const planReducer = function(state = initialState, action) {
  let list = state.planlist;
  switch(action.type) {
    case types.ADD:
      list.push(action.item);
      return Object.assign({}, state, { planlist: list });
    case types.DELECT:
      let newstate = list.filter((item) => item.id != action.id);
      return Object.assign({}, state, { planlist: newstate });;
    case types.SHOW:
      return Object.assign({}, state, { show: action.show });
  }
  return state;

}

export default planReducer;