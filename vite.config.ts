import { fileURLToPath, URL } from 'node:url'

import { defineConfig, loadEnv } from 'vite'
import vue from '@vitejs/plugin-vue'
import VueSetupExtend from 'vite-plugin-vue-setup-extend' // 允许使用 setup 语法时自定义组件 name
// 自动引入某些Vue UI库组件
import Components from 'unplugin-vue-components/vite'
// 引入 ant-design-vue 解析器，配合 unplugin-vue-components 自动引入 ant-design-vue UI组件
import { AntDesignVueResolver } from 'unplugin-vue-components/resolvers'
// 使用 unplugin-vue-components 引入ui库的时候，message, notification 等引入样式不生效 安装 vite-plugin-style-import 解决
import { createStyleImportPlugin, AndDesignVueResolve } from 'vite-plugin-style-import'

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
    server: {
      host: 'localhost', // 默认 localhost，与127.0.0.1映射，代表本地，因此两者之间可以互相访问。host 文件配置域名解析，可通过域名访问
      port: 8080,
      https: false, // 启用 TLS + HTTP/2。注意：当 server.proxy 选项 也被使用时，将会仅使用 TLS
      open: false, //vite项目启动时自动打开浏览器
      // 指定服务器响应的 header
      headers: {
        'Access-Control-Allow-Origin': '*'
      },
      proxy: {
        '/api': {
          target: envData.VITE_API_URL, // api服务器地址
          changeOrigin: true, // 将主机头的来源更改为目标 URL。能够跨域
          secure: false // 是否想要验证 SSL证书
        }
      }
    },
    plugins: [
      vue(),
      VueSetupExtend(),
      Components({
        dirs: ['src/components', 'src/views'], // 要搜索组件的目录的相对路径
        extensions: ['vue'], // 组件的有效文件扩展名
        deep: true, // 搜索子目录
        resolvers: [
          AntDesignVueResolver({
            resolveIcons: true // 自动引入 ant-design/icons-vue 中的图标，需要安装@ant-design/icons-vue
          })
        ]
      }),
      createStyleImportPlugin({
        resolves: [AndDesignVueResolve()],
        // 自定义规则
        libs: [
          {
            libraryName: 'ant-design-vue',
            esModule: true,
            resolveStyle: name => {
              return `ant-design-vue/es/${name}/style/index` // 组件样式按需加载
            }
          }
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
    },
    build: {
      chunkSizeWarningLimit: 800 // 规定触发警告的 chunk 大小，默认 500。（以 kbs 为单位）
    }
  }
})
