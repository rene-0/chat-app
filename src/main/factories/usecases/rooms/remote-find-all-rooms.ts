import { RemoteFindAllRooms } from '@/data/usecases/rooms/remote-find-all-rooms'
import { makeAxiosHttpClient } from '../../infra/http/axios/axios-http-client-factory'

export const makeRemoteFindAllRooms = (): RemoteFindAllRooms => {
  return new RemoteFindAllRooms('http://localhost:5050/chat/rooms/findAll', makeAxiosHttpClient())
}
