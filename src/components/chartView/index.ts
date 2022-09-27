import { iLog } from '@/utils'

// 批量直接引入所有图表 option 配置方法
const modulesFiles: any = import.meta.glob('./**/*.ts', { eager: true })
iLog(modulesFiles, 'components:charts:index')
let modules = {}
Reflect.ownKeys(modulesFiles).forEach(path => {
  modules = Object.assign({}, modules, modulesFiles[path].default)
})

export default modules
