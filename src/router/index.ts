import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '/@/views/Login.vue'
import Layout from '/@/layout/Index.vue'
import Home from '/@/views/tabbar/Home.vue'
import Category from '/@/views/tabbar/Category.vue'
import User from '/@/views/tabbar/User.vue'
export const tabbar: Array<RouteRecordRaw> = [
  {
    path: '/home',
    component: Home,
    meta: {
      title: '首页',
      icon: 'home-o'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: '分类',
      icon: 'qr'
    }
  },
  {
    path: '/user',
    component: User,
    meta: {
      title: '我的',
      icon: 'user-o'
    }
  }
]
const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: Layout,
    redirect: '/home',
    children: tabbar
  },
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
