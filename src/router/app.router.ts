import type { RouteRecordRaw } from 'vue-router'

const menuRoutes: Array<RouteRecordRaw> = [
  {
    path: '/home',
    name: 'home',
    component: () => import('@/views/HomeView.vue'),
    meta: { name: '首页' }
  },
  {
    path: '/testChart',
    name: 'testChart',
    component: () => import('@/views/testChart/index.vue'),
    meta: { name: '图例' }
  },
  {
    path: '/about',
    name: 'about',
    component: () => import('@/views/AboutView.vue'),
    meta: { name: '图例' }
  }
]

// 根路由
export const RootRoute: RouteRecordRaw = {
  path: '/',
  name: 'root',
  redirect: '/home'
}

export const LoginRoute: RouteRecordRaw = {
  path: '/login',
  name: 'login',
  component: () => import('@/views/NotFound.vue')
}

// 404
export const NotFoundRoute: RouteRecordRaw = {
  path: '/:id+', // * 匹配 0个或多个部分路由，+ 至少匹配一个
  name: 'notFound',
  component: () => import('@/views/NotFound.vue')
}

const appRoutes: Array<RouteRecordRaw> = [RootRoute, LoginRoute, ...menuRoutes, NotFoundRoute]

export { appRoutes }
