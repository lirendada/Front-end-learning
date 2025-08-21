<template>
    <div class="my-child">
        <h3>我是子组件</h3>
        <p>收到爷爷的压岁钱：{{ money }}</p>
    </div>
</template>

<script setup>
    import {inject} from 'vue'

    const money = inject('rmb')
</script>

<style scoped>
    .my-child {
        background-color: blanchedalmond;
        padding: 20px;
    }
</style>