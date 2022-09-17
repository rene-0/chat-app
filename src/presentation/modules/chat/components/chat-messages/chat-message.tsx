import './chat-message.css'
import { MessageBody } from './components/message-body/message-body'
import { MessageHead } from './components/message-head/message-head'

export function ChatMessage(): JSX.Element {
  return (
    <div className='chat-message'>
      <MessageHead />
      <MessageBody />
    </div>
  )
}
