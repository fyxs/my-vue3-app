export * from './other.util'
export * from './http.util'
export * from './date.util'
export * from './html.util'
export * from './lodash.util'
export * from './echarts.util'

export function getUUID() {
  return new Date().getTime() + (Math.random() * 1000).toFixed(4)
}
