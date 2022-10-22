import { MessageModel } from '../message/message-model'

export type RoomMessageModel = Omit<MessageModel, 'idMessage'> & {
  idRoomMessage: number
}
