import CloseOutlined from '@ant-design/icons/lib/icons/CloseOutlined'
import { ReactElement } from 'react'
import './app-modal.css'

type Props = {
  title: string
  visible: boolean
  onClose: () => void
  children: ReactElement
}

export function AppModal({ title, visible, onClose, children }: Props) {
  return (
    <div className={`app-modal ${visible ? 'visible' : ''}`}>
      <div className='app-modal-container'>
        <div className='app-modal-head'>
          <h5 className='app-modal-title'>{title}</h5>
          <button
            className='app-modal-head-close-button'
            onClick={onClose}
          >
            <CloseOutlined />
          </button>
        </div>
        <div className='app-modal-body'>{visible ? children : <></>}</div>
      </div>
    </div>
  )
}
