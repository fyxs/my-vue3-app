/**
 * axios相关类型声明
 */

// 定义类型集合用 interface 其它用 type
export interface KeyObject {
  [key: string]: any
}

/** 返回的 Response 结构 */
export interface ResponseModel<T> {
  status: 200 | 401 | 403
  result: T
  description: null | string
}

/** 获取的如 Table 数据基本结构 */
export interface GetListAxios<T> {
  list: T[]
  totalCount: number
}
