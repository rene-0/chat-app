import { RoomModel } from '@/domain/models/room/room-model'

export interface FindAllRooms {
  findAllRooms(request: FindAllRooms.Request): Promise<FindAllRooms.Response>
}

export namespace FindAllRooms {
  export type Request = {
    name?: string
  }

  export type Response = RoomModel[]
}
