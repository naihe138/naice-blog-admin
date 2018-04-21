import { createReducer } from '../utils'
import { addProject, editeProject, delProject, fetchProject, fetchProjectId } from '../api'
// state
const initialState = {
  project: {}
}

export const GETPROJECTS = 'GETPROJECTS'

// action
// 获取项目
export const getPro = prams => dispatch => {
	return fetchProject(prams).then(res => {
		dispatch({ type: GETPROJECTS, project: res.result })
		return res
	})
}

// 添加项目
export const addPro = prams => addProject(prams).then(res => res)

// 修改文章
export const editePro = (id, prams) => editeProject(id, prams).then(res => res)

// 根据id获取文章
export const getProId = (id) => fetchProjectId(id).then(res => res)

// 删除文章
export const delectPro = id => delProject(id).then(res=> res)

// reducer
export default createReducer(initialState, {
	[GETPROJECTS]: (state, {project}) => {
		return { ...state, project}
	}
})
