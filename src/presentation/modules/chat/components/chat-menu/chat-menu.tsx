import { Rooms } from './components/rooms/rooms'
import { RoomSearch } from './components/search/room-search'

import './chat-menu.css'

export function ChatMenu(): JSX.Element {
  return (
    <div className='chat-menu'>
      <RoomSearch />
      <Rooms />
    </div>
  )
}
