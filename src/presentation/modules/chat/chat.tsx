import { ChatMenu } from './components/chat-menu/chat-menu'

import './chat.css'
import { ChatMessage } from './components/chat-messages/chat-message'

export function Chat(): JSX.Element {
  return (
    <div className='chat'>
      <ChatMenu />
      <ChatMessage />
    </div>
  )
}
