import { createApp } from 'vue'
import { setupStore } from './store'
import router from './router'
import App from './App.vue'

const app = createApp(App)
setupStore(app)
app.use(router)
app.mount('#app')
