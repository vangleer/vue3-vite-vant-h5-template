import { App } from 'vue'
import { Button, NavBar, Tabbar, TabbarItem } from 'vant'

const components = [Button, NavBar, Tabbar, TabbarItem]

export const setupVant = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
