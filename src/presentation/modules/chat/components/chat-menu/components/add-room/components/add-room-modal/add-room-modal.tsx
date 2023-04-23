import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { useState } from 'react'
import { Input, Modal } from 'antd'
import FormItem from 'antd/es/form/FormItem'

type Props = {
  modalVisibility: boolean
  onClose: () => void
}

export function AddRoomModal({ modalVisibility, onClose }: Props) {
  const [roomName, setRoomName] = useState('')

  const handleCreateRoom = () => {
    socketClient.emit('createRoom', {
      roomName,
    })
    handleClose()
  }

  const handleClose = () => {
    setRoomName('')
    onClose()
  }

  return (
    <Modal
      title='Criar nova sala'
      open={modalVisibility}
      onOk={handleCreateRoom}
      onCancel={onClose}
      okText='Criar'
      cancelText='Cancelar'
    >
      <FormItem label='Nome da sala'>
        <Input
          className='add-room-input'
          value={roomName}
          onChange={(event) => setRoomName(event.currentTarget.value)}
          onPressEnter={handleCreateRoom}
        />
      </FormItem>
    </Modal>
  )
}
