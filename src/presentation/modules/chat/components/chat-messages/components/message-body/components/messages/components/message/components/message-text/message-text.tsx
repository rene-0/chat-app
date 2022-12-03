import { MessageIndicatorFactory } from './components/message-indicator-factory'
import './message-text.css'

type MessageTextProps = {
  message: string
  edited: boolean
  deleted: boolean
}

export function MessageText({ message, edited, deleted }: MessageTextProps): JSX.Element {
  return (
    <div className='message-body'>
      <div className={`message-text ${deleted ? 'deleted' : ''}`}>{message}</div>
      <div className='message-indicator'>
        <MessageIndicatorFactory
          edited={edited}
          deleted={deleted}
        />
      </div>
    </div>
  )
}
