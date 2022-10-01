import { makeRemoteFindAllRooms } from '@/main/factories/usecases/rooms/remote-find-all-rooms'
import { Chat } from '@/presentation/modules/chat/chat'

export const MakeChat = (): JSX.Element => {
  return <Chat remoteFindAllRooms={makeRemoteFindAllRooms()} />
}
