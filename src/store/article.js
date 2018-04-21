import { createReducer } from '../utils'
import { getArts, addArt, 
		fetchTag, editeArt, 
		getArtId, delArt, 
		editeTag, delTag, addTag } from '../api'
// state
const initialState = {
  article: {},
  tags: {}
}

export const GETARTICLES = 'GETARTICLES'
export const GETTAG = 'GETTAG'

// action
// 获取文章
export const getArticle = prams => dispatch => {
	return getArts(prams).then(res => {
		dispatch({ type: GETARTICLES, article: res.result })
		return res
	})
}

// 添加文章
export const addArticle = prams => addArt(prams).then(res => res)

// 修改文章
export const editeArticle = (id, prams) => editeArt(id, prams).then(res => res)


// 根据id获取文章
export const getArticleId = (id) => getArtId(id).then(res => res)

// 删除文章
export const delectArticle = id => delArt(id).then(res=> res)


// 获取标签
export const getTag = prams => dispatch => {
	return fetchTag(prams).then(res => {
		dispatch({ type: GETTAG, tags: res.result })
		return res
	})
}

// 编辑标签
export const toEditeTag = prams => editeTag(prams)

// 删除标签
export const delectTag = id => delTag(id)

// 新增标签
export const toAddTag = prams => addTag(prams)

// reducer
export default createReducer(initialState, {
	[GETARTICLES]: (state, {article}) => {
		return { ...state, article}
	},
	[GETTAG]: (state, {tags}) => {
		return { ...state, tags}
	}
})
