import './message.css'

export type MessageProps = {
  user: string
  time: string
  message: string
  you: boolean
}

export function Message({ user, time, message, you }: MessageProps) {
  return (
    <div className={`message ${you ? 'you' : ''}`}>
      <div className='message-head'>
        <div className='message-user'>{user}</div>
        <div className='message-time'>{time}</div>
      </div>
      <div className='message-body'>{message}</div>
    </div>
  )
}
