<template>
<div>
    名称：<input type="text" v-model.trim="obj.name"></input><br><br>
    密码：<input type="text" v-model.number.lazy="obj.passwd"></input><br><br>
</div>
</template>

<script setup>
    import { reactive } from 'vue'

    const obj = reactive({
        name: '',
        passwd: ''
    })
</script>

<style scoped>

</style>