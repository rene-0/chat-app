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

export function Room({ image, name, lastMessage, lastMessageTime, active = false, ...rest }: RoomProps): JSX.Element {
  const parsedDay = lastMessageTime ? dayjs(lastMessageTime).format('DD/MM/YY') : ''

  return (
    <div
      className={`chat-room ${active ? 'active' : ''}`}
      {...rest}
    >
      <div
        className='room-avatar'
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className='room-body'>
        <div className='room-title'>{name}</div>
        <div className='room-last-time'>{parsedDay}</div>
        <div className='room-last-message'>{lastMessage || 'Nenhuma mensagem'}</div>
      </div>
    </div>
  )
}
