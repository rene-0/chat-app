import { FindUsersToAddToRoom } from '@/domain/usecases/users/find-users-to-add-to-room'
import { selectedRoomKeyState } from '@/presentation/modules/chat/components/atom'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import './users-to-add-to-room.css'

const userList: FindUsersToAddToRoom.Response = [
  {
    idUser: 1,
    name: 'sasad',
  },
]

type Props = {
  findUsersToAddToRoom: FindUsersToAddToRoom
}

export function UsersToAddToRoom({ findUsersToAddToRoom }: Props): JSX.Element {
  const [usersToBeAdded, setUsersToBeAdded] = useState<FindUsersToAddToRoom.Response>(userList)

  const useSelectedRoomKey = useRecoilValue(selectedRoomKeyState)

  const handleLoadUsersToAddToRoom = async () => {
    try {
      await findUsersToAddToRoom.findUsersToAddToRoom({ roomId: useSelectedRoomKey })
    } catch (error) {
      console.log('error', error)
    }
  }

  useEffect(() => {
    handleLoadUsersToAddToRoom()
  }, [])

  return (
    <div className='user-list'>
      {usersToBeAdded.map((item) => (
        <div
          className='user-item'
          key={item.idUser}
        >
          <div
            className='user-avatar'
            style={{ backgroundImage: 'url("./manga.jpg")' }}
          />
          <div className='user-body'>
            <div className='user-name'>{item.name}</div>
          </div>
        </div>
      ))}
    </div>
  )
}
