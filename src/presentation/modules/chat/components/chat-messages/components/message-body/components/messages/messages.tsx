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
