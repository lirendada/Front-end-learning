<template>
<div>
    {{ count }}
    <button v-on:click="count++">加一</button>
    <button v-on:click="add(3)">加三</button>
    <button v-on:click="add(5)">加五</button>

    <button @click="add(10)">加十</button>
</div>
</template>

<script setup>
    import { ref } from 'vue'


    const count = ref(0);


    const add = (n) => {
        count.value += n;
    }
</script>

<style scoped>

</style>