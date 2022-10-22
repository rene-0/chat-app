import EllipsisOutlined from '@ant-design/icons/lib/icons/EllipsisOutlined'
import { useRecoilValue } from 'recoil'
import { selectedRoomSelector } from '../../../atom'
import './message-head.css'

export function MessageHead() {
  const selectedRoom = useRecoilValue(selectedRoomSelector)

  return (
    <div className='chat-message-head'>
      <div
        className='message-head-avatar'
        style={{ backgroundImage: 'url("./manga.jpg")' }}
      />
      <div className='message-container'>
        <div className='message-head-name'>{selectedRoom?.name}</div>
        <div className='message-head-action'>
          <EllipsisOutlined rotate={90} />
        </div>
        <div className='message-head-status'>
          <div className='status'></div>
          <span>Online</span>
        </div>
      </div>
    </div>
  )
}
