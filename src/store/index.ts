import { useCounterStore } from '@/store/modules/counter'

export interface IAppStore {
  useCounterStore: ReturnType<typeof useCounterStore>
}

const appStore: IAppStore = {} as IAppStore

/**
 * 注册app状态库
 */
export const registerStore = () => {
  appStore.useCounterStore = useCounterStore()
}

const store = createPinia()

export { store }

export default appStore
