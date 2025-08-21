<template>
<div class="app">
    <my-left />
    <my-right />
</div>
</template>

<script setup>
    import MyLeft from './components6/MyLeft.vue';
    import MyRight from './components6/MyRight.vue';
</script>

<style scoped>
 .app {
    display: flex;
    align-items: center;
    justify-content: center;
 }
</style>