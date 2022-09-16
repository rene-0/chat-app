import { useState } from 'react'
import './login.css'

export function Login(): JSX.Element {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = (): void => {
    console.log(email)
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
          />
        </div>
        <button onClick={handleLogin}>Enviar</button>
      </div>
    </div>
  )
}
