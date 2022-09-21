<script setup lang="ts">
import { RouterView } from 'vue-router'
import zhCN from 'ant-design-vue/es/locale/zh_CN'
import { message } from 'ant-design-vue'
import dayjs from 'dayjs'
import 'dayjs/locale/zh-cn'

dayjs.locale('zh-cn')

message.config({
  maxCount: 3 // 最大显示数, 超过限制时，最早的消息会被自动关闭
})
</script>

<template>
  <a-config-provider :locale="zhCN" component-size="small">
    <router-view />
  </a-config-provider>
</template>

<style scoped lang="less"></style>
