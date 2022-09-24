import { AxiosRequestConfig, AxiosResponse } from 'axios'
export type a = AxiosRequestConfig['data']
export interface AxiosClient {
  request: <T = any>(request: AxiosRequestConfig) => Promise<AxiosResponse<T>>
}
