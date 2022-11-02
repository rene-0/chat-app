import { MessageModel } from '@/domain/models/message/message-model'
import { FindAllRooms } from '@/domain/usecases/rooms/find-all-rooms'
import { atom, selector } from 'recoil'

export const selectedRoomKeyState = atom<number>({
  key: 'selectedRoomKeyState',
  default: 0,
})

export const roomsState = atom<FindAllRooms.Response>({
  key: 'roomsState',
  default: [],
})

export const selectedRoomSelector = selector<FindAllRooms.Response[0] | undefined>({
  key: 'selectedRoomSelector',
  get: ({ get }) => {
    const selectedRoomKey = get(selectedRoomKeyState)
    const rooms = get(roomsState)
    return rooms.find((room) => room.idRoom === selectedRoomKey)
  },
})

export const chatMessageState = atom<MessageModel[]>({
  key: 'chatMessageState',
  default: [],
})

export const editingMessageKeyState = atom<number>({
  key: 'editingMessageKeyState',
  default: 0,
})
