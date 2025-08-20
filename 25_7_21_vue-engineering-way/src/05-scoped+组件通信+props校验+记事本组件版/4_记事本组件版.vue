<template>
    <section class="todoapp">
        <TodoHeader @addToggle="addWork"/>
        <TodoMain :todoList="todoList" @removeToggle="removeWork"/>
        <TodoFooter :todoList="todoList" @removeAllToggle="removeAllWork"/>
    </section>
</template>

<script setup>
    import TodoHeader from './components4/TodoHeader.vue';
    import TodoMain from './components4/TodoMain.vue';
    import TodoFooter from './components4/TodoFooter.vue';
    import './assets/style.css'
    import {ref, watch} from 'vue'

    const WORK_KEY = 'work-key'

    const todoList = ref(
        JSON.parse(localStorage.getItem(WORK_KEY)) || [
        { id: 321, name: '学Vue组件通信', finished: false },
        { id: 127, name: '打王者', finished: true },
        { id: 666, name: '跑步1小时', finished: false }
    ])

    // 添加任务
    const addWork = (content) => {
        todoList.value.push({
            id: Date.now(),
            name: content,
            finished: false
        })
    }

    // 删除任务
    const removeWork = (index) => {
        if (window.confirm('确认删除么?')) {
            todoList.value.splice(index, 1);
        }
    }

    // 删除所有完成的任务
    const removeAllWork = () => {
        if (window.confirm('确认删除么?')) {
            todoList.value = todoList.value.filter((item) => item.finished === false)
        }
    }

    watch(todoList, (newVal) => {
        localStorage.setItem(WORK_KEY, JSON.stringify(newVal))
    }, {deep: true})
</script>

<style scoped>

</style>