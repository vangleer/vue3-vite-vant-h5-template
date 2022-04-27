import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '/@/views/login.vue'
const routes: Array<RouteRecordRaw> = [
  {
    path: '/login',
    component: Login
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
