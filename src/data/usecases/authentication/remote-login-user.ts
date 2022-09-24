import { AxiosClient } from '@/data/protocols/http/axios-client'
import { LoginUser } from '@/domain/usecases/authentication/login-user'

export class RemoteLoginUser implements LoginUser {
  constructor(
    private readonly url: string,
    private readonly httpClient: AxiosClient
  ) {}
  async login(request: LoginUser.Request): Promise<LoginUser.Response> {
    const httpResponse = await this.httpClient.request({
      method: 'POST',
      url: this.url,
      data: request,
    })

    return httpResponse.data
  }
}
