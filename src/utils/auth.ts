import Cookies from 'js-cookie'
import { useAppStore } from '/@/store'
export const TOKEN_KEY = 'token'

export function getToken() {
  return Cookies.get(TOKEN_KEY)
}

export function setToken(token: string) {
  Cookies.set(TOKEN_KEY, token)
  useAppStore().setState({ token })
}

// 删除token
export function removeToken() {
  Cookies.remove(TOKEN_KEY)
}
