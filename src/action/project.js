/**
 * @file
 * @author 何文林
 * @date 2017/7/10
 */
import * as types from './action-type.js';
import axios from '../assets/js/axios'
import requestURL from '../assets/js/requestUrl'
// 添加项目
export function addProject (prams, success) {
  return dispatch => {
    axios.post(requestURL.addProject, prams)
         .then((data) => {
           success && success(data)
         })
         .catch(err => {
           console.log(err);
         })
  };
}

export function removeProject(prams, success) {
  return dispatch => {
    axios.post(requestURL.removeProject, prams)
         .then((data) => {
           success && success(data)
         })
         .catch(err => {
           console.log(err);
         })
  };
}

// 获取文章列表
export function getProjects(prams, success) {
  return dispatch => {
    axios.get(requestURL.getProjectList, prams)
         .then((data) => {
           dispatch({
             type: types.GETPROJECT,
             data
           })
           success && success(data)
         })
         .catch(err => {
           console.log(err)
         })
  };
}
// 根据id获取文章
export function getProjectById(prams, success) {
  return dispatch => {
    axios.post(requestURL.getProjectId, prams)
         .then((data) => {
           success && success(data)
         })
         .catch(err => {
           console.log(err)
         })
  };
}

export function editProjectById(prams, success) {
  return dispatch => {
     axios.post(requestURL.editProject, prams)
         .then((data) => {
           success && success(data)
         })
         .catch(err => {
           alert('前端接口--服务器出错');
         })
  };
}
