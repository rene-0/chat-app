import { MessageModel } from '@/domain/models/message/message-model'
import { SearchAllRoomMessages } from '@/domain/usecases/room-messages/search-all-room-messages'
import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { authenticationState } from '@/presentation/components/atom'
import { chatMessageState, selectedRoomKeyState } from '@/presentation/modules/chat/components/atom'
import { useLoadOldMessages } from '@/presentation/modules/chat/hooks/use-load-old-messages'
import { useEffect } from 'react'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Message } from './components/message/message'

import './messages.css'

type Props = {
  remoteSearchRoomMessages: SearchAllRoomMessages
}

type EditedRoomMessage = {
  idMessage: number
  message: string
}

type DeletedRoomMessage = {
  idMessage: number
  message: string
}

export function Messages({ remoteSearchRoomMessages }: Props) {
  const [useMessages, setMessages] = useRecoilState(chatMessageState)
  const useAuthenticationState = useRecoilValue(authenticationState)
  const useSelectedRoomKey = useRecoilValue(selectedRoomKeyState)

  const loadOldMessages = useLoadOldMessages(remoteSearchRoomMessages)

  const roomMessage = (response: MessageModel) => {
    // TEM QUE USAR COMO CALLBACK, QUALQUER COISA CHAMADA DENTRO DE SOCKET.ON NÃO TEM ACESSO AO VALOR DO ESTADO NO REACT
    setMessages((oldMessages) => [
      ...oldMessages,
      {
        idMessage: response.idMessage,
        message: response.message,
        time: response.time,
        user: response.user,
        sender: response.sender,
        deleted: false,
        edited: false,
      },
    ])
  }

  const handleEditRoomMessage = (response: EditedRoomMessage) => {
    setMessages((oldMessages) => {
      const editedMessageIndex = oldMessages.findIndex((message) => message.idMessage === response.idMessage)
      const newMessages = [...oldMessages]

      const newMessage = { ...newMessages[editedMessageIndex] }
      newMessage.message = response.message
      newMessage.edited = true

      newMessages[editedMessageIndex] = newMessage

      return newMessages
    })
  }

  const handleDeleteRoomMessage = (response: DeletedRoomMessage) => {
    setMessages((oldMessages) => {
      const editedMessageIndex = oldMessages.findIndex((message) => message.idMessage === response.idMessage)
      const newMessages = [...oldMessages]

      const newMessage = { ...newMessages[editedMessageIndex] }
      newMessage.message = response.message
      newMessage.deleted = true

      newMessages[editedMessageIndex] = newMessage

      return newMessages
    })
  }

  useEffect(() => {
    socketClient.on('room/message', roomMessage)
    socketClient.on('room/updateMessage', handleEditRoomMessage)
    socketClient.on('room/deleteMessage', handleDeleteRoomMessage)

    return () => {
      socketClient.off('room/message')
      socketClient.off('room/updateMessage')
      socketClient.off('room/deleteMessage')
    }
  }, [socketClient])

  useEffect(() => {
    loadOldMessages()
  }, [useSelectedRoomKey])

  return (
    <div className='messages'>
      {useMessages.map((message) => (
        <Message
          key={`message-${message.idMessage}`}
          {...message}
          you={message.sender === useAuthenticationState?.email}
        />
      ))}
    </div>
  )
}
