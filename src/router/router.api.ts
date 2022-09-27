import type { Router } from 'vue-router'

// 全局路由守卫
export function routerBeforeEach(router: Router) {
  router.beforeEach((to, from, next) => {
    next()
  })
}
