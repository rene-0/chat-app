import { RoomMessageModel } from '@/domain/models/room-messages/room-message-model'

export interface SearchAllRoomMessages {
  searchAllRoomMessages(request: SearchAllRoomMessages.Request): Promise<SearchAllRoomMessages.Response>
}

export namespace SearchAllRoomMessages {
  export type Request = {
    idRoom: number
  }

  export type Response = RoomMessageModel[]
}
