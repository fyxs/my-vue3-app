import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend' // 允许使用 setup 语法时自定义组件 name
import Components from 'unplugin-vue-components/vite'
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const envData = loadEnv(mode, './vite-environment')
  console.log('获取到环境变量：', command, mode, envData)
  return {
    envDir: './vite-environment',
    base: './',
    define: {
      'process.env': envData
    },
    plugins: [
      vue(),
      VueSetupExtend(),
      Components({
        resolvers: [
          AntDesignVueResolver({
            resolveIcons: true // 自动引入 ant-design/icons-vue 中的图标，需要安装@ant-design/icons-vue
          })
        ]
      })
    ],
    resolve: {
      // 路径别名
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true, // 允许js中加载less
          // 供全局使用：无需在style中再次引入以下less，即可直接使用less变量、mixin等（css原生全局变量无需在这里再次引入文件）
          additionalData: `
            @import "@/assets/styles/variables.less";
            @import "@/assets/styles/mixins.less";
          `
        }
      }
    }
  }
})
