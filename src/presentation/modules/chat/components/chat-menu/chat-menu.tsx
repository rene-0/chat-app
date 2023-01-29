import { Rooms } from './components/rooms/rooms'
import { RoomSearch } from './components/search/room-search'

import './chat-menu.css'
import { FindAllRooms } from '@/domain/usecases/rooms/find-all-rooms'
import { AddRoom } from './components/add-room/add-room'
import { AppConfig } from './components/app-config/app-config'

type Props = {
  remoteFindAllRooms: FindAllRooms
}

export function ChatMenu({ remoteFindAllRooms }: Props): JSX.Element {
  return (
    <div className='chat-menu'>
      <RoomSearch />
      <Rooms remoteFindAllRooms={remoteFindAllRooms} />
      <div className='inferior-menu'>
        <AddRoom />
        <AppConfig />
      </div>
    </div>
  )
}
