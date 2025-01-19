import axios from 'axios'
// ... existing code ...
const SERVER_URL = process.env.NODE_ENV === 'production'
  ? 'https://clone-twitter-448213.el.r.appspot.com/'
  : 'http://localhost:3000/'

const api = axios.create({
  baseURL: SERVER_URL, // SERVER_URL을 사용하여 기본 URL 설정
  timeout: 5000, // 타임아웃 설정
})

// 인증이 필요한 API 인스턴스 (피드 조회용)
const authApi = axios.create({
  baseURL: SERVER_URL, // SERVER_URL을 사용하여 기본 URL 설정
  timeout: 5000, // 타임아웃 설정
})

// authApi 인스턴스에 헤더 추가
authApi.interceptors.request.use(config => {
  const token = localStorage.getItem('access_token') // localStorage에서 토큰 가져오기
  if (token) {
    config.headers['Authorization'] = `Bearer ${token}` // 헤더에 토큰 추가
  }
  return config
}, error => {
  return Promise.reject(error)
})

export { api, authApi }