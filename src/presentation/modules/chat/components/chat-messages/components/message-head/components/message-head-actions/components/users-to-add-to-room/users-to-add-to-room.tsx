import { FindUsersToAddToRoom } from '@/domain/usecases/users/find-users-to-add-to-room'
import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { selectedRoomKeyState } from '@/presentation/modules/chat/components/atom'
import LoadingOutlined from '@ant-design/icons/lib/icons/LoadingOutlined'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import './users-to-add-to-room.css'

type Props = {
  findUsersToAddToRoom: FindUsersToAddToRoom
  handleCloseModal: () => void
}

export function UsersToAddToRoom({ findUsersToAddToRoom, handleCloseModal }: Props): JSX.Element {
  const [usersToBeAdded, setUsersToBeAdded] = useState<FindUsersToAddToRoom.Response>([])
  const [selectedUsers, setSelectedUsers] = useState<number[]>([])
  const [isLoading, setIsLoading] = useState(false)

  const useSelectedRoomKey = useRecoilValue(selectedRoomKeyState)

  const handleLoadUsersToAddToRoom = async () => {
    try {
      setIsLoading(true)
      const usersToAdd = (await findUsersToAddToRoom.findUsersToAddToRoom({ roomId: useSelectedRoomKey })) || []
      setUsersToBeAdded(usersToAdd)
    } catch (error) {
      console.log('error', error)
    } finally {
      setIsLoading(false)
    }
  }

  const toggleSelectUser = (userId: number): void => {
    let newSelectedUsers = [...selectedUsers]
    if (selectedUsers.findIndex((user) => user === userId) >= 0) {
      newSelectedUsers = selectedUsers.filter((user) => user !== userId)
    } else {
      newSelectedUsers.push(userId)
    }
    setSelectedUsers(newSelectedUsers)
  }

  const handleAddUser = (): void => {
    socketClient.emit('addUserToRoom', {
      usersToBeAdded: selectedUsers,
      roomToAddUser: useSelectedRoomKey,
    })
    handleCloseModal()
  }

  useEffect(() => {
    handleLoadUsersToAddToRoom()
  }, [])

  // transformar os itens em um componente separado e user React.memo
  return (
    <div className='user-to-add-to-room'>
      {isLoading ? (
        <LoadingOutlined />
      ) : (
        <div className='user-list'>
          {usersToBeAdded.map((item) => (
            <div
              className={`user-item ${selectedUsers.findIndex((user) => user === item.idUser) >= 0 ? 'active' : ''}`}
              key={item.idUser}
              onClick={() => toggleSelectUser(item.idUser)}
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
      )}

      <div className='footer'>
        <button
          disabled={selectedUsers.length <= 0}
          className='app-button'
          onClick={() => handleAddUser()}
        >
          Adicionar
        </button>
      </div>
    </div>
  )
}
