import { FindUsersToAddToRoom } from '@/domain/usecases/users/find-users-to-add-to-room'
import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { selectedRoomKeyState } from '@/presentation/modules/chat/components/atom'
import LoadingOutlined from '@ant-design/icons/lib/icons/LoadingOutlined'
import { useEffect, useState } from 'react'
import { useRecoilValue } from 'recoil'

import './users-to-add-to-room.css'
import { Col, Modal, Row } from 'antd'

type Props = {
  findUsersToAddToRoom: FindUsersToAddToRoom
  handleCloseModal: () => void
  isModalActive: boolean
}

export function UsersToAddToRoom({ findUsersToAddToRoom, handleCloseModal, isModalActive }: Props): JSX.Element {
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
    <Modal
      title='Adicionar usuário'
      open={isModalActive}
      onCancel={() => handleCloseModal()}
      onOk={handleAddUser}
      okText='Adicionar'
      cancelText='Cancelar'
    >
      <div className='user-to-add-to-room'>
        {isLoading ? (
          <LoadingOutlined />
        ) : (
          <Row>
            {usersToBeAdded.map((item) => (
              <Col
                className={`user-item ${selectedUsers.findIndex((user) => user === item.idUser) >= 0 ? 'active' : ''}`}
                span={24}
                key={item.idUser}
                onClick={() => toggleSelectUser(item.idUser)}
              >
                <Row gutter={[5, 5]}>
                  <Col flex='50px'>
                    <div
                      className='user-avatar'
                      style={{ backgroundImage: 'url("./manga.jpg")' }}
                    />
                  </Col>
                  <Col flex='1'>
                    <div className='user-body'>
                      <div className='user-name'>{item.name}</div>
                    </div>
                  </Col>
                </Row>
              </Col>
            ))}
          </Row>
        )}
      </div>
    </Modal>
  )
}
