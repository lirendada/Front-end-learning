<script setup>
    import { useTodoStore } from '@/09-Pinia：vue3状态管理/2.任务案例重构/store/todo';
    const todoStore = useTodoStore()
</script>

<template>
  <section class="main">
    <input id="toggle-all" class="toggle-all" type="checkbox" v-model="todoStore.isAllCompleted"/>
    <label for="toggle-all">Mark all as complete</label>
    <ul class="todo-list">
      <li v-for="(item, index) in todoStore.showLists" :key="item.id" :class="{completed:item.finished}">
        <div class="view">
          <input class="toggle" type="checkbox" v-model="item.finished"/>
          <label>{{ item.text }}</label>
          <button class="destroy" @click="todoStore.delWork(index)"></button>
        </div>
      </li>
    </ul>
  </section>
</template>