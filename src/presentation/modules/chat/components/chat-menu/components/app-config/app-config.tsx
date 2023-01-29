import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { AppModal } from '@/presentation/components/app-modal/app-modal'
import { authenticationState } from '@/presentation/components/atom'
import PoweroffOutlined from '@ant-design/icons/lib/icons/PoweroffOutlined'
import { useState } from 'react'
import { useResetRecoilState } from 'recoil'
import './app-config.css'

export function AppConfig(): JSX.Element {
  const [logoutModalVisibility, setLogoutModalVisibility] = useState(false)
  const resetAuthentication = useResetRecoilState(authenticationState)

  const toggleLogoutModal = (): void => {
    setLogoutModalVisibility(!logoutModalVisibility)
  }

  const logOut = (): void => {
    socketClient.disconnect()

    resetAuthentication()
    localStorage.removeItem('accessToken')
  }

  return (
    <div className='app-config'>
      <button
        className='app-button app-button-config'
        onClick={toggleLogoutModal}
      >
        <PoweroffOutlined />
      </button>
      <AppModal
        title='Sair'
        visible={logoutModalVisibility}
        onClose={toggleLogoutModal}
      >
        <div>
          <span className='logout-description'>Tem certeza que deseja sair ?</span>
          <div className='button-holder'>
            <button
              className='app-button'
              onClick={toggleLogoutModal}
            >
              Cancelar
            </button>
            <button
              onClick={logOut}
              className='app-button'
            >
              Confirmar
            </button>
          </div>
        </div>
      </AppModal>
    </div>
  )
}
