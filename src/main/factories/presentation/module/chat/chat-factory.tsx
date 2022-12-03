import { makeSearchAllRoomMessages } from '@/main/factories/usecases/room-messages/remote-search-all-room-messages-factory'
import { makeRemoteFindAllRooms } from '@/main/factories/usecases/rooms/remote-find-all-rooms'
import { makeRemoteFindUsersToAddToRoom } from '@/main/factories/usecases/users/make-remote-find-users-to-add-to-room'
import { Chat } from '@/presentation/modules/chat/chat'

export const MakeChat = (): JSX.Element => {
  return (
    <Chat
      remoteFindAllRooms={makeRemoteFindAllRooms()}
      remoteSearchRoomMessages={makeSearchAllRoomMessages()}
      findUsersToAddToRoom={makeRemoteFindUsersToAddToRoom()}
    />
  )
}
