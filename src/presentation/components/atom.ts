import { LoginUser } from '@/domain/usecases/authentication/login-user'
import { atom } from 'recoil'
import { recoilPersist } from 'recoil-persist'

const { persistAtom } = recoilPersist()

export const authenticationState = atom<LoginUser.Response | null>({
  key: 'authenticationState',
  default: null,
  effects_UNSTABLE: [persistAtom],
})
