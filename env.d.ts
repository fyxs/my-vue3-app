/// <reference types="vite/client" />

// 用于 TypeScript 的环境变量智能提示配置
interface ImportMetaEnv {
  // 当前环境
  readonly VITE_ENV: string
  // 公共基础路径
  readonly VITE_BASE_URL: string
  // api base地址
  readonly VITE_API_URL: string
  // 更多环境变量...
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
