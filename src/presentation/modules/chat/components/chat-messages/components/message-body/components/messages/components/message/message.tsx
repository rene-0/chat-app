import { editingMessageKeyState } from '@/presentation/modules/chat/components/atom'
import dayjs from 'dayjs'
import { useRecoilValue } from 'recoil'
import { EditMessage } from './components/edit-message/edit-message'
import { MessageActions } from './components/message-actions/message-actions'
import { MessageText } from './components/message-text/message-text'
import './message.css'
import { Card, Col, Row } from 'antd'

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
    <Card className={`message ${you ? 'you' : ''}`}>
      <Row>
        <Col flex='auto'>{user}</Col>
        <Col flex='110px'>{parsedTime}</Col>
        <Col flex='20px'>
          {you ? (
            <MessageActions
              idMessage={idMessage}
              deleted={deleted}
            />
          ) : (
            <></>
          )}
        </Col>
      </Row>
      {useEditingMessageKey === idMessage ? (
        <EditMessage idMessage={idMessage} />
      ) : (
        <MessageText
          message={message}
          edited={edited}
          deleted={deleted}
        />
      )}
    </Card>
  )
}
