<template>
<div>
    <!-- 三元绑定 -->
    <p :class="isActive ? 'active' : ''">active1</p>

    <!-- 对象绑定 -->
    <p :class="{active : isActive}">active2</p>

    <!-- 静态class和动态class是可以共存的 -->
    <p class="item" :class="{active : isActive}">active3</p>
</div>
</template>

<script setup>
    import {ref} from 'vue'

    const isActive = ref(false);
</script>

<style scoped>
    .active {
        color: aqua;
    }
</style>