import { RecoilPersist } from '@/domain/models/recoil-persist/recoil-presist'
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AxiosClient } from '../../../data/protocols/http/axios-client'

export class AxiosHttpClient implements AxiosClient {
  async request<T>(request: AxiosRequestConfig): Promise<AxiosResponse<T>> {
    let token = ''
    const recoilPersist = localStorage.getItem('recoil-persist')
    if (recoilPersist) {
      const {
        authenticationState: { accessToken },
      } = JSON.parse(recoilPersist || '{}') as RecoilPersist
      token = accessToken.token
    }

    const response = await axios({
      method: request.method,
      url: request.url,
      data: request.data,
      headers: {
        ...(request.headers || {
          'Content-Type': 'application/json',
          ...(token ? { 'x-access-token': token } : {}),
        }),
      },
    })

    return response
  }
}
