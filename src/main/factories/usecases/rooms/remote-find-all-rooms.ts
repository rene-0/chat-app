import { RemoteFindAllRooms } from '@/data/usecases/rooms/remote-find-all-rooms'
import { makeApiUrl } from '@/infra/http/make-api-url/make-api-url'
import { makeAxiosHttpClient } from '../../infra/http/axios/axios-http-client-factory'

export const makeRemoteFindAllRooms = (): RemoteFindAllRooms => {
  return new RemoteFindAllRooms(makeApiUrl('chat/rooms/findAll'), makeAxiosHttpClient())
}
