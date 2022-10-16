import { RemoteSearchAllRoomMessages } from '@/data/usecases/room-messages/remote-search-all-room-messages'
import { SearchAllRoomMessages } from '@/domain/usecases/room-messages/search-all-room-messages'
import { makeApiUrl } from '@/infra/http/make-api-url/make-api-url'
import { makeAxiosHttpClient } from '../../infra/http/axios/axios-http-client-factory'

export const makeSearchAllRoomMessages = (): SearchAllRoomMessages => {
  return new RemoteSearchAllRoomMessages(makeApiUrl('chat/roomsMessage/searchAll'), makeAxiosHttpClient())
}
