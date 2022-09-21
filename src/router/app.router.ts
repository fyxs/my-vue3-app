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
  // {
  //   path: 'user',
  //   name: 'user',
  //   component: RouterView,
  //   children: [
  //     {
  //       path: 'extension',
  //       name: 'user/extension',
  //       component: () => import(''),
  //       meta: { name: '用户' }
  //     }
  //   ]
  // }
]

const appRoutes: Array<RouteRecordRaw> = [
  // {
  //   path: '/login',
  //   name: 'login',
  //   component: () => import('')
  // },
  {
    path: '/index',
    name: 'index',
    component: () => import('@/components/layout/index.vue'),
    children: [...childRoutes]
  }
]

export { appRoutes }
