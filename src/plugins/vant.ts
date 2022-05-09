import { App } from 'vue'
import { Button, Icon, NavBar, Tabbar, TabbarItem } from 'vant'

const components = [Button, NavBar, Tabbar, TabbarItem, Icon]

export const setupVant = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
