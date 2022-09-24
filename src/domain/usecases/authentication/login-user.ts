import { AccessTokenModel } from '@/domain/models/authentication/login-user-model'

export interface LoginUser {
  login: (request: LoginUser.Request) => Promise<LoginUser.Response>
}

export namespace LoginUser {
  export type Request = {
    email: string
    password: string
  }

  export type Response = {
    email: string
    name: string
    accessToken: AccessTokenModel
  }
}
