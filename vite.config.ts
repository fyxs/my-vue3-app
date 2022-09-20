import { fileURLToPath, URL } from "node:url"

import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"
import VueSetupExtend from "vite-plugin-vue-setup-extend" // 允许使用 setup 语法时自定义组件 name

// https://vitejs.dev/config/
export default defineConfig(({ command, mode }) => {
  const envData = loadEnv(mode, "./vite-environment")
  console.log("获取到环境变量：", command, mode, envData)
  return {
    envDir: "./vite-environment",
    base: "./",
    define: {
      "process.env": envData
    },
    plugins: [vue(), VueSetupExtend()],
    resolve: {
      // 路径别名
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    },
    css: {
      preprocessorOptions: {
        less: {
          javascriptEnabled: true, // 允许js中加载less
          // 供全局使用：无需在style中引入以下less，直接使用less变量等
          additionalData: `
            @import "@/assets/styles/variables.less";
            @import "@/assets/styles/mixins.less";
          `
        }
      }
    }
  }
})
