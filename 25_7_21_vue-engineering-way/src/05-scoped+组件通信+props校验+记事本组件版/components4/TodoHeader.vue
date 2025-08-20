<script setup>
    import {ref} from 'vue'
    
    const inputText = ref('')

    const emit = defineEmits()

    // 添加事件，通知父组件添加内容
    const addWork = () => {
        if(!inputText.value) {
            return alert('任务名称不能为空！')
        }
        emit('addToggle', inputText.value)
        inputText.value = ''
    }
</script>

<template>
    <header class="header">
        <h1>利刃的记事本</h1>
        <input class="new-todo" placeholder="What needs to be finished?" autofocus  
            v-model.trim="inputText" @keyup.enter="addWork"
        />
    </header>
</template>