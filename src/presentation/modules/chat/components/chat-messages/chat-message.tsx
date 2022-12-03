import { SearchAllRoomMessages } from '@/domain/usecases/room-messages/search-all-room-messages'
import { FindUsersToAddToRoom } from '@/domain/usecases/users/find-users-to-add-to-room'
import './chat-message.css'
import { MessageBody } from './components/message-body/message-body'
import { MessageHead } from './components/message-head/message-head'

type Props = {
  remoteSearchRoomMessages: SearchAllRoomMessages
  findUsersToAddToRoom: FindUsersToAddToRoom
}

export function ChatMessage({ remoteSearchRoomMessages, findUsersToAddToRoom }: Props): JSX.Element {
  return (
    <div className='chat-message'>
      <MessageHead findUsersToAddToRoom={findUsersToAddToRoom} />
      <MessageBody remoteSearchRoomMessages={remoteSearchRoomMessages} />
    </div>
  )
}
