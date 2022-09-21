import NotFound from '@/views/NotFound.vue'
import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { appRoutes } from './app.router'

const routes: Array<RouteRecordRaw> = [
  ...appRoutes,
  {
    path: '/:id+', // + 匹配1 个或多个部分路由
    name: 'notFound',
    component: NotFound
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
})

export default router
export * from './router.service'
