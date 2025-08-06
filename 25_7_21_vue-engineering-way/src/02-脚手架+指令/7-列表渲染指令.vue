<template>
<div>
    <!-- 遍历数字数组 -->
    <li v-for="item, index in arr">
        {{ item }} => {{ index }}
    </li>
    <hr>

    <!-- 遍历数字 -->
    <li v-for="item, index in 5">
        {{ item }} => {{ index }}
    </li>
    <hr>

    <!-- 遍历对象数组 -->
    <div v-for="item in goodsList">
        {{ item.id }} => {{ item.name }} => {{ item.price }}
    </div>
    <hr>

    <!-- 遍历对象 -->
    <li v-for="value, key, index in obj">
        {{ value }} => {{ key }} => {{ index }}
    </li>
</div>
</template>

<script setup>
    import {ref} from 'vue'

    const arr = ref([11, 22, 33, 44]);

    const goodsList = ref([
        { id: 1, name: '篮球', price: 299 },
        { id: 2, name: '足球', price: 99 },
        { id: 3, name: '排球', price: 199 }
    ])

    const obj = ref({
        id: 1,
        name: "liren",
        age: 19
    })
</script>

<style scoped>

</style>