import { SearchAllRoomMessages } from '@/domain/usecases/room-messages/search-all-room-messages'
import './chat-message.css'
import { MessageBody } from './components/message-body/message-body'
import { MessageHead } from './components/message-head/message-head'

type Props = {
  remoteSearchRoomMessages: SearchAllRoomMessages
}

export function ChatMessage({ remoteSearchRoomMessages }: Props): JSX.Element {
  return (
    <div className='chat-message'>
      <MessageHead />
      <MessageBody remoteSearchRoomMessages={remoteSearchRoomMessages} />
    </div>
  )
}
