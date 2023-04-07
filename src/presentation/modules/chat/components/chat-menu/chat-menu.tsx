import { Rooms } from './components/rooms/rooms'
import { RoomSearch } from './components/search/room-search'

import './chat-menu.css'
import { FindAllRooms } from '@/domain/usecases/rooms/find-all-rooms'
import { AddRoom } from './components/add-room/add-room'
import { AppConfig } from './components/app-config/app-config'
import { Col, Row } from 'antd'

type Props = {
  remoteFindAllRooms: FindAllRooms
}

export function ChatMenu({ remoteFindAllRooms }: Props): JSX.Element {
  return (
    <div className='chat-menu'>
      <Row className='room-search-container'>
        <Col span='24'>
          <RoomSearch />
        </Col>
      </Row>
      <Row>
        <Col span='24'>
          <Rooms remoteFindAllRooms={remoteFindAllRooms} />
        </Col>
      </Row>
      <Row className='app-config'>
        <Col span='24'>
          <AddRoom />
          <AppConfig />
        </Col>
      </Row>
    </div>
  )
}
