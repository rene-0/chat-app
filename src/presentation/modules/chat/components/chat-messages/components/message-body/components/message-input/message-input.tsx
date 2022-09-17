import { SendOutlined } from '@ant-design/icons'

import './message-input.css'

export function MessageInput() {
  return (
    <div className='message-input'>
      <input type='text' />
      <button>
        <SendOutlined />
      </button>
    </div>
  )
}
