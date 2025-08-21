<template>
<div class="my-left">
    <p>我是左组件</p>
    <button @click="sendMsg">点击我发送消息给右组件</button>
</div>
</template>

<script setup>
    import { ref } from 'vue';
    import meipo from './eventBug';

    const text = ref('i like you~')

    const sendMsg = () => {
        // 发送方调用emit()发送消息
        meipo.emit('msg', text.value)
    }
</script>

<style scoped>
    .my-left {
        flex: 1;
        background-color: antiquewhite;
        text-align: center;
        height: 100px;
    }
</style>