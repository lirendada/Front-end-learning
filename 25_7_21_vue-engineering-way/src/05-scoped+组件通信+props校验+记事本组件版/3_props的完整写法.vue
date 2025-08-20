<template>
    <MyProgress :width="20"/>
    <MyProgress :width="50"/>
    <MyProgress />
    <MyProgress :width="-10"/>
    <MyProgress :width="210"/>
</template>

<script setup>
    import MyProgress from './components3/MyProgress.vue';
</script>

<style scoped></style>