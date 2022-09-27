<script setup lang="ts">
import { iLog } from '@/utils'
import { getCurrentInstance, reactive } from 'vue'

const currentInstance = getCurrentInstance()
const globalProperties = currentInstance?.appContext.config.globalProperties
const chartOption = reactive(globalProperties?.$eChartFns?.testBar())
iLog(chartOption, 'views:TestChart:chartOption')
</script>
<template>
  <div class="chartTestView">
    <h2>echarts图表封装示例1</h2>
    <ChartView class="chart-container" :chartOption="chartOption" :autoResize="true" />
  </div>
</template>

<style scoped lang="less">
.chart-container {
  width: 500px;
  height: 300px;
}
</style>
