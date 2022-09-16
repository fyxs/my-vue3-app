import { fileURLToPath, URL } from "node:url"

import { defineConfig, loadEnv } from "vite"
import vue from "@vitejs/plugin-vue"

// https://vitejs.dev/config/
export default ({ mode }) => {
  const envData = loadEnv(mode, "./vite-environment")
  console.log("获取到环境变量：", mode, envData)
  return defineConfig({
    envDir: "./vite-environment",
    base: "./",
    define: {
      "process.env": loadEnv(mode, process.cwd())
    },
    plugins: [vue()],
    resolve: {
      // 路径别名
      alias: {
        "@": fileURLToPath(new URL("./src", import.meta.url))
      }
    }
  })
}
