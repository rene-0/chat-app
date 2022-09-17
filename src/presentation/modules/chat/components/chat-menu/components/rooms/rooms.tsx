import { Room } from './components/room/room'

import './rooms.css'

const mockRooms = [
  {
    idRoom: 1,
    image: './manga.jpg',
    name: 'Sala 1',
    lastMessageTime: '22:11',
    lastMessage: 'Mensagem de teste 123....',
  },
  {
    idRoom: 2,
    image: './manga.jpg',
    name: 'Sala 2',
    lastMessageTime: '12:52',
    lastMessage: 'Oi?',
  },
  {
    idRoom: 3,
    image: './manga.jpg',
    name: 'Sala 3',
    lastMessageTime: '22:11',
    lastMessage: 'Vai ter churrasco hoje?',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 4,
    image: './manga.jpg',
    name: 'Sala 4',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
]

export function Rooms(): JSX.Element {
  return (
    <div className='chat-menu-rooms'>
      {mockRooms.map((room) => (
        <Room key={room.idRoom} {...room} />
      ))}
    </div>
  )
}
