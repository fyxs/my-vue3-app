import type { RouteRecordRaw } from 'vue-router'

const childRoutes: Array<RouteRecordRaw> = [
  {
    path: 'home',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { name: '首页' }
  },
  {
    path: 'about',
    name: 'about',
    component: () => import('../views/AboutView.vue')
  }
]

const appRoutes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'root',
    redirect: '/home',
    children: [...childRoutes]
  }
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('')
  // },
  // {
  //   path: '/index',
  //   name: 'index',
  //   component: () => import('@/components/layout/index.vue'),
  //   children: [...childRoutes]
  // }
]

export { appRoutes }
