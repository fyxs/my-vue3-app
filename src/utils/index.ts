export * from './date.util'
export * from './html.util'
export * from './lodash.util'

export function getUUID() {
  return new Date().getTime() + (Math.random() * 1000).toFixed(4)
}
