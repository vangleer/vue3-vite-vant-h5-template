import { App } from 'vue'
import { Button, Icon, NavBar, Tabbar, TabbarItem, ConfigProvider, Cell } from 'vant'

const components = [Button, NavBar, Tabbar, TabbarItem, Icon, ConfigProvider, Cell]

export const setupVant = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}
