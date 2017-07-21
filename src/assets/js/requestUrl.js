/**
 * @file
 * @author 何文林
 * @date 2017/7/7
 */

const baseURL = 'http://127.0.0.1:3030/api/backstage'
// const baseURL = 'http://blog.naice.me/api/backstage'
export default {
  // 登录
  login: baseURL + '/user/login',
  // 添加文章
  add: baseURL + '/article/add',
  // 获取文章列表
  getList: baseURL + '/article',
  // 编辑文章
  edit: baseURL + '/article/edit',
  // 删除文章
  remove: baseURL + '/article/remove'
}