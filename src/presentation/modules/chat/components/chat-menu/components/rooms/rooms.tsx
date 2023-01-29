import { RoomModel } from '@/domain/models/room/room-model'
import { FindAllRooms } from '@/domain/usecases/rooms/find-all-rooms'
import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { useEffect } from 'react'
import { useRecoilState } from 'recoil'
import { roomsState, selectedRoomKeyState } from '../../../atom'
import { Room } from './components/room/room'

import './rooms.css'

type Props = {
  remoteFindAllRooms: FindAllRooms
}

export function Rooms({ remoteFindAllRooms }: Props): JSX.Element {
  const [useSelectedRoom, setSelectedRoom] = useRecoilState(selectedRoomKeyState)
  const [useRooms, setRooms] = useRecoilState(roomsState)

  const findAllRooms = async () => {
    const allRooms = (await remoteFindAllRooms.findAllRooms({})) || []
    setRooms(allRooms)
  }

  const handleSelectRoom = (idRoom: number): void => {
    setSelectedRoom(idRoom)
  }

  useEffect(() => {
    findAllRooms()
  }, [])

  useEffect(() => {
    socketClient.on('room/new', (response: RoomModel) => {
      setRooms((oldRooms) => {
        const newRooms = [...oldRooms]
        newRooms.push(response)

        return newRooms
      })
    })

    return () => {
      socketClient.off('room/new')
    }
  }, [socketClient])

  return (
    <div className='chat-menu-rooms'>
      {useRooms.map((room) => (
        <Room
          onClick={() => handleSelectRoom(room.idRoom)}
          active={room.idRoom === useSelectedRoom}
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
