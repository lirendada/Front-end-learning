<script setup>
    import { useTodoStore } from '@/09-Pinia：vue3状态管理/2.任务案例重构/store/todo';
    const todoStore = useTodoStore()
</script>

<template>
  <footer class="footer">
    <span class="todo-count"><strong>{{ todoStore.unfinishedLists.length }}</strong> item left</span>
    <ul class="filters">
      <li>
        <a href="#/" :class="{selected: todoStore.TYPE.ALL === todoStore.selectType}" @click="todoStore.selectType = todoStore.TYPE.ALL">All</a>
      </li>
      <li>
        <a href="#/active" :class="{selected: todoStore.TYPE.DONE === todoStore.selectType}" @click="todoStore.selectType = todoStore.TYPE.DONE">Active</a>
      </li>
      <li>
        <a href="#/completed" :class="{selected: todoStore.TYPE.UNDONE === todoStore.selectType}" @click="todoStore.selectType = todoStore.TYPE.UNDONE">Completed</a>
      </li>
    </ul>
    <button class="clear-completed" @click="todoStore.delCompletedWork">
      Clear completed
    </button>
  </footer>
</template>