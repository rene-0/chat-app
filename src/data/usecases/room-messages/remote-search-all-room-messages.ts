import { AxiosClient } from '@/data/protocols/http/axios-client'
import { SearchAllRoomMessages } from '@/domain/usecases/room-messages/search-all-room-messages'

export class RemoteSearchAllRoomMessages implements SearchAllRoomMessages {
  constructor(private readonly url: string, private readonly httpClient: AxiosClient) {}
  async searchAllRoomMessages(request: SearchAllRoomMessages.Request): Promise<SearchAllRoomMessages.Response> {
    const httpResponse = await this.httpClient.request({
      method: 'GET',
      url: `${this.url}/${request.idRoom}`,
    })

    return httpResponse.data
  }
}
