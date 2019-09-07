import axios from 'axios'
// axios.defaults.withCredentials = true; // 允许携带cookie

export default {
  home({ url }) {
    return axios({
      url
    }).then(res => res.data.datas)
  }
}