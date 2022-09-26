// import type { echartsO } from 'echarts/components'
type RendererType = 'canvas' | 'svg'

export interface Props {
  width: string
  height: string
  autoResize: boolean
  chartOption: any
  type: RendererType
}
