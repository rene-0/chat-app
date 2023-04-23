import { useState } from 'react'
import './add-room.css'
import { AddRoomModal } from './components/add-room-modal/add-room-modal'
import { Button } from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export function AddRoom() {
  const [modalVisibility, setModalVisibility] = useState(false)

  const onClose = () => {
    setModalVisibility(false)
  }

  return (
    <div className='add-room-container'>
      <AddRoomModal
        modalVisibility={modalVisibility}
        onClose={onClose}
      />
      <Button
        icon={<PlusOutlined />}
        className='add-room-container-button'
        onClick={() => setModalVisibility(true)}
      />
    </div>
  )
}
