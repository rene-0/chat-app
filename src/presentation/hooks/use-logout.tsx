import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { useResetRecoilState } from 'recoil'
import { authenticationState } from '../components/atom'

export function useLogout() {
  const resetAuthentication = useResetRecoilState(authenticationState)

  return () => {
    localStorage.clear()
    resetAuthentication()
    socketClient.disconnect()
  }
}
