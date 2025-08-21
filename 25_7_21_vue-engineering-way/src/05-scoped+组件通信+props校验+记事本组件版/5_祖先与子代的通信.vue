<template>
<div class="app">
    <h3>我是祖先组件</h3>
    <my-parent />
</div>
</template>

<script setup>
    import { provide, ref } from 'vue';
    import MyParent from './components5/MyParent.vue';
    
    const money = ref(520)
    provide('rmb', money)
</script>

<style scoped>
    .app {
        background-color: aqua;
        padding: 20px;
    }
</style>