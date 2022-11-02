import EditOutlined from '@ant-design/icons/lib/icons/EditOutlined'
import './message-text.css'

type MessageTextProps = {
  message: string
  edited: boolean
  deleted: boolean
}

export function MessageText({ message, edited, deleted }: MessageTextProps): JSX.Element {
  return (
    <div className='message-body'>
      <div className='message-text'>{message}</div>
      <div className='message-indicator'>{edited ? <EditOutlined /> : <></>}</div>
    </div>
  )
}
