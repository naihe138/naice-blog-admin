import { createReducer } from '../utils'
import { fetchMusic, delMusic, editeMusic, addMusic } from '../api'
// state
const initialState = {
  music: []
}

export const GETMUSIC = 'GETMUSIC'

// action
// 获取音乐
export const getMusic = prams => dispatch => {
	return fetchMusic(prams).then(res => {
		dispatch({ type: GETMUSIC, music: res.result })
		return res
	})
}

// 获取音乐
export const getMusicById = prams => {
	return fetchMusic(prams)
}

// 添加音乐
export const toAddMusic = prams => addMusic(prams)

// 删除音乐
export const delectMusic = id => delMusic(id)

// 编辑音乐
export const toEditeMusic = (id, prams = {}) => editeMusic(id, prams)

// reducer
export default createReducer(initialState, {
	[GETMUSIC]: (state, {music}) => {
		return { ...state, music}
	},
})
