import { Rooms } from './components/rooms/rooms'
import { RoomSearch } from './components/search/room-search'

import './chat-menu.css'
import { FindAllRooms } from '@/domain/usecases/rooms/find-all-rooms'
import { AddRoom } from './components/add-room/add-room'

type Props = {
  remoteFindAllRooms: FindAllRooms
}

export function ChatMenu({ remoteFindAllRooms }: Props): JSX.Element {
  return (
    <div className='chat-menu'>
      <RoomSearch />
      <Rooms remoteFindAllRooms={remoteFindAllRooms} />
      <AddRoom />
    </div>
  )
}
