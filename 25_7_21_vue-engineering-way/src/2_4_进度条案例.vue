<!-- <template>
<div class="progress">
    <div class="inner" :style="{width: x/4 * 100 + '%'}">
        <span>{{ x/4 * 100 + '%' }}</span>
    </div>
</div>
<button @click="x = 1">设置25%</button>
<button @click="x = 2">设置50%</button>
<button @click="x = 3">设置75%</button>
<button @click="x = 4">设置100%</button>
</template>

<script setup>
    import {ref} from 'vue'

    const x = ref(0);
</script>

<style scoped>
.progress {
    height: 25px;
    width: 400px;
    border-radius: 15px;
    background-color: #272425;
    border: 3px solid #272425;
    box-sizing: border-box;
    margin-bottom: 30px;
}
.inner {
    height: 20px;
    border-radius: 10px;
    text-align: right;
    position: relative;
    background-color: #409eff;
    background-size: 20px 20px;
    box-sizing: border-box;
    transition: all 1s;
}
.inner span {
    position: absolute;
    right: -25px;
    bottom: -25px;
}
</style> -->


<template>
  <div class="progress">
    <!-- 关键：把 width 也绑定给 smoothPercent -->
    <div class="inner" :style="{ width: smoothPercent + '%' }">
      <span>{{ smoothPercent.toFixed(0) }}%</span>
    </div>
  </div>

  <button @click="target = 0">0%</button>
  <button @click="target = 25">25%</button>
  <button @click="target = 50">50%</button>
  <button @click="target = 75">75%</button>
  <button @click="target = 100">100%</button>
</template>

<script setup>
import { ref } from 'vue'
import { useTransition } from '@vueuse/core'

const target = ref(0)
// 一条时间线同时驱动 width 和文字
const smoothPercent = useTransition(target, {
  duration: 1000,
  transition: [0.25, 0.1, 0.25, 1]
})
</script>

<style scoped>
.progress {
    height: 25px;
    width: 400px;
    border-radius: 15px;
    background-color: #272425;
    border: 3px solid #272425;
    box-sizing: border-box;
    margin-bottom: 30px;
}
.inner {
    height: 20px;
    border-radius: 10px;
    text-align: right;
    position: relative;
    background-color: #409eff;
    background-size: 20px 20px;
    box-sizing: border-box;
    /* transition: all 1s; */
}
.inner span {
    position: absolute;
    right: -25px;
    bottom: -25px;
}
</style>