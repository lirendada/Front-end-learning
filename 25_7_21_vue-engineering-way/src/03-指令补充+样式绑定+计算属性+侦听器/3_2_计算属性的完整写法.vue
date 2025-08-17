<template>
<div>
    <input type="text" v-model="uname1"></input>
    <br></br>
    <input type="text" v-model="uname2"></input>
</div>
</template>

<script setup>
    import { computed } from 'vue';

    // 简易写法，默认为只读，不能修改视图
    const uname1 = computed(() => {
        return "liren";
    })

    // 完整写法，写出两个对象：get 和 set
    const uname2 = computed({
        get() {
            return "liren"
        }, 
        set(val) {
            console.log(val)
        }
    })
</script>

<style scoped>

</style>