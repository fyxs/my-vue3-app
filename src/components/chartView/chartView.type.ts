import type { ECOption } from '@/utils'

type RendererType = 'canvas' | 'svg'
export interface Props {
  width: string
  height: string
  autoResize: boolean
  chartOption: ECOption
  type: RendererType
}
