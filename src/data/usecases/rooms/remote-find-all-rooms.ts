import { AxiosClient } from '@/data/protocols/http/axios-client'
import { FindAllRooms } from '@/domain/usecases/rooms/find-all-rooms'

export class RemoteFindAllRooms implements FindAllRooms {
  constructor(private readonly url: string, private readonly httpClient: AxiosClient) {}
  async findAllRooms(request: FindAllRooms.Request): Promise<FindAllRooms.Response> {
    const httpResponse = await this.httpClient.request({
      method: 'POST',
      url: this.url,
      data: request,
    })

    return httpResponse.data
  }
}
