import { AxiosGet } from '@/utils/http.util'

export const getUsers = (params: any) => {
  return AxiosGet('/api/sys-user/sales/list/query', { params })
}
