import { RemoteLoginUser } from '@/data/usecases/authentication/remote-login-user'
import { makeApiUrl } from '@/infra/http/make-api-url/make-api-url'
import { makeAxiosHttpClient } from '../../infra/http/axios/axios-http-client-factory'

export const makeRemoteLoginUser = (): RemoteLoginUser => {
  return new RemoteLoginUser(makeApiUrl('chat/login'), makeAxiosHttpClient())
}
