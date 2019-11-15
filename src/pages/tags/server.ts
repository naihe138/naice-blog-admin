import { http } from '../../utils'

// 获取所有的标签
export const fetchTag = () => http.get('tag/get')

// 编辑标签
export const editeTag = (params = {}) => http.post('tag/edit', { ...params })

// 删除标签
export const delTag = (id: string) => http.delete(`tag/delect/${id}`)
