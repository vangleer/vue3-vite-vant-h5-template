import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import Login from '/@/views/Login.vue'
import Layout from '/@/layout/Index.vue'
import Home from '/@/views/tabbar/Home.vue'
import Category from '/@/views/tabbar/Category.vue'
import User from '/@/views/tabbar/User.vue'
import { useAppStore } from '/@/store'
import { getToken } from '/@/utils/auth'
import { t } from '/@/plugins/i18n'
export const tabbar: Array<RouteRecordRaw> = [
  {
    path: '/home',
    component: Home,
    meta: {
      title: 'home.title',
      icon: 'home-o'
    }
  },
  {
    path: '/category',
    component: Category,
    meta: {
      title: 'category.title',
      icon: 'qr'
    }
  },
  {
    path: '/user',
    component: User,
    meta: {
      title: 'user.title',
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
  const title = (to.meta.title as string) || 'Vite App'
  document.title = t(title)
  const token = getToken()
  if (to.path === '/login' || whiteList.includes(to.path)) {
    if (token) {
      next('/')
    } else {
      next()
    }
  } else {
    const store = useAppStore()
    if (!token) {
      store.setState({ title })
      return next('/login')
    }

    store.setState({ title, token })
    next()
  }
})

export default router
