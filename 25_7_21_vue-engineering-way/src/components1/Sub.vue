<template>
<div class="sub">
    <h3>Sub组件</h3>
    <p>已知库存数：{{ stockStore.stock }}</p>
    <button @click="stockStore.subStock()">库存-1</button>
</div>
</template>

<script setup>
    import { useStockStore } from '@/store1/stock';
    const stockStore = useStockStore()
</script>

<style scoped>

</style>