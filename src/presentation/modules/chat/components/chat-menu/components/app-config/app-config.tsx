import { AppModal } from '@/presentation/components/app-modal/app-modal'
import { useLogout } from '@/presentation/hooks/use-logout'
import PoweroffOutlined from '@ant-design/icons/lib/icons/PoweroffOutlined'
import { useState } from 'react'
import './app-config.css'

export function AppConfig(): JSX.Element {
  const [logoutModalVisibility, setLogoutModalVisibility] = useState(false)

  const toggleLogoutModal = (): void => {
    setLogoutModalVisibility(!logoutModalVisibility)
  }

  const logout = useLogout()

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
              onClick={logout}
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
