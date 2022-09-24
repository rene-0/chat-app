import { AxiosHttpClient } from '@/infra/http/axios/axios-http-client'

export const makeAxiosHttpClient = (): AxiosHttpClient => {
  return new AxiosHttpClient()
}
