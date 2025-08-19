<template>
    <life-cycle v-if="isAlive"/>
</template>

<script setup>
    import {ref} from 'vue'
    import LifeCycle from './components4/LifeCycle.vue';
    const isAlive = ref(true);
</script>

<style scoped>

</style>