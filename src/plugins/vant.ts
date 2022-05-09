import { App } from 'vue'
import { Button } from 'vant'

const components = [Button]

export const setupVant = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
