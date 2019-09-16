import axios from 'axios'
// axios.defaults.withCredentials = true; // 允许携带cookie

export default {
  get({ url }) {
    return axios({
      url
    }).then(res => res.data.datas)
  },

  post({ url, data }) {
    return axios({
      method: 'post',
      url,
      data
    })
  }
}