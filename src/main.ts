import { createApp } from 'vue'
import 'amfe-flexible'
import './assets/css/index.css'
import './assets/css/theme.css'
import 'virtual:svg-icons-register'
import { useI18n } from './plugins/i18n'
import { setupStore } from './store'
import { setupVant } from './plugins/vant'
import router from './router'
import App from './App.vue'

const app = createApp(App)
useI18n(app)
setupStore(app)
setupVant(app)
app.use(router)
app.mount('#app')
