import ApiService from '../api.service'

const BaseUrl = 'auth'

export function login(params?: object) {
  return ApiService.post(`${BaseUrl}/login`, params).then((resp) => resp.data)
}

export function logout(params?: object) {
  return ApiService.post(`${BaseUrl}/logout`, params).then((resp) => resp.data)
}

export function profile(params?: object) {
  return ApiService.get(`${BaseUrl}/profile`, params).then((resp) => resp.data)
}
