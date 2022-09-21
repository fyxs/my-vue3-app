/** 加载js */
export function loadScript(url: string) {
  return new Promise((resolve, reject) => {
    const script: any = document.createElement('script')
    script.type = 'text/javascript'
    //IE
    if (script.readyState) {
      script.onreadystatechange = function () {
        if (script.readyState == 'loaded' || script.readyState == 'complete') {
          script.onreadystatechange = null
          resolve(true)
        }
      }
    } else {
      //其他浏览器
      script.onload = function () {
        resolve(true)
      }
      script.onerror = function () {
        reject(false)
      }
    }
    script.src = url
    document.getElementsByTagName('head')[0].appendChild(script)
  })
}

/** 获取路径后的参数 */
export const getUrlParams = (data: string | { [key: string]: string | number }): string => {
  let str = ''
  if (typeof data === 'string') {
    return '&' + data
  }
  if (typeof data === 'object') {
    for (const key in data) str += '&' + key + '=' + encodeURIComponent(data[key])
  }
  return str + '&_time=' + Date.now()
}

/** jsonp请求 */
export const jsonp = (url: string, data: string | { [key: string]: string | number }) => {
  const callback: string = 'test' + Math.random().toString().substring(9, 18)
  const JSONP = document.createElement('script')
  JSONP.setAttribute('type', 'text/javascript')
  const headEle = document.getElementsByTagName('head')[0]
  const ret = getUrlParams(data)
  JSONP.src = `${url}?callback=${callback}${ret}`
  return new Promise(resolve => {
    // 预先在括号的前面加个 ; ，可以避免 (window as any) 被误认为某个 xxx 的参数，假如 (window as any) 前面加了个 xxx 的话。此处其实没必要加的，当学习学习了
    ;(window as any)[callback] = (r: any) => {
      resolve(r)
      headEle.removeChild(JSONP)
      delete (window as any)[callback]
    }
    headEle.appendChild(JSONP)
  })
}

/** 创建a标签下载文件 */
export function cerateAElementDown(url: string, title: string) {
  /**
   * 原本使用url是可以直接用window.href = url 来下载，
   * 但是这样的话会因为同源问题而download属性设置不生效导致文件名还是下载的时候的url后缀文件名
   */
  const xhr = new XMLHttpRequest()
  xhr.open('GET', url, true)
  xhr.responseType = 'blob'
  xhr.onload = function () {
    if (xhr.status === 200) {
      const link = document.createElement('a')
      const body = document.body

      link.href = window.URL.createObjectURL(xhr.response)
      link.download = title
      link.style.display = 'none'
      body.appendChild(link)
      link.click()
      body.removeChild(link)
      window.URL.revokeObjectURL(link.href)
    }
  }
  xhr.send()
}
