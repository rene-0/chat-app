import { MessageModel } from '@/domain/models/message/message-model'
import { SearchAllRoomMessages } from '@/domain/usecases/room-messages/search-all-room-messages'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { chatMessageState, selectedRoomKeyState } from '../components/atom'

type ResultType = () => Promise<void>

export function useLoadOldMessages(remoteSearchRoomMessages: SearchAllRoomMessages): ResultType {
  const setMessages = useSetRecoilState(chatMessageState)
  const selectedRoomKey = useRecoilValue(selectedRoomKeyState)

  return async () => {
    const allMessages = (await remoteSearchRoomMessages.searchAllRoomMessages({ idRoom: selectedRoomKey })) || []
    const newMessages = allMessages.map(
      ({ idRoomMessage, message, time, user, sender, deleted, edited }): MessageModel => ({
        idMessage: idRoomMessage,
        message,
        time,
        user,
        sender,
        deleted,
        edited,
      })
    )
    setMessages(newMessages)
  }
}
