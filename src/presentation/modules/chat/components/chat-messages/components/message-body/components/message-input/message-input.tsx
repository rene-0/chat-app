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

  const handleEnter = async (event: React.KeyboardEvent<HTMLInputElement>, callback: (event: React.KeyboardEvent<HTMLInputElement>) => Promise<void> | void) => {
    if (event.key === 'Enter') {
      await callback(event)
    }
  }

  return (
    <div className='message-input'>
      <input
        type='text'
        value={message}
        onChange={(event) => {
          setMessage(event.currentTarget.value)
        }}
        onKeyDown={(event) => handleEnter(event, sendMessage)}
      />
      <button onClick={sendMessage}>
        <SendOutlined />
      </button>
    </div>
  )
}
