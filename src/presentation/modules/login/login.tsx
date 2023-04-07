import { LoginUser } from '@/domain/usecases/authentication/login-user'
import { handlePressEnter } from '@/infra/helpers/handle-press-enter/handle-press-enter'
import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { authenticationState } from '@/presentation/components/atom'
import { Button, Card, Col, Input, Row } from 'antd'
import Typography from 'antd/es/typography'
import { useState } from 'react'
import { useSetRecoilState } from 'recoil'
import './login.css'

const { Title, Text } = Typography

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
      localStorage.setItem('whenExpiresInMilliseconds', String(loginResponse.accessToken.expiresIn * 1000 + Date.now()))
    } catch (error) {
      console.log('Erro!')
    }
  }

  return (
    <div className='login'>
      <Card className='login-container'>
        <Row gutter={[0, 15]}>
          <Col span='24'>
            <Title>Login</Title>
          </Col>
          <Col span='24'>
            <Text>E-mail:</Text>
            <Input
              type='email'
              value={email}
              onChange={(event) => setEmail(event.currentTarget.value)}
            />
          </Col>
          <Col span='24'>
            <Text>Senha:</Text>
            <Input
              type='password'
              value={password}
              onChange={(event) => setPassword(event.currentTarget.value)}
              onKeyDown={(event) => handlePressEnter(event, handleLogin)}
            />
          </Col>
          <Col span='24'>
            <Button
              className='login-button'
              onClick={handleLogin}
            >
              Enviar
            </Button>
          </Col>
        </Row>
      </Card>
    </div>
  )
}
