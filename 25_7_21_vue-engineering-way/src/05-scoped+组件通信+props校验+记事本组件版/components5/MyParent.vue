<template>
    <div class="my-parent">
        <h3>我是父组件</h3>
        <my-child />
    </div>
</template>

<script setup>
    import MyChild from './MyChild.vue';
</script>

<style scoped>
    .my-parent {
        padding: 20px;
        background-color: chartreuse;
    }
</style>