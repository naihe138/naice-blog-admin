import { http } from '../../utils'

// 新增标签
export const addTag = (params = {}) => http.put('tag/add', { ...params })
