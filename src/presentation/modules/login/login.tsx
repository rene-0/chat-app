import { LoginUser } from '@/domain/usecases/authentication/login-user'
import { handlePressEnter } from '@/infra/helpers/handle-press-enter/handle-press-enter'
import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { authenticationState } from '@/presentation/components/atom'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import './login.css'

type LoginProps = {
  remoteLogin: LoginUser
}

export function Login({ remoteLogin }: LoginProps): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const setAuthentication = useSetRecoilState(authenticationState)

  const handleLogin = async (): Promise<void> => {
    try {
      const loginResponse = await remoteLogin.login({
        email,
        password,
      })

      socketClient.auth = { accessToken: loginResponse.accessToken }
      socketClient.connect()

      setAuthentication(loginResponse)
      localStorage.setItem('accessToken', loginResponse.accessToken.token)
    } catch (error) {
      console.log('Erro!')
    }
  }

  return (
    <div className='login'>
      <div className='login-container'>
        <h2>Login</h2>
        <div className='login-item'>
          <span>E-mail:</span>
          <input
            type='mail'
            value={email}
            onChange={(event) => setEmail(event.currentTarget.value)}
          />
        </div>
        <div className='login-item'>
          <span>Senha:</span>
          <input
            type='password'
            value={password}
            onChange={(event) => setPassword(event.currentTarget.value)}
            onKeyDown={(event) => handlePressEnter(event, handleLogin)}
          />
        </div>
        <button onClick={handleLogin}>Enviar</button>
      </div>
    </div>
  )
}
