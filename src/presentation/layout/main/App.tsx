import { Chat } from '@/presentation/modules/chat/chat'
import { Login } from '@/presentation/modules/login/login'
import './App.css'

function App(): JSX.Element {
  return (
    <div className='app'>
      {/* <Login /> */}
      <Chat />
    </div>
  )
}

export default App
