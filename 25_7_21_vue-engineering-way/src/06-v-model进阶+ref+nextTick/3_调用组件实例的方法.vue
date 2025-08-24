<template>
    <MyForm ref="form_ref"/>
    <button @click="loginUp">登录</button>
</template>

<script setup>
    import { ref } from 'vue';
    import MyForm from './components3/MyForm.vue';

    const form_ref = ref(null)

    const loginUp = () => {
        if(form_ref.value.validate() === true) {
            console.log("登录成功");
        } else {
            console.log("登录失败");
        }
    }
</script>

<style scoped>

</style>