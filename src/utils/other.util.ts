/**
 * @params unlimited：是否无限制即任何时候都打印，默认 false 生产环境不打印
 * @description 自定义console.log
 */
function iConsole(unlimited = false) {
  if (unlimited || import.meta.env.VITE_ENV !== 'prod') {
    return console.log
  } else {
    return function () {}
  }
}

export const iLog = iConsole()
