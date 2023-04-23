import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { editingMessageKeyState, selectedRoomKeyState } from '@/presentation/modules/chat/components/atom'
import { useRecoilValue, useSetRecoilState } from 'recoil'
import { Button, Dropdown, MenuProps, Modal } from 'antd'
import { ExclamationCircleFilled, InfoOutlined } from '@ant-design/icons'

const { confirm } = Modal

type MessageActionsProps = {
  idMessage: number
  deleted: boolean
}

export function MessageActions({ idMessage, deleted }: MessageActionsProps): JSX.Element {
  const useSelectedRoomKey = useRecoilValue(selectedRoomKeyState)

  const setEditingMessageKey = useSetRecoilState(editingMessageKeyState)

  const handleEdit = (): void => {
    setEditingMessageKey(idMessage)
  }

  const handleDelete = () => {
    socketClient.emit('deleteRoomMessage', {
      idRoom: useSelectedRoomKey,
      idMessage,
    })
  }

  const showConfirm = () => {
    if (deleted) {
      return
    }
    confirm({
      title: 'Tem certeza que deseja remover essa mensagem ?',
      icon: <ExclamationCircleFilled />,
      width: 500,
      onOk: handleDelete,
    })
  }

  const items: MenuProps['items'] = [
    {
      key: '1',
      label: (
        <Button
          size='small'
          type='ghost'
          onClick={handleEdit}
        >
          Editar
        </Button>
      ),
    },
    {
      key: '2',
      disabled: deleted,
      label: (
        <Button
          size='small'
          type='ghost'
          onClick={showConfirm}
          disabled={deleted}
        >
          Deletar
        </Button>
      ),
    },
  ]

  return (
    <div className='message-action'>
      <Dropdown
        trigger={['click']}
        menu={{ items }}
      >
        <Button
          size='small'
          type='ghost'
          icon={<InfoOutlined />}
        />
      </Dropdown>
    </div>
  )
}
