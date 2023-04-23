import { FindUsersToAddToRoom } from '@/domain/usecases/users/find-users-to-add-to-room'
import EllipsisOutlined from '@ant-design/icons/lib/icons/EllipsisOutlined'
import { useState } from 'react'
import { UsersToAddToRoom } from './components/users-to-add-to-room/users-to-add-to-room'
import './message-head-actions.css'
import { Button, Dropdown, MenuProps } from 'antd'

type Props = {
  findUsersToAddToRoom: FindUsersToAddToRoom
}

export function MessageHeadActions({ findUsersToAddToRoom }: Props): JSX.Element {
  const [isModalActive, setIsModalActive] = useState(false)

  const handleCloseModal = (): void => {
    setIsModalActive(false)
  }

  const menuItems: MenuProps['items'] = [
    {
      key: '1',
      label: 'Adicionar usuário',
      onClick: () => setIsModalActive(true),
    },
    {
      key: '2',
      label: 'Remover sala',
    },
  ]

  return (
    <>
      <Dropdown
        menu={{ items: menuItems }}
        trigger={['click']}
      >
        <Button
          type='ghost'
          icon={<EllipsisOutlined rotate={90} />}
        />
      </Dropdown>

      <UsersToAddToRoom
        isModalActive={isModalActive}
        findUsersToAddToRoom={findUsersToAddToRoom}
        handleCloseModal={handleCloseModal}
      />
    </>
  )
}
