import { MessageInput } from './components/message-input/message-input'
import { Messages } from './components/messages/messages'
import './message-body.css'

export function MessageBody() {
  return (
    <div className='chat-message-body'>
      <Messages />
      <MessageInput />
    </div>
  )
}
