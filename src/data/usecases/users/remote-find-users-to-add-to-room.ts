import { AxiosClient } from '@/data/protocols/http/axios-client'
import { FindUsersToAddToRoom } from '@/domain/usecases/users/find-users-to-add-to-room'

export class RemoteFindUsersToAddToRoom implements FindUsersToAddToRoom {
  constructor(private readonly url: string, private readonly httpClient: AxiosClient) {}
  async findUsersToAddToRoom(request: FindUsersToAddToRoom.Request): Promise<FindUsersToAddToRoom.Response> {
    const httpResponse = await this.httpClient.request({
      method: 'GET',
      url: `${this.url}/${request.roomId}`,
      data: request,
    })

    return httpResponse.data
  }
}
