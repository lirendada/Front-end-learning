<template>
<div class="add">
    <h3>Add组件</h3>
    <p>已知库存数：{{ stockStore.stock }}</p>
    <p>已知库存数的两倍：{{ stockStore.dbl_stock }}</p>
    <button @click="stockStore.addStock()">库存+1</button>
</div>
</template>

<script setup>
    import { useStockStore } from '@/store1/stock';
    const stockStore = useStockStore()
    
</script>

<style scoped>

</style>