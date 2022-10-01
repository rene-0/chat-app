import { LoginUser } from '@/domain/usecases/authentication/login-user'

export type RecoilPersist = {
  authenticationState: LoginUser.Response
}
