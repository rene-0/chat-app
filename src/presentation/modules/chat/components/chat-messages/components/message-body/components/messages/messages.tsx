import { SearchAllRoomMessages } from '@/domain/usecases/room-messages/search-all-room-messages'
import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { authenticationState } from '@/presentation/components/atom'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'
import { Message } from './components/message/message'

import './messages.css'

type MessageModel = {
  idMessage: number
  user: string
  time: string
  message: string
  sender: string
}

type Response = MessageModel

type Props = {
  remoteSearchRoomMessages: SearchAllRoomMessages
}

export function Messages({ remoteSearchRoomMessages }: Props) {
  const [messages, setMessages] = useState<MessageModel[]>([])
  const useAuthenticationState = useRecoilValue(authenticationState)

  const loadOldMessages = async () => {
    const allMessages = await remoteSearchRoomMessages.searchAllRoomMessages({ idRoom: 1 })
    const newMessages = allMessages.map(
      ({ idRoomMessage, message, time, user, sender }): MessageModel => ({
        idMessage: idRoomMessage,
        message,
        time,
        user,
        sender,
      })
    )
    setMessages(newMessages)
  }

  const roomMessage = (response: Response) => {
    // TEM QUE USAR COMO CALLBACK, QUALQUER COISA CHAMADA DENTRO DE SOCKET.ON NÃO TEM ACESSO AO VALOR DO ESTADO NO REACT
    setMessages((oldMessages) => [
      ...oldMessages,
      {
        idMessage: response.idMessage,
        message: response.message,
        time: response.time,
        user: response.user,
        sender: response.sender,
      },
    ])
  }

  useEffect(() => {
    socketClient.on('room/message', roomMessage)

    socketClient.onAny((event, ...args) => {
      console.log('onAny', event, args)
    })

    return () => {
      socketClient.off('room/message')
      socketClient.offAny()
    }
  }, [socketClient])

  useEffect(() => {
    loadOldMessages()
  }, [])

  return (
    <div className='messages'>
      {messages.map((message) => (
        <Message
          key={`message-${message.idMessage}`}
          {...message}
          you={message.sender === useAuthenticationState?.email}
        />
      ))}
    </div>
  )
}
