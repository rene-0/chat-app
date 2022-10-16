import { RemoteSearchAllRoomMessages } from '@/data/usecases/room-messages/remote-search-all-room-messages'
import { SearchAllRoomMessages } from '@/domain/usecases/room-messages/search-all-room-messages'
import { makeAxiosHttpClient } from '../../infra/http/axios/axios-http-client-factory'

export const makeSearchAllRoomMessages = (): SearchAllRoomMessages => {
  return new RemoteSearchAllRoomMessages('http://192.168.0.132:5050/chat/roomsMessage/searchAll', makeAxiosHttpClient())
}
