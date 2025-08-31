<script setup>
    import {ref} from 'vue'
    import { useTodoStore } from '@/09-Pinia：vue3状态管理/2.任务案例重构/store/todo';
    const todoStore = useTodoStore()

    const inputText = ref('')
    const onEnter = () => {
        if(!inputText.value) {
            alert('任务内容不能为空！')
            return
        }
        todoStore.addWork(inputText.value)
        inputText.value = ''
    }
</script>

<template>
  <header class="header">
    <h1>todos</h1>
    <input class="new-todo" placeholder="What needs to be finished?" autofocus 
        @keydown.enter="onEnter"
        v-model.trim="inputText"/>
  </header>
</template>