import { FindUsersToAddToRoom } from '@/domain/usecases/users/find-users-to-add-to-room'
import { useRecoilValue } from 'recoil'
import { selectedRoomSelector } from '../../../atom'
import { MessageHeadActions } from './components/message-head-actions/message-head-actions'
import './message-head.css'
import { Badge, Card, Col, Row, Space, Typography } from 'antd'

const { Title } = Typography

type Props = {
  findUsersToAddToRoom: FindUsersToAddToRoom
}

export function MessageHead({ findUsersToAddToRoom }: Props) {
  const selectedRoom = useRecoilValue(selectedRoomSelector)

  return (
    <Card className='chat-message-head'>
      <Row>
        <Col
          flex='60px'
          className='message-head-avatar'
          style={{ backgroundImage: 'url("./manga.jpg")' }}
        />
        <Col flex='auto'>
          <Row>
            <Col
              span={24}
              className='message-container'
            >
              <Row>
                <Col flex='1'>
                  <Title
                    className='chat-head-title'
                    level={5}
                  >
                    {selectedRoom?.name}
                  </Title>
                </Col>
                <Col flex='30px'>
                  <MessageHeadActions findUsersToAddToRoom={findUsersToAddToRoom} />
                </Col>
              </Row>
              <Row>
                <Col className='message-head-status'>
                  <Space size={3}>
                    <Badge status='success' />
                    <span>Online</span>
                  </Space>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  )
}
