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
    idRoom: 5,
    image: './manga.jpg',
    name: 'Sala 5',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 6,
    image: './manga.jpg',
    name: 'Sala 6',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 7,
    image: './manga.jpg',
    name: 'Sala 7',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 8,
    image: './manga.jpg',
    name: 'Sala 8',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 9,
    image: './manga.jpg',
    name: 'Sala 9',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 10,
    image: './manga.jpg',
    name: 'Sala 10',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 11,
    image: './manga.jpg',
    name: 'Sala 11',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 12,
    image: './manga.jpg',
    name: 'Sala 12',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 13,
    image: './manga.jpg',
    name: 'Sala 13',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 14,
    image: './manga.jpg',
    name: 'Sala 14',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 15,
    image: './manga.jpg',
    name: 'Sala 15',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 16,
    image: './manga.jpg',
    name: 'Sala 16',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 17,
    image: './manga.jpg',
    name: 'Sala 17',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 18,
    image: './manga.jpg',
    name: 'Sala 18',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 19,
    image: './manga.jpg',
    name: 'Sala 19',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 20,
    image: './manga.jpg',
    name: 'Sala 20',
    lastMessageTime: '09:00',
    lastMessage: 'Bom dia a todos!',
  },
  {
    idRoom: 21,
    image: './manga.jpg',
    name: 'Sala 21',
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
