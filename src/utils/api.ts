
import {http, getAuthorization } from './http'
import { API_ROOT } from './config'
// 登录
export const login = (params = {}) => http.post('user/login', { ...params })

// 获取文章列表
export const getArts = (params = {}) => http.get('article/get', { params })
// 添加文章
export const addArticle = (params = {}) => http.put('article/add', { ...params })

// 修改文章
export const editeArt = (id: string, params = {}) => http.post(`article/edite/${id}`, { ...params })

// 删除文章
export const delArt = (id: string) => http.delete(`article/delect/${id}`)

export const getArtId = (id: string, params = {}) => http.get(`article/get/${id}`, { params })

// 获取所有的标签
export const fetchTag = (params = {}) => http.get('tag/get', { params })

// 编辑标签
export const editeTag = (params = {}) => http.post('tag/edit', { ...params })

// 添加标签
export const addTag = (params = {}) => http.put('tag/add', { ...params })

// 删除标签
export const delTag = (id: string) => http.delete(`tag/delect/${id}`)

// 获取留言墙
export const fetchHero = (params = {}) => http.get('hero/get', { params })

// 删除留言墙
export const delHero = (id: string) => http.delete(`hero/delect/${id}`)

// 编辑留言墙
export const editeHero = (id: string, params = {}) => http.post(`hero/edite/${id}`, {...params})

// 获取文章评论
export const fetchComment = (params = {}) => http.get('comment/get', { params })

// 删除评论
export const delComment = (id: string) => http.delete(`comment/delect/${id}`)

// 编辑评论
export const editeComment = (id: string, params = {}) => http.post(`comment/edite/${id}`, {...params})

// 新增项目
export const addProject = (params = {}) => http.put('project/add', {...params})

// 编辑项目
export const editeProject = (id: string, params = {}) => http.post(`project/edite/${id}`, { ...params })

// 删除项目
export const delProject = (id: string) => http.delete(`project/delect/${id}`)

// 获取项目
export const fetchProject = (params = {}) => http.get('project/get', { params })

// 根据id获取项目
export const fetchProjectId = (id: string, params = {}) => http.get(`project/get/${id}`, { params })

// 添加音乐
export const addMusic = (params = {}) => http.put('music/add', { ...params })

// 获取音乐
export const fetchMusic = (params = {}) => http.get('music/get', { params })

// 删除音乐
export const delMusic = (id: string) => http.delete(`music/delect/${id}`)

// 编辑留音乐
export const editeMusic = (id: string, params = {}) => http.post(`music/edite/${id}`, {...params})

// 上传配置
export const uploadConfig = () => ({
  action: `${API_ROOT}music/upload`,
  headers: {
    'Authorization': getAuthorization()
  }
})
