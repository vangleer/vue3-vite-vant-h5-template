import { defineStore } from 'pinia'
import { changeLocale } from '/@/plugins/i18n'
import { getConfig, setConfig } from '/@/config'
const config = getConfig()
type AppStateType = {
  token?: string
  title?: string
  theme?: string
  locale?: string
}
export const useAppStore = defineStore({
  id: 't-app',
  state: (): AppStateType => ({
    title: '',
    token: '',
    theme: config.theme as string,
    locale: config.locale as string
  }),
  actions: {
    setState(state: AppStateType) {
      const keys: any = Object.keys(state)
      keys.forEach((key: keyof AppStateType) => {
        this[key] = state[key]
      })
    },
    changeTheme(theme?: string) {
      if (theme) {
        this.theme = theme
      } else {
        this.theme = this.theme === 'light' ? 'dark' : 'light'
      }
      setConfig({ theme: this.theme })
    },
    changeLocale(locale?: 'zh' | 'en') {
      const key = changeLocale(locale)
      this.locale = key
      setConfig({ locale: key })
    }
  }
})
