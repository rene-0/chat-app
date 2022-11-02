import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { editingMessageKeyState, selectedRoomKeyState } from '@/presentation/modules/chat/components/atom'
import CloseOutlined from '@ant-design/icons/lib/icons/CloseOutlined'
import SendOutlined from '@ant-design/icons/lib/icons/SendOutlined'
import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import './edit-message.css'

type EditMessageProps = {
  idMessage: number
}

type UpdateRoomMessageRequest = {
  idRoom: number
  idMessage: number
  message: string
}

export function EditMessage({ idMessage }: EditMessageProps): JSX.Element {
  const useSelectedRoomKey = useRecoilValue(selectedRoomKeyState)
  const setEditingMessageKey = useSetRecoilState(editingMessageKeyState)

  const [editedMessage, setEditedMessage] = useState('')

  const updateMessage = () => {
    const updateRoomMessageRequest: UpdateRoomMessageRequest = {
      idRoom: useSelectedRoomKey,
      message: editedMessage,
      idMessage,
    }

    socketClient.emit('updateRoomMessage', updateRoomMessageRequest)
    setEditingMessageKey(0)
  }

  const closeEditing = () => {
    setEditingMessageKey(0)
  }

  return (
    <div className='message-body'>
      <button onClick={closeEditing}>
        <CloseOutlined />
      </button>
      <input
        type='text'
        value={editedMessage}
        onChange={(event) => setEditedMessage(event.currentTarget.value)}
      />
      <button onClick={updateMessage}>
        <SendOutlined />
      </button>
    </div>
  )
}
