import { FindUsersToAddToRoom } from '@/domain/usecases/users/find-users-to-add-to-room'
import { AppModal } from '@/presentation/components/app-modal/app-modal'
import EllipsisOutlined from '@ant-design/icons/lib/icons/EllipsisOutlined'
import { useState } from 'react'
import { UsersToAddToRoom } from './components/users-to-add-to-room/users-to-add-to-room'
import './message-head-actions.css'

type Props = {
  findUsersToAddToRoom: FindUsersToAddToRoom
}

export function MessageHeadActions({ findUsersToAddToRoom }: Props): JSX.Element {
  const [dropdownActive, setDropdownActive] = useState(false)
  const [isModalActive, setIsModalActive] = useState(false)

  const handleCloseModal = (): void => {
    setIsModalActive(false)
  }

  return (
    <>
      <div className={`message-head-actions ${dropdownActive ? 'active' : ''}`}>
        <EllipsisOutlined
          rotate={90}
          className='message-head-actions-icon'
          onClick={() => setDropdownActive((oldDropdownActive) => !oldDropdownActive)}
        />
        <div className='message-head-actions-dropdown'>
          <div
            className='message-head-actions-dropdown-item'
            onClick={() => setIsModalActive(true)}
          >
            Adicionar usuário
          </div>
          <div className='message-head-actions-dropdown-item'>Deletar sala</div>
        </div>
      </div>
      <AppModal
        title='Adicionar usuário'
        visible={isModalActive}
        onClose={() => handleCloseModal()}
      >
        <UsersToAddToRoom findUsersToAddToRoom={findUsersToAddToRoom} handleCloseModal={handleCloseModal} />
      </AppModal>
    </>
  )
}
