import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '/@/views/Login.vue'
import Layout from '/@/layout/Index.vue'
import Home from '/@/views/tabbar/Home.vue'
import Category from '/@/views/tabbar/Category.vue'
import User from '/@/views/tabbar/User.vue'
import { useAppStore } from '/@/store'
import { getToken } from '/@/utils/auth'
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

// 路由白名单
const whiteList = ['/login']

router.beforeEach((to, from, next) => {
  if (to.path === '/login' || whiteList.includes(to.path)) {
    next()
  } else {
    const title = to.meta.title as string || 'Vite App'
    const token = getToken()
    const store = useAppStore()
    document.title = title
    if (!token) {
      store.setState({ title })
      return next('/login')
    }

    store.setState({ title, token })
    next()
  }
})

export default router
