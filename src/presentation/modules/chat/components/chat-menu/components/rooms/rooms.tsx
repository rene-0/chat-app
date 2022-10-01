import { FindAllRooms } from '@/domain/usecases/rooms/find-all-rooms'
import { useEffect, useState } from 'react'
import { Room } from './components/room/room'

import './rooms.css'

type Props = {
  remoteFindAllRooms: FindAllRooms
}

export function Rooms({ remoteFindAllRooms }: Props): JSX.Element {
  const [rooms, setRooms] = useState<FindAllRooms.Response>([])

  const findAllRooms = async () => {
    const allRooms = await remoteFindAllRooms.findAllRooms({})
    setRooms(allRooms)
  }

  useEffect(() => {
    findAllRooms()
  }, [])

  return (
    <div className='chat-menu-rooms'>
      {rooms.map((room) => (
        <Room
          key={room.idRoom}
          image={'./manga.jpg'}
          name={room.name}
          lastMessage={room.lastMessage}
          lastMessageTime={room.lastMessageTime}
        />
      ))}
    </div>
  )
}
