import { createApp } from 'vue'
import { createPinia } from 'pinia'

import AppView from './App.vue'
import router from './router'

import './assets/styles/main.less'

function render() {
  const app = createApp(AppView)

  app.use(createPinia())
  app.use(router)

  app.mount('#app')
}

render()
