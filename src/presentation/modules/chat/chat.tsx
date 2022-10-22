import { ChatMenu } from './components/chat-menu/chat-menu'

import './chat.css'
import { ChatMessage } from './components/chat-messages/chat-message'
import { FindAllRooms } from '@/domain/usecases/rooms/find-all-rooms'
import { SearchAllRoomMessages } from '@/domain/usecases/room-messages/search-all-room-messages'
import { useRecoilValue } from 'recoil'
import { selectedRoomKeyState } from './components/atom'

type Props = {
  remoteFindAllRooms: FindAllRooms
  remoteSearchRoomMessages: SearchAllRoomMessages
}

export function Chat({ remoteFindAllRooms, remoteSearchRoomMessages }: Props): JSX.Element {
  const useSelectedRoomKey = useRecoilValue(selectedRoomKeyState)

  return (
    <div className='chat'>
      <ChatMenu remoteFindAllRooms={remoteFindAllRooms} />
      {useSelectedRoomKey !== 0 ? <ChatMessage remoteSearchRoomMessages={remoteSearchRoomMessages} /> : <></>}
    </div>
  )
}
