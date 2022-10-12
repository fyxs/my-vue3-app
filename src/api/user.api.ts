import { AxiosGet } from '@/utils/http.util'

export const getUsers = (params: any) => {
  return AxiosGet('/api/sys-user/sales/list/query', { params }) // 勤快点建议追加TS 规范具体参数类型，这里不做演示（嘿嘿嘿）
}
