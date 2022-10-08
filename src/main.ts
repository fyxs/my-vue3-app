import { createApp } from 'vue'
import store from './stores'

import AppView from './App.vue'
import router from './router'
import eChartFns from '@/components/chartView/index'

import './assets/styles/main.less'
import { iLog } from './utils'

iLog('import.meta\u200b.env', import.meta.env, 'process\u200b.env', process.env) // 字符串中还不能直接含有 import.meta.env、process.env，否则编译直接GG

function render() {
  const app = createApp(AppView)

  app.config.globalProperties.$eChartFns = eChartFns

  app.use(store)
  app.use(router)

  app.mount('#app')
}

render()
