import { createRouter, createWebHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import { appRoutes } from './app.router'

const routes: Array<RouteRecordRaw> = [...appRoutes]

const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_PUBLIC_PATH),
  routes
})

export default router
export * from './router.service'
