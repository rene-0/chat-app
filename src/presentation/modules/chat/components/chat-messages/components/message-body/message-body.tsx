import { SearchAllRoomMessages } from '@/domain/usecases/room-messages/search-all-room-messages'
import { MessageInput } from './components/message-input/message-input'
import { Messages } from './components/messages/messages'
import './message-body.css'

type Props = {
  remoteSearchRoomMessages: SearchAllRoomMessages
}

export function MessageBody({ remoteSearchRoomMessages }: Props) {
  return (
    <div className='chat-message-body'>
      <Messages remoteSearchRoomMessages={remoteSearchRoomMessages} />
      <MessageInput />
    </div>
  )
}
