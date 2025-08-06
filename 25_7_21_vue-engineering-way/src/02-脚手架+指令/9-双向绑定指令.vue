<template>
<div>
    用户：<input v-model="obj.username"><br><br>
    密码：<input v-model="obj.password"><br><br>

    <button>登录</button><button>重置</button>
</div>
</template>

<script setup>
    import {reactive} from 'vue'
    const obj = reactive({
        username: "",
        password: ""
    })
</script>

<style scoped>

</style>