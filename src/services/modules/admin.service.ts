import ApiService from '../api.service'

const BaseUrl = 'admins'

export function getLists(params?: object) {
  return ApiService.get(`${BaseUrl}`, params).then((resp) => resp.data)
}

export function getAdminByID(id: string | number, params?: object) {
  return ApiService.get(`${BaseUrl}/${id}`, params).then((resp) => resp.data)
}

export function createAdmin(params?: object) {
  return ApiService.post(`${BaseUrl}`, params).then((resp) => resp.data)
}

export function editAdmin(id: string | number, params?: object) {
  return ApiService.put(`${BaseUrl}/${id}`, params).then((resp) => resp.data)
}

export function deleteAdmin(id: string | number, params?: object) {
  return ApiService.delete(`${BaseUrl}/${id}`, params).then((resp) => resp)
}
