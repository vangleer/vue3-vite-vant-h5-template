import { defineStore } from 'pinia'
import { appType } from './types'
export const useAppStore = defineStore({
  id: 't-app',
  state: (): appType => ({
    title: '',
    token: ''
  }),
  actions: {
    setState(state: appType) {
      const keys: any = Object.keys(state)
      keys.forEach((key: keyof appType) => {
        this[key] = state[key]
      })
    }
  }
})