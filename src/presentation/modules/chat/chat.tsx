import { ChatMenu } from './components/chat-menu/chat-menu'

import './chat.css'
import { ChatMessage } from './components/chat-messages/chat-message'
import { FindAllRooms } from '@/domain/usecases/rooms/find-all-rooms'
import { SearchAllRoomMessages } from '@/domain/usecases/room-messages/search-all-room-messages'
import { useRecoilValue } from 'recoil'
import { selectedRoomKeyState } from './components/atom'
import { useEffect } from 'react'
import { socketClient } from '@/infra/web-socket/socket-io/socket-io-client'
import { FindUsersToAddToRoom } from '@/domain/usecases/users/find-users-to-add-to-room'
import { authenticationState } from '@/presentation/components/atom'
import { useLogout } from '@/presentation/hooks/use-logout'

type Props = {
  remoteFindAllRooms: FindAllRooms
  remoteSearchRoomMessages: SearchAllRoomMessages
  findUsersToAddToRoom: FindUsersToAddToRoom
}

export function Chat({ remoteFindAllRooms, remoteSearchRoomMessages, findUsersToAddToRoom }: Props): JSX.Element {
  const useSelectedRoomKey = useRecoilValue(selectedRoomKeyState)

  const useAuthentication = useRecoilValue(authenticationState)

  const logout = useLogout()

  useEffect(() => {
    socketClient.onAny((event, ...args) => {
      console.log('onAny', event, args)
    })

    return () => {
      socketClient.offAny()
    }
  }, [socketClient])

  useEffect(() => {
    let timer: string | number | NodeJS.Timeout | null | undefined = null
    const unixWhenExpires = Number(localStorage.getItem('whenExpiresInMilliseconds'))
    const millisecondsToExpireToken = Math.ceil((Date.now() - unixWhenExpires) * -1)
    if (useAuthentication) {
      timer = setTimeout(logout, millisecondsToExpireToken)
    }
    return () => {
      if (timer) {
        clearTimeout(timer)
      }
    }
  }, [])

  return (
    <div className='chat'>
      <ChatMenu remoteFindAllRooms={remoteFindAllRooms} />
      {useSelectedRoomKey !== 0 ? (
        <ChatMessage
          findUsersToAddToRoom={findUsersToAddToRoom}
          remoteSearchRoomMessages={remoteSearchRoomMessages}
        />
      ) : (
        <></>
      )}
    </div>
  )
}
