import { Chat } from '@/presentation/modules/chat/chat'
import { Login } from '@/presentation/modules/login/login'
import './App.css'
import { io } from 'socket.io-client'
import { LoginUser } from '@/domain/usecases/authentication/login-user'
import { useRecoilValue } from 'recoil'
import { authenticationState } from '@/presentation/components/atom'

const socket = io('http://localhost:5050')

type AppProps = {
  remoteLogin: LoginUser
}

function App({ remoteLogin }: AppProps): JSX.Element {
  const useAuthentication = useRecoilValue(authenticationState)

  return (
    <div className='app'>
      {!useAuthentication?.accessToken && <Login remoteLogin={remoteLogin} />}
      {useAuthentication?.accessToken && <Chat />}
    </div>
  )
}

export default App
