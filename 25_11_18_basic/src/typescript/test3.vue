<template>
<div>
    <button @click="isOpen = !isOpen">{{ isOpen ? '开' : '关' }}</button>
    <p>{{ personInfo?.age }}, {{ personInfo?.name }}</p>
</div>

</template>

<script setup lang="ts">
    import {ref} from 'vue'
    const isOpen = ref<boolean>()
    const personInfo = ref<{name: string; age: number}>({name:'lirendada', age: 15});
</script>