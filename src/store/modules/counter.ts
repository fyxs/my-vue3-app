import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', () => {
  const initState = {
    count: 0
  }

  // 相当于 state
  const count = ref(initState.count)

  // 相当于 getter
  const doubleCount = computed(() => count.value * 2)

  // 相当于action
  function increment() {
    count.value++
  }

  // 严格通过 action 去更改count 而不是$state直接修改
  function setCount(val: number) {
    count.value = val
  }

  // composition API 方式定义store $reset等store内置方法无法正常使用，需重写
  function reset() {
    count.value = initState.count
  }

  return { count, doubleCount, increment, setCount, reset }
})
