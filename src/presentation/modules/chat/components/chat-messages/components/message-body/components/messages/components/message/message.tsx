import { editingMessageKeyState } from '@/presentation/modules/chat/components/atom'
import dayjs from 'dayjs'
import { useRecoilValue } from 'recoil'
import { EditMessage } from './components/edit-message/edit-message'
import { MessageActions } from './components/message-actions/message-actions'
import { MessageText } from './components/message-text/message-text'
import './message.css'

export type MessageProps = {
  idMessage: number
  user: string
  time: string
  message: string
  you: boolean
  edited: boolean
  deleted: boolean
}

export function Message({ idMessage, user, time, message, you, edited, deleted }: MessageProps) {
  const useEditingMessageKey = useRecoilValue(editingMessageKeyState)

  const parsedTime = dayjs(time).format('DD/MM/YYYY HH:mm')

  return (
    <div className={`message ${you ? 'you' : ''}`}>
      <div className='message-head'>
        <div className='message-user'>{user}</div>
        <div className='message-time'>{parsedTime}</div>
        {you ? <MessageActions idMessage={idMessage} /> : <></>}
      </div>
      {useEditingMessageKey === idMessage ? (
        <EditMessage idMessage={idMessage} />
      ) : (
        <MessageText
          message={message}
          edited={edited}
          deleted={deleted}
        />
      )}
    </div>
  )
}
