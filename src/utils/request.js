import axios from 'axios'

const http = axios.create({
  baseURL: process.env.VUE_APP_BASE_API
  // withCredentials: true
})

http.interceptors.request.use(
  config => {
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

http.interceptors.response.use(
  response => {
    const res = response.data
    return res
  },
  error => {
    console.log('err' + error)
    return Promise.reject(error)
  }
)

export default http
