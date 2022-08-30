import axiosInstance from '@/plugins/axios';
import { formatJsonToUrlParams, instanceObject } from '@/shared/utils/format';

const ApiService = {
  get<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.get(url, { params: data });
  },

  post<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.post(url, data);
  },

  put<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.put(url, data);
  },

  delete<T = any>(url: string, data?: object): Promise<T> {
    return axiosInstance.delete(url, data);
  },

  upload: (url: string, file: FormData | File) =>
    axiosInstance.post(url, file, {
      headers: { 'Content-Type': 'multipart/form-data' },
    }),

  download: (url: string, data: instanceObject) => {
    window.location.href = `${import.meta.env.VITE_APP_ROOT_API}/${url}?${formatJsonToUrlParams(
      data,
    )}`;
  },
};

export default ApiService;
