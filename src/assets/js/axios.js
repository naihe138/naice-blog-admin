/**
 * @file
 * @author 何文林
 * @date 2017/7/7
 */
import axios from 'axios'

export default {
  post(url, data) {
    return axios({
      method: 'post',
      url,
      data,
      timeout: 1000,
      withCredentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest',
        'Access-Control-Allow-Credentials': 'true',
        'Content-Type': 'application/json; charset=UTF-8',
      }
    }).then(data => {
      if(data.data.code == -500){
        alert(data.data.message)
        return;
      }
      return data.data
    }).catch(err => err)
  },
  get(url, params) {
    return axios({
      method: 'get',
      url,
      params: params || {},
      timeout: 1000,
      withCredentials: true,
      headers: {
        'Access-Control-Allow-Credentials': 'true',
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(data => data.data).catch(err => err)
  }
}
