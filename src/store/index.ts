import { App } from 'vue'
import { createPinia } from 'pinia'

export const setupStore = (app: App) => {
  app.use(createPinia())
}
