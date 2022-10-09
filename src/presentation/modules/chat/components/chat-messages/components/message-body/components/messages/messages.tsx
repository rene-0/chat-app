import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { useEffect, useState } from 'react'
import { Message } from './components/message/message'

import './messages.css'

type MessageModel = {
  idMessage: number
  user: string
  time: string
  message: string
  you: boolean
}

type Response = MessageModel

export function Messages() {
  const [messages, setMessages] = useState<MessageModel[]>([])

  const roomMessage = (response: Response) => {
    // TEM QUE USAR COMO CALLBACK, QUALQUER COISA CHAMADA DENTRO DE SOCKET.ON NÃO TEM ACESSO AO VALOR DO ESTADO NO REACT
    setMessages((oldMessages) => [
      ...oldMessages,
      {
        idMessage: response.idMessage,
        message: response.message,
        time: response.time,
        user: response.user,
        you: response.you,
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

  return (
    <div className='messages'>
      {messages.map((message) => (
        <Message
          key={`message-${message.idMessage}`}
          {...message}
        />
      ))}
    </div>
  )
}
