import { defineStore } from 'pinia'
export const useAppStore = defineStore({
  id: 't-app',
  state: (): any => ({
    title: '',
    token: '',
    theme: 'light',
    locale: 'en-US'
  }),
  actions: {
    setState(state: any) {
      const keys: any = Object.keys(state)
      keys.forEach((key: any) => {
        this[key] = state[key]
      })
    }
  }
})
