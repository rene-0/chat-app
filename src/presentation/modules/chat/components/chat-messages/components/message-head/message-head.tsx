import { FindUsersToAddToRoom } from '@/domain/usecases/users/find-users-to-add-to-room'
import { useRecoilValue } from 'recoil'
import { selectedRoomSelector } from '../../../atom'
import { MessageHeadActions } from './components/message-head-actions/message-head-actions'
import './message-head.css'

type Props = {
  findUsersToAddToRoom: FindUsersToAddToRoom
}

export function MessageHead({ findUsersToAddToRoom }: Props) {
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
          <MessageHeadActions findUsersToAddToRoom={findUsersToAddToRoom} />
        </div>
        <div className='message-head-status'>
          <div className='status'></div>
          <span>Online</span>
        </div>
      </div>
    </div>
  )
}
