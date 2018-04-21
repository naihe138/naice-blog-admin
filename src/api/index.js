
import ax from './axios'

// 登录
export const login =  (params = {}) => ax.post('user/login', { ...params })

// 获取文章列表
export const getArts =  (params = {}) => ax.get('article/get', { params })
// 添加文章
export const addArt =  (params = {}) => ax.put('article/add', { ...params })

// 修改文章
export const editeArt =  (id, params = {}) => ax.post(`article/edite/${id}`, { ...params })

// 删除文章
export const delArt = (id) => ax.delete(`article/delect/${id}`)

export const getArtId = (id, params = {}) => ax.get(`article/get/${id}`, { params })

// 获取所有的标签
export const fetchTag =  (params = {}) => ax.get('tag/get', { params })

// 编辑标签
export const editeTag =  (params = {}) => ax.post('tag/edit', { ...params })

// 编辑标签
export const addTag =  (params = {}) => ax.put('tag/add', { ...params })

// 删除标签
export const delTag =  (id) => ax.delete(`tag/delect/${id}`)

// 获取留言墙
export const fetchHero =  (params = {}) => ax.get('hero/get', { params })

// 删除留言墙
export const delHero =  (id) => ax.delete(`hero/delect/${id}`)

// 编辑留言墙
export const editeHero =  (id, params = {}) => ax.post(`hero/edite/${id}`, {...params})

// 获取文章评论
export const fetchComment =  (params = {}) => ax.get('comment/get', { params })

// 删除评论
export const delComment =  (id) => ax.delete(`comment/delect/${id}`)

// 编辑评论
export const editeComment =  (id, params = {}) => ax.post(`comment/edite/${id}`, {...params})

// 新增项目
export const addProject =  (params = {}) => ax.put('project/add', {...params})

// 编辑项目
export const editeProject =  (id, params = {}) => ax.post(`project/edite/${id}`, { ...params })

// 删除项目
export const delProject =  (id) => ax.delete(`project/delect/${id}`)

// 获取项目
export const fetchProject =  (params = {}) => ax.get('project/get', { params })

// 根据id获取项目
export const fetchProjectId =  (id, params = {}) => ax.get(`project/get/${id}`, { params })
