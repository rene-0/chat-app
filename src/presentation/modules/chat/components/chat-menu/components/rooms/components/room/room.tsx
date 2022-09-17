import './room.css'

type RoomProps = {
  image: string
  name: string
  lastMessageTime: string
  lastMessage: string
}

export function Room({
  image,
  name,
  lastMessage,
  lastMessageTime,
}: RoomProps): JSX.Element {
  return (
    <div className='chat-room'>
      <div
        className='room-avatar'
        style={{ backgroundImage: `url("${image}")` }}
      />
      <div className='room-body'>
        <div className='room-title'>{name}</div>
        <div className='room-last-time'>{lastMessageTime}</div>
        <div className='room-last-message'>{lastMessage}</div>
      </div>
    </div>
  )
}
