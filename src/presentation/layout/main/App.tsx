import { Login } from '@/presentation/modules/login/login'
import './App.css'
import { LoginUser } from '@/domain/usecases/authentication/login-user'
import { useRecoilValue } from 'recoil'
import { authenticationState } from '@/presentation/components/atom'
import { MakeChat } from '@/main/factories/presentation/module/chat/chat-factory'
import { ConfigProvider, Layout, theme } from 'antd'

type AppProps = {
  remoteLogin: LoginUser
}

function App({ remoteLogin }: AppProps): JSX.Element {
  const useAuthentication = useRecoilValue(authenticationState)

  return (
    <ConfigProvider
      theme={{
        algorithm: theme.darkAlgorithm,
      }}
    >
      <Layout className='app'>
        {!useAuthentication?.accessToken && <Login remoteLogin={remoteLogin} />}
        {useAuthentication?.accessToken && <MakeChat />}
      </Layout>
    </ConfigProvider>
  )
}

export default App
