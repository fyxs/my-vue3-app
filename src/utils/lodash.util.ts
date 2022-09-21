import { pickBy, cloneDeep, isNil, debounce, forOwn, throttle } from 'lodash-es'

/** 最后一次才会执行 防抖 */
export function _debounce(func: (...arg: any[]) => void, wait: number): (...args: any) => void {
  return debounce(func, wait)
}

/** 一段时间执行一次 节流 */
export function _throttle(func: (...arg: any[]) => void, wait: number): (...args: any) => void {
  return throttle(func, wait)
}

/**
 * 深拷贝一个对象
 * @param obj 对象
 * @returns
 */
export function _cloneDeep<T>(obj: { [key: string]: any }) {
  return cloneDeep(obj) as T
}

/**
 * 判断值是不是null和undefined
 * @param value
 * @returns
 */
export function _isNil(value: any) {
  return isNil(value)
}
/**
 * 将对象中的所有空字符串，null, undefined去除
 * @param obj 对象
 * todo 这里的类型存在使用问题，以后研究
 * @returns
 */
export function _pickObjectNoEmpty<T = { [key: string]: any }>(obj: { [key: string]: any } | { [key: string]: any }[]) {
  if (Array.isArray(obj)) {
    return obj.map(ob =>
      pickBy(ob, value => {
        return value || value === 0
      })
    ) as T[]
  }
  return pickBy(obj, value => {
    return value || value === 0
  }) as T
}

/**
 * 将对象中的特殊的值修改为固定的值
 * @param obj 对象
 * @returns
 */
export function _pickObjectTransform(
  obj: { [key: string]: any } | { [key: string]: any }[],
  objFun: { [key: string]: (value: any, obj?: { [key: string]: any }) => any }
) {
  if (Array.isArray(obj)) {
    obj.map(ob =>
      forOwn(ob, (value, key, object) => {
        if (objFun[key] && object) {
          object[key] = objFun[key](value, object)
        } else {
          if (typeof value === 'object') {
            _pickObjectTransform(value, objFun)
            return
          }
        }
      })
    )
  }
  return forOwn(obj as { [key: string]: any }, (value, key, object) => {
    if (object && objFun[key]) {
      object[key] = objFun[key](value, object)
    } else {
      if (typeof value === 'object') {
        _pickObjectTransform(value, objFun)
        return
      }
    }
  })
}
