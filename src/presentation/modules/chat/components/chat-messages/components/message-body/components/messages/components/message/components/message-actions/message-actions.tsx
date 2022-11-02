import { editingMessageKeyState } from '@/presentation/modules/chat/components/atom'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import './message-actions.css'

type MessageActionsProps = {
  idMessage: number
}

export function MessageActions({ idMessage }: MessageActionsProps): JSX.Element {
  const [isDropdownVisible, setIsDropDownVisible] = useState(false)

  const setEditingMessageKey = useSetRecoilState(editingMessageKeyState)

  const handleEdit = (): void => {
    setIsDropDownVisible(false)
    setEditingMessageKey(idMessage)
  }

  const handleDelete = () => {
    setIsDropDownVisible(false)
  }

  return (
    <div className='message-action'>
      <div
        onClick={() => setIsDropDownVisible(!isDropdownVisible)}
        className='message-action-icon'
      >
        i
      </div>
      <div className={`message-actions-dropdown ${isDropdownVisible ? 'active' : ''}`}>
        <div
          onClick={handleEdit}
          className='message-actions-dropdown-item'
        >
          Editar
        </div>
        <div
          onClick={handleDelete}
          className='message-actions-dropdown-item'
        >
          Deletar
        </div>
      </div>
    </div>
  )
}
