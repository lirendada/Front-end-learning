<template>
    <MySelect v-model="activeId" />
</template>

<script setup>
    import {ref} from 'vue'
    import MySelect from './component1/MySelect.vue';

    const activeId = ref('222')
</script>

<style scoped>

</style>