import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { selectedRoomKeyState } from '@/presentation/modules/chat/components/atom'
import { SendOutlined } from '@ant-design/icons'
import { useState } from 'react'
import { useRecoilValue } from 'recoil'

import './message-input.css'
import { Button, Input } from 'antd'

export function MessageInput() {
  const useSelectedRoomKey = useRecoilValue(selectedRoomKeyState)
  const [message, setMessage] = useState('')

  const sendMessage = () => {
    socketClient.emit('roomMessage', {
      chatRoom: useSelectedRoomKey,
      message: message,
    })
    setMessage('')
  }

  return (
    <div className='message-input'>
      <Input
        type='text'
        value={message}
        onChange={(event) => {
          setMessage(event.currentTarget.value)
        }}
        onPressEnter={() => sendMessage()}
      />
      <Button
        icon={<SendOutlined />}
        onClick={sendMessage}
      />
    </div>
  )
}
