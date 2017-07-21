/**
 * @file
 * @author 何文林
 * @date 2017/7/10
 */
import * as types from './action-type.js';
import axios from '../assets/js/axios'
import requestURL from '../assets/js/requestUrl'
// 添加文章
export function addArticle (prams, success) {
  return dispatch => {
    axios.post(requestURL.add, prams)
         .then((data) => {
           success && success(data)
         })
         .catch(err => {
           console.log('前端接口--服务器出错');
         })
  };
}

export function removeArticle (prams, success) {
  console.log(prams)
  return dispatch => {
    axios.post(requestURL.remove, prams)
         .then((data) => {
           success && success(data)
         })
         .catch(err => {
           console.log('前端接口--服务器出错');
         })
  };
}

// 获取文章列表
export function getArticle(prams, success) {
  return dispatch => {
    axios.get(requestURL.getList, prams)
         .then((data) => {
           dispatch({
             type: types.GETARTICLE,
             data
           })
           success && success(data)
         })
         .catch(err => {
           console.log(err)
           alert('前端接口--服务器出错');
         })
  };
}
// 根据id获取文章
export function getArticleById(id, success) {
  return dispatch => {
    axios.get(requestURL.getList + '/' + id)
         .then((data) => {
           success && success(data)
         })
         .catch(err => {
           console.log(err)
           alert('前端接口--服务器出错');
         })
  };
}

export function editArticleById(prams, success) {
  return dispatch => {
     axios.post(requestURL.edit, prams)
         .then((data) => {
           success && success(data)
         })
         .catch(err => {
           alert('前端接口--服务器出错');
         })
  };
}