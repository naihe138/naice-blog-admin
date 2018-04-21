import { createReducer } from '../utils'
import { fetchHero, delHero, editeHero } from '../api'
// state
const initialState = {
  hero: {}
}

export const GETHERO = 'GETHERO'

// action
// 获取留言墙
export const getHero = prams => dispatch => {
	return fetchHero(prams).then(res => {
		dispatch({ type: GETHERO, hero: res.result })
		return res
	})
}

// 删除留言墙
export const delectHero = id => delHero(id)

// 编辑留言墙
export const toEditeHero = (id, prams = {}) => editeHero(id, prams)


// reducer
export default createReducer(initialState, {
	[GETHERO]: (state, {hero}) => {
		return { ...state, hero}
	},
})
