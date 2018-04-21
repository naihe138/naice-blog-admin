import { createReducer } from '../utils'
import { fetchComment, delComment, editeComment } from '../api'
// state
const initialState = {
  comment: {}
}

export const GETCOMMENT = 'GETCOMMENT'

// action
// 获取留言墙
export const getComment = prams => dispatch => {
	return fetchComment(prams).then(res => {
		dispatch({ type: GETCOMMENT, comment: res.result })
		return res
	})
}

// 删除留言墙
export const delectComment = id => delComment(id)

// 编辑留言墙
export const toEditeComment = (id, prams = {}) => editeComment(id, prams)


// reducer
export default createReducer(initialState, {
	[GETCOMMENT]: (state, {comment}) => {
		return { ...state, comment}
	},
})
