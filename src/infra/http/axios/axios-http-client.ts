import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosClient } from '../../../data/protocols/http/axios-client'

export class AxiosHttpClient implements AxiosClient {
  async request<T>(request: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    const accessToken = localStorage.getItem('accessToken')

    const response = await axios({
      method: request.method,
      url: request.url,
      data: request.data,
      headers: {
        ...(request.headers || {
          'Content-Type': 'application/json',
          ...(accessToken ? { 'x-access-token': accessToken } : {}),
        }),
      },
    })

    return response
  }
}
