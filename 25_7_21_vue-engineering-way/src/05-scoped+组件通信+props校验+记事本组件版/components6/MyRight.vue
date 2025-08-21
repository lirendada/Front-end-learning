<template>
<div class="my-right">
    <p>我是右组件</p>
</div>
</template>

<script setup>
    import meipo from './eventBug';

    // 接收方调用 on() 接收消息并且进行处理
    meipo.on('msg', (text) => {
        console.log(text);
    })
</script>

<style scoped>
    .my-right {
        flex: 1;
        background-color: palegreen;
        text-align: center;
        height: 100px;
    }
</style>