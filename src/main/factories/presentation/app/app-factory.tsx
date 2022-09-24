import { makeRemoteLoginUser } from '@/main/factories/usecases/authentication/remote-login-user-factory'
import App from '@/presentation/layout/main/App'

export const MakeApp = (): JSX.Element => {
  return <App remoteLogin={makeRemoteLoginUser()} />
}
