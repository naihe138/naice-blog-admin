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
  remove: baseURL + '/article/remove',
  // 添加项目
  addProject: baseURL + '/project/add',
  // 删除项目
  removeProject: baseURL + '/project/remove',
  // 删除项目
  editProject: baseURL + '/project/edit',
  // 根据 id 获取项目
   getProjectId: baseURL + '/project/findone',
  // 获取项目列表
  getProjectList: baseURL + '/project/',
}