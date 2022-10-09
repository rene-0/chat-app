import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { SendOutlined } from '@ant-design/icons'
import { useState } from 'react'

import './message-input.css'

export function MessageInput() {
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    socketClient.emit('roomMessage', {
      chatRoom: 1,
      message: message,
    })
    setMessage('')
  }

  return (
    <div className='message-input'>
      <input
        type='text'
        value={message}
        onChange={(event) => {
          setMessage(event.currentTarget.value)
        }}
      />
      <button onClick={sendMessage}>
        <SendOutlined />
      </button>
    </div>
  )
}
