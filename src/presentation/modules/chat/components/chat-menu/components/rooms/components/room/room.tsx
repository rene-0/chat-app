import { Card, Col, Row } from 'antd'
import dayjs from 'dayjs'
import { MouseEventHandler } from 'react'
import './room.css'

type RoomProps = React.DetailedHTMLProps<React.HTMLAttributes<HTMLDivElement>, HTMLDivElement> & {
  image: string
  name: string
  lastMessageTime: string
  lastMessage: string
  active?: boolean
  onClick?: MouseEventHandler<HTMLDivElement> | undefined
}

export function Room({ image, name, lastMessage, lastMessageTime, active = false, onClick }: RoomProps): JSX.Element {
  const parsedDay = lastMessageTime ? dayjs(lastMessageTime).format('DD/MM/YY') : ''

  return (
    <Card
      className={`chat-room ${active ? 'active' : 'chat-room'}`}
      onClick={onClick}
    >
      <Row>
        <Col span='24'>
          <Row gutter={[5, 5]}>
            <Col flex='60px'>
              <img
                src={image}
                alt='avatar'
                className='room-avatar'
              />
            </Col>
            <Col flex='auto'>
              <Row className='room-body'>
                <Col
                  flex='auto'
                  className='room-title'
                >
                  {name}
                </Col>
                <Col
                  flex='60px'
                  className='room-last-time'
                >
                  {parsedDay}
                </Col>
                <Col
                  span='24'
                  className='room-last-message'
                >
                  {lastMessage || 'Nenhuma mensagem'}
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}
