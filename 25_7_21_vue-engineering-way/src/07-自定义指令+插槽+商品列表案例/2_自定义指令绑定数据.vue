<template>
<div>
    <p v-color="colorStr">哈哈哈哈</p>
</div>
</template>

<script setup>
    import { ref } from 'vue'
    const colorStr = ref('red') // 颜色
</script>

<style scoped>

</style>