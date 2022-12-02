import { RemoteFindUsersToAddToRoom } from '@/data/usecases/users/remote-find-users-to-add-to-room'
import { makeApiUrl } from '@/infra/http/make-api-url/make-api-url'
import { makeAxiosHttpClient } from '../../infra/http/axios/axios-http-client-factory'

export const makeRemoteFindUsersToAddToRoom = (): RemoteFindUsersToAddToRoom => {
  return new RemoteFindUsersToAddToRoom(makeApiUrl('users/findUsersToAddToRoom'), makeAxiosHttpClient())
}
