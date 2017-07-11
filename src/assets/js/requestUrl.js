/**
 * @file
 * @author 何文林
 * @date 2017/7/7
 */

const baseURL = 'http://127.0.0.1:8902/api'
export default {
  // 登录
  login: baseURL + '/user/login',
  // 添加文章
  add: baseURL + '/article/add',
  // 获取文章列表
  getList: baseURL + '/article',
  // 编辑文章
  edit: baseURL + '/article/edit'
}