<script setup>
    import { ref } from 'vue'

    const msg = ref('<span style="color:red;">hello liren</span>');
</script>

<template>
    <p v-text="msg"></p>
    <p v-html="msg"></p>
</template>

<style scoped>
</style>