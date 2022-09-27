<script setup lang="ts">
/**
 * @description 此处封装了echarts，只需在options 目录下相应的图表类型文件配置相应 option，
 * 使用该组件时 获取并传递配置好的 option 即可，具体可参考当前工程案例
 */
import { onMounted, onBeforeUnmount, ref, watch } from 'vue'
import { echarts } from '@/utils'
import type { ECOption } from '@/utils'

type RendererType = 'canvas' | 'svg'
type Props = {
  width: string
  height: string
  autoResize: boolean
  chartOption: ECOption
  type: RendererType
}

// defineProps 的泛型参数不能从外部文件引入，只能是类型字面量，或同文件中定义的类型的引用。（竟然不支持外部文件引用的类型！！！）
const props = withDefaults(defineProps<Props>(), {
  width: '100%',
  height: '100%',
  autoResize: true,
  type: 'canvas'
})

let chartInstance: any
// chart 模板引用
const chartRef = ref(null)
const emit = defineEmits(['click'])

onMounted(() => {
  initChart()
  // 监听 window:resize 事件，以动态调整chart size
  if (props.autoResize) {
    window.addEventListener('resize', resizeHandler)
  }
})

// 监听 chartOption
watch(
  props.chartOption,
  newVal => {
    setOptions(newVal)
  },
  { deep: true }
)

// chart 尺寸重置
function resizeHandler() {
  chartInstance.resize()
}

// 初始化图表
function initChart() {
  chartInstance = echarts.init(chartRef.value as unknown as HTMLElement, '', {
    renderer: props.type
  })
  chartInstance.setOption(props.chartOption)
  chartInstance.on('click', handleClick)
}

// chart 点击事件钩子
function handleClick(params: any) {
  emit('click', params)
}

// 清理旧chart 并设置chart options
function setOptions(option: any) {
  clearChart()
  resizeHandler()
  if (chartInstance) {
    chartInstance.setOption(option)
  }
}

// 刷新 chart
function refresh() {
  setOptions(props.chartOption)
}

// 清理 chart实例
function clearChart() {
  chartInstance && chartInstance.clear()
}

// setup 中的内容是封闭的，数据只有通过 defineExpose 暴露出去，其它组件才能通过 ref 等获取实例后访问
defineExpose({
  refresh
})

// 组件销毁前 彻底清理当前chart
onBeforeUnmount(() => {
  if (chartInstance) {
    return
  }
  if (props.autoResize) {
    window.removeEventListener('resize', resizeHandler)
  }
  chartInstance.dispose()
  chartInstance = null
})
</script>

<template>
  <div id="shared-echart-sfc">
    <div ref="chartRef" :style="{ height: height, width: width }" />
  </div>
</template>
