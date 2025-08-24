<template>
    <select v-model="model">
        <option value="111">北京</option>
        <option value="222">上海</option>
        <option value="333">深圳</option>
        <option value="444">杭州</option>
        <option value="555">苏州</option>
    </select>
</template>

<script setup>
    const model = defineModel()
</script>

<style scoped>

</style>