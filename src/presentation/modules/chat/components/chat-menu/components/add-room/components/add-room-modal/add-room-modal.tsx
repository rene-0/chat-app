import { handlePressEnter } from '@/infra/helpers/handle-press-enter/handle-press-enter'
import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { AppModal } from '@/presentation/components/app-modal/app-modal'
import { useState } from 'react'
import './add-room-modal.css'

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
    <AppModal
      title='Criar sala'
      visible={modalVisibility}
      onClose={handleClose}
    >
      <>
        <input
          className='add-room-input'
          value={roomName}
          onChange={(event) => setRoomName(event.currentTarget.value)}
          onKeyDown={(event) => handlePressEnter(event, handleCreateRoom)}
        />
        <button
          className='add-room-button'
          onClick={handleCreateRoom}
        >
          Criar
        </button>
      </>
    </AppModal>
  )
}
