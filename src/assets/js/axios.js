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
        'Content-Type': 'application/json; charset=UTF-8',
      }
    }).then(data => data.data).catch(err =>
      console.log(err)
    )
  },
  get(url, params) {
    return axios({
      method: 'get',
      url,
      params: params || {},
      timeout: 1000,
      withCredentials: true,
      headers: {
        'X-Requested-With': 'XMLHttpRequest'
      }
    }).then(data => data.data).catch(err => err)
  }
}
