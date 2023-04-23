import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { editingMessageKeyState, selectedRoomKeyState } from '@/presentation/modules/chat/components/atom'
import CloseOutlined from '@ant-design/icons/lib/icons/CloseOutlined'
import SendOutlined from '@ant-design/icons/lib/icons/SendOutlined'
import { useState } from 'react'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Button, Col, Input, Row } from 'antd'

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
      <Row gutter={[10, 10]}>
        <Col flex='20px'>
          <Button
            onClick={closeEditing}
            icon={<CloseOutlined />}
          />
        </Col>
        <Col flex='1'>
          <Input
            type='text'
            value={editedMessage}
            onChange={(event) => setEditedMessage(event.currentTarget.value)}
            onPressEnter={updateMessage}
          />
        </Col>
        <Col flex='20px'>
          <Button
            icon={<SendOutlined />}
            onClick={updateMessage}
          />
        </Col>
      </Row>
    </div>
  )
}
