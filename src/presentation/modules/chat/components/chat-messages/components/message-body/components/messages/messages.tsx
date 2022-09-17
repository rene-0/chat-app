import { Message } from './components/message/message'

import './messages.css'

const message =
  'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Atque obcaecati quae qui aut commodi, eos expedita amet excepturi, eligendi repellat esse ipsum enim sunt ut. Commodi quaerat fuga nesciunt nulla.'

const messages = [
  {
    idMessage: 1,
    user: 'Usuário 1',
    time: '22:11',
    message: message,
    you: false,
  },
  {
    idMessage: 2,
    user: 'Usuário 2',
    time: '22:32',
    message: message,
    you: true,
  },
  {
    idMessage: 3,
    user: 'Usuário 1',
    time: '22:32',
    message: message,
    you: false,
  },
  {
    idMessage: 4,
    user: 'Usuário 2',
    time: '22:32',
    message: message,
    you: true,
  },
  {
    idMessage: 5,
    user: 'Usuário 2',
    time: '22:32',
    message: message,
    you: true,
  },
  {
    idMessage: 6,
    user: 'Usuário 1',
    time: '22:32',
    message: message,
    you: false,
  },
  {
    idMessage: 7,
    user: 'Usuário 1',
    time: '22:32',
    message: message,
    you: false,
  },
]

export function Messages() {
  return (
    <div className='messages'>
      {messages.map((message) => (
        <Message key={`message-${message.idMessage}`} {...message} />
      ))}
    </div>
  )
}
