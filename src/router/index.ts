import NotFound from '@/views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { appRoutes } from './app.router'

const routes: Array<RouteRecordRaw> = [
  ...appRoutes,
  {
    path: '/:id+', // * 匹配 0个或多个部分路由，+ 至少匹配一个
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
export * from './router.api'
