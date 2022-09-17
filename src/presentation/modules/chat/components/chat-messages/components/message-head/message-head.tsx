import EllipsisOutlined from '@ant-design/icons/lib/icons/EllipsisOutlined'
import './message-head.css'

export function MessageHead() {
  return (
    <div className='chat-message-head'>
      <div
        className='message-head-avatar'
        style={{ backgroundImage: 'url("./manga.jpg")' }}
      />
      <div className='message-container'>
        <div className='message-head-name'>Sala 1</div>
        <div className='message-head-action'>
          <EllipsisOutlined rotate={90} />
        </div>
        <div className='message-head-status'>
          <div className='status'></div>
          <span>Online</span>
        </div>
      </div>
    </div>
  )
}
