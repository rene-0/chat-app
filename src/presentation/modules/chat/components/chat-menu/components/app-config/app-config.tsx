// import { AppModal } from '@/presentation/components/app-modal/app-modal'
import { useLogout } from '@/presentation/hooks/use-logout'
import PoweroffOutlined from '@ant-design/icons/lib/icons/PoweroffOutlined'
import { useState } from 'react'
import './app-config.css'
import { Button, Modal } from 'antd'

export function AppConfig(): JSX.Element {
  const [logoutModalVisibility, setLogoutModalVisibility] = useState(false)

  const toggleLogoutModal = (): void => {
    setLogoutModalVisibility(!logoutModalVisibility)
  }

  const logout = useLogout()

  return (
    <div className='app-config'>
      <Button onClick={toggleLogoutModal}>
        <PoweroffOutlined />
      </Button>
      <Modal
        open={logoutModalVisibility}
        onCancel={toggleLogoutModal}
        onOk={logout}
        cancelText='Cancelar'
        okText='Sair'
        title='Tem certeza que deseja sair ?'
      />
    </div>
  )
}
