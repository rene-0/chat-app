import { RemoteLoginUser } from '@/data/usecases/authentication/remote-login-user'
import { makeAxiosHttpClient } from '../../infra/http/axios/axios-http-client-factory'

export const makeRemoteLoginUser = (): RemoteLoginUser => {
  return new RemoteLoginUser('http://localhost:5050/chat/login', makeAxiosHttpClient())
}
