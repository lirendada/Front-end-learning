<template>
<div class="app">
    <h1>根组件</h1>
    <span>库存总数: </span>
    <input type="number" v-model.number="stockStore.stock"></input>
    <hr></hr>
    <Add></Add>
    <hr></hr>
    <Sub></Sub>
</div>
</template>

<script setup>
    import Add from './components1/Add.vue';
    import Sub from './components1/Sub.vue';
    import { useStockStore } from './store1/stock';
    const stockStore = useStockStore()
</script>

<style scoped>
.app {
    width: 300px;
    margin: 60px auto;
    padding: 1px 3px;
    border: 1px solid rgb(164, 142, 164);
}
</style>