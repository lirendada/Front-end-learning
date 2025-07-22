<template>
<div class="red" v-show="visible"></div>
<div class="green" v-if="visible"></div>

<hr>

<div v-if="isLogin">xxx，欢迎回来！</div>
<div v-else>你好，请登录！</div>
</template>

<script setup>
    import {ref} from 'vue'
    const visible = ref(true);
    const isLogin = ref(true);
</script>

<style scoped>
    .red, .green {
        width: 500px;
        height: 250px;
    }

    .red {
        background-color: red;
    }

    .green {
        background-color: green;
    }
</style>