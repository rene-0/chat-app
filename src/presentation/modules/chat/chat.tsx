import { ChatMenu } from './components/chat-menu/chat-menu'

import './chat.css'
import { ChatMessage } from './components/chat-messages/chat-message'
import { FindAllRooms } from '@/domain/usecases/rooms/find-all-rooms'

type Props = {
  remoteFindAllRooms: FindAllRooms
}

export function Chat({ remoteFindAllRooms }: Props): JSX.Element {
  return (
    <div className='chat'>
      <ChatMenu remoteFindAllRooms={remoteFindAllRooms} />
      <ChatMessage />
    </div>
  )
}
